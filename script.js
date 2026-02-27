// ==== Global Variables ====
let currentCategory = "";
let currentQuestionIndex = 0;
let currentScore = 0;
let questionsAnswered = 0;
let skippedQuestions = 0;
let timerInterval;
const TIMER_DURATION = 30;
const maxSkips = 3;
const QUESTIONS_PER_SESSION = 100;

let quizScreen, categoryGrid, questionText, optionsBox, feedbackElement, skipButton, nextButton;
let questionCountElement, timerBar, timerText, resultScreen, finalScoreElement, resultChart;
let leaderboardList, musicToggle, themeToggle, bgMusic;
let reviewScreen, reviewList, reviewToggle;

const reviewData = [];
let currentQuestionPool = [];

// ==== Initialize ====
document.addEventListener('DOMContentLoaded', () => {
    quizScreen = document.getElementById('quiz-screen');
    categoryGrid = document.querySelector('.category-grid');
    questionText = document.getElementById('question-text');
    optionsBox = document.getElementById('options-box');
    feedbackElement = document.getElementById('feedback');
    skipButton = document.getElementById('skip-btn');
    nextButton = document.getElementById('next-btn');
    questionCountElement = document.getElementById('question-count');
    timerBar = document.getElementById('timer-progress');
    timerText = document.getElementById('timer-text');
    resultScreen = document.getElementById('result-screen');
    finalScoreElement = document.getElementById('final-score');
    resultChart = document.getElementById('result-chart');
    leaderboardList = document.getElementById('leaderboard-list');
    musicToggle = document.querySelector('.music-toggle');
    themeToggle = document.querySelector('.theme-toggle');
    bgMusic = document.getElementById('bg-music');
    reviewScreen = document.getElementById('review-screen');
    reviewList = document.getElementById('review-list');
    reviewToggle = document.getElementById('review-toggle');

    if (musicToggle) musicToggle.onclick = toggleMusic;
    if (themeToggle) themeToggle.onclick = toggleTheme;
    if (skipButton) skipButton.onclick = skipQuestion;
    if (nextButton) nextButton.onclick = nextQuestion;
    if (reviewToggle) reviewToggle.onclick = toggleReviewFilter;

    if (nextButton) nextButton.disabled = true;
});

// ==== Start Quiz ====
function startCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    currentScore = 0;
    questionsAnswered = 0;
    skippedQuestions = 0;
    reviewData.length = 0;

    currentQuestionPool = generateQuestionPool(category);

    categoryGrid.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
}

// ==== Question Pool Randomization (Advanced) ====
function generateQuestionPool(category) {
    const allQuestions = [...window.quizData[category]];
    const usedKey = `usedQuestions_${category}`;
    let usedQuestions = JSON.parse(localStorage.getItem(usedKey)) || [];

    // Filter out already used
    const available = allQuestions.filter((_, index) => !usedQuestions.includes(index));

    let selected = [];
    if (available.length >= QUESTIONS_PER_SESSION) {
        selected = randomPick(available, QUESTIONS_PER_SESSION);
        // Save used indices
        const newUsed = usedQuestions.concat(
            allQuestions.map((_, i) => i).filter(i => available.includes(allQuestions[i])).slice(0, QUESTIONS_PER_SESSION)
        );
        localStorage.setItem(usedKey, JSON.stringify(newUsed));
    } else {
        // Not enough unused → reset memory
        localStorage.setItem(usedKey, "[]");
        selected = randomPick(allQuestions, QUESTIONS_PER_SESSION);
    }
    return selected;
}

function randomPick(arr, n) {
    let copy = [...arr];
    let result = [];
    for (let i = 0; i < n; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(idx, 1)[0]);
    }
    return result;
}

// ==== Load Question ====
function loadQuestion() {
    const qData = currentQuestionPool[currentQuestionIndex];
    questionText.innerText = qData.question;
    optionsBox.innerHTML = '';

    qData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, qData.answer);
        optionsBox.appendChild(btn);
    });

    feedbackElement.innerText = '';
    skipButton.disabled = skippedQuestions >= maxSkips;
    questionCountElement.innerText = `Question ${currentQuestionIndex + 1} of ${QUESTIONS_PER_SESSION}`;
    nextButton.disabled = true;
    startTimer();
}

// ==== Timer ====
function startTimer() {
    let timeLeft = TIMER_DURATION;
    timerText.innerText = timeLeft;
    timerBar.style.width = '100%';

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft;
        timerBar.style.width = (timeLeft / TIMER_DURATION) * 100 + '%';

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            feedbackElement.innerText = `⏰ Time's up! Correct answer: ${currentQuestionPool[currentQuestionIndex].answer}`;
            feedbackElement.style.color = '#ffa726';
            disableOptions();
            nextButton.disabled = false;
        }
    }, 1000);
}

// ==== Answer Check ====
function checkAnswer(selected, correct) {
    clearInterval(timerInterval);
    questionsAnswered++;
    const isCorrect = selected === correct;

    if (isCorrect) {
        currentScore++;
        feedbackElement.innerHTML = "🎉 Correct!";
        feedbackElement.style.color = "#00e676";
        startConfetti();
    } else {
        feedbackElement.innerHTML = `❌ Correct answer: ${correct}`;
        feedbackElement.style.color = "#ff5252";
    }

    reviewData.push({
        question: currentQuestionPool[currentQuestionIndex].question,
        options: currentQuestionPool[currentQuestionIndex].options,
        correctAnswer: correct,
        selectedAnswer: selected,
        isCorrect
    });

    disableOptions();
    nextButton.disabled = false;
}

function disableOptions() {
    optionsBox.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

// ==== Navigation ====
function nextQuestion() {
    clearInterval(timerInterval);
    stopConfetti();
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_SESSION) {
        loadQuestion();
    } else {
        showResult();
    }
}

function skipQuestion() {
    clearInterval(timerInterval);
    if (skippedQuestions < maxSkips) {
        skippedQuestions++;
        currentQuestionIndex++;
        if (currentQuestionIndex < QUESTIONS_PER_SESSION) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        feedbackElement.innerText = "You've reached the maximum skips!";
        feedbackElement.style.color = "#ffc107";
    }
}

// ==== Results ====
function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const unanswered = QUESTIONS_PER_SESSION - (questionsAnswered + skippedQuestions);
    const percentage = ((currentScore / QUESTIONS_PER_SESSION) * 100).toFixed(1);
    let iqLabel = percentage >= 90 ? "Genius 🧠" : percentage >= 75 ? "Smart 🎯" : percentage >= 50 ? "Average 🙂" : "Needs Practice 💡";

    finalScoreElement.innerHTML = `
        <h3>🏁 Final Score</h3>
        <p><b>Correct:</b> ${currentScore}</p>
        <p><b>Wrong:</b> ${questionsAnswered - currentScore}</p>
        <p><b>Skipped:</b> ${skippedQuestions}</p>
        <p><b>Unanswered:</b> ${unanswered}</p>
        <p><b>Accuracy:</b> ${percentage}%</p>
        <p><b>IQ Rank:</b> ${iqLabel}</p>
    `;

    renderChart(currentScore, questionsAnswered - currentScore, skippedQuestions + unanswered);
    updateLeaderboard(currentScore, percentage);
}

function renderChart(correct, wrong, skipped) {
    const ctx = resultChart.getContext('2d');
    if (window.myChartInstance) window.myChartInstance.destroy();
    window.myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Correct', 'Wrong', 'Skipped'],
            datasets: [{
                data: [correct, wrong, skipped],
                backgroundColor: ['#00e676', '#ff5252', '#ffd54f']
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
        }
    });
}

// ==== Leaderboard ====
function updateLeaderboard(score, percent) {
    const key = `leaderboard_${currentCategory}`;
    const leaderboard = JSON.parse(localStorage.getItem(key)) || [];
    leaderboard.push({ score, percent, time: new Date().toLocaleString() });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem(key, JSON.stringify(leaderboard.slice(0, 5)));

    leaderboardList.innerHTML = leaderboard.map((entry, i) =>
        `<li>#${i + 1} - ${entry.score} pts (${entry.percent}%)<br/><small>${entry.time}</small></li>`
    ).join('');
}

// ==== Review ====
function viewAnswers() {
    resultScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    populateReviewList();
}

function populateReviewList(onlyIncorrect = false) {
    reviewList.innerHTML = '';
    reviewData.forEach((item, index) => {
        if (onlyIncorrect && item.isCorrect) return;
        const qDiv = document.createElement('div');
        qDiv.className = 'review-item';
        qDiv.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${item.question}</p>
            <p style="color:${item.isCorrect ? '#00e676' : '#ff5252'}">Your Answer: ${item.selectedAnswer}</p>
            <p>Correct Answer: ${item.correctAnswer}</p><hr/>
        `;
        reviewList.appendChild(qDiv);
    });
}

let showOnlyIncorrect = false;
function toggleReviewFilter() {
    showOnlyIncorrect = !showOnlyIncorrect;
    reviewToggle.innerText = showOnlyIncorrect ? '🔍 Show All' : '❌ Show Incorrect';
    populateReviewList(showOnlyIncorrect);
}

// ==== Music & Theme ====
function toggleMusic() {
    if (bgMusic) {
        bgMusic.muted = !bgMusic.muted;
        musicToggle.innerText = bgMusic.muted ? "🔇" : "🎵";
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerText = document.body.classList.contains('dark-mode') ? "🌙" : "☀️";
}

// ==== Confetti Placeholders ====
function startConfetti() {}
function stopConfetti() {}