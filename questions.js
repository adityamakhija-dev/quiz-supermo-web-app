const quizData = {
  sports: [
    {
      question: "Who won the FIFA World Cup in 2022?",
      options: ["Brazil", "Argentina", "France", "Germany"],
      answer: "Argentina"
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Tennis", "Table Tennis", "Badminton", "Squash"],
      answer: "Badminton"
    },
    {
      question: "How many players are there in a football (soccer) team on the field?",
      options: ["10", "11", "12", "9"],
      answer: "11"
    },
    {
      question: "Which sport uses a bat, ball, and wickets?",
      options: ["Baseball", "Cricket", "Tennis", "Hockey"],
      answer: "Cricket"
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["UK", "Brazil", "Japan", "USA"],
      answer: "Brazil"
    },
    {
      question: "What color card means a player is sent off in football?",
      options: ["Yellow", "Blue", "Red", "Green"],
      answer: "Red"
    },
    {
      question: "In which sport is the term 'love' used for a score of zero?",
      options: ["Cricket", "Tennis", "Badminton", "Boxing"],
      answer: "Tennis"
    },
    {
      question: "How long is an Olympic swimming pool?",
      options: ["25 meters", "30 meters", "50 meters", "100 meters"],
      answer: "50 meters"
    },
    {
      question: "Which sport is associated with Wimbledon?",
      options: ["Golf", "Tennis", "Football", "Boxing"],
      answer: "Tennis"
    },
    {
      question: "Which country is famous for sumo wrestling?",
      options: ["China", "Korea", "Thailand", "Japan"],
      answer: "Japan"
    },
    {
      question: "What sport is known as the 'king of sports'?",
      options: ["Cricket", "Boxing", "Football", "Tennis"],
      answer: "Football"
    },
    {
      question: "What is the national sport of Canada?",
      options: ["Hockey", "Baseball", "Lacrosse", "Cricket"],
      answer: "Lacrosse"
    },
    {
      question: "Which athlete is known as 'Lightning Bolt'?",
      options: ["Michael Phelps", "Usain Bolt", "Mo Farah", "Carl Lewis"],
      answer: "Usain Bolt"
    },
    {
      question: "Which country has won the most Cricket World Cups?",
      options: ["India", "Australia", "England", "Pakistan"],
      answer: "Australia"
    },
    {
      question: "What is the distance of a marathon?",
      options: ["40 km", "42.195 km", "50 km", "35 km"],
      answer: "42.195 km"
    },
    {
      question: "Which sport uses the term 'hole-in-one'?",
      options: ["Golf", "Cricket", "Hockey", "Tennis"],
      answer: "Golf"
    },
    {
      question: "In which sport do you compete in a velodrome?",
      options: ["Swimming", "Cycling", "Skating", "Rowing"],
      answer: "Cycling"
    },
    {
      question: "Which female tennis player has won 23 Grand Slam titles?",
      options: ["Serena Williams", "Maria Sharapova", "Steffi Graf", "Venus Williams"],
      answer: "Serena Williams"
    },
    {
      question: "Which Indian javelin thrower won gold at the 2020 Olympics?",
      options: ["Neeraj Chopra", "Abhinav Bindra", "Bajrang Punia", "Ravi Dahiya"],
      answer: "Neeraj Chopra"
    },
    {
      question: "What is the maximum score in a single frame of snooker?",
      options: ["150", "147", "155", "160"],
      answer: "147"
    },
    {
      question: "Which country won the 2011 Cricket World Cup?",
      options: ["Sri Lanka", "India", "Australia", "Pakistan"],
      answer: "India"
    },
    {
      question: "Which basketball player is known as 'King James'?",
      options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Stephen Curry"],
      answer: "LeBron James"
    },
    {
      question: "Which sport features the terms 'try', 'scrum', and 'conversion'?",
      options: ["American Football", "Rugby", "Cricket", "Hockey"],
      answer: "Rugby"
    },
    {
      question: "Which country won the first ever FIFA World Cup?",
      options: ["Brazil", "Germany", "Uruguay", "Italy"],
      answer: "Uruguay"
    },
    {
      question: "Which chess grandmaster became world champion at age 22?",
      options: ["Magnus Carlsen", "Viswanathan Anand", "Bobby Fischer", "Garry Kasparov"],
      answer: "Garry Kasparov"
    },
    {
      question: "Which city is home to the famous 'Eden Gardens' cricket ground?",
      options: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
      answer: "Kolkata"
    },
    {
      question: "How many bases are there in baseball?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which martial art originated in Korea?",
      options: ["Judo", "Karate", "Taekwondo", "Kung Fu"],
      answer: "Taekwondo"
    },
    {
      question: "In what year were the first modern Olympic Games held?",
      options: ["1892", "1896", "1900", "1904"],
      answer: "1896"
    },
    {
      question: "Which country is considered the birthplace of golf?",
      options: ["England", "USA", "Scotland", "Ireland"],
      answer: "Scotland"
    },
    {
      question: "What is the primary objective in basketball?",
      options: ["Score goals", "Hit home runs", "Shoot hoops", "Serve aces"],
      answer: "Shoot hoops"
    },
    {
      question: "Which NFL team has won the most Super Bowls?",
      options: ["New England Patriots", "Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
      answer: "New England Patriots"
    },
    {
      question: "Which swimming stroke is done on the back?",
      options: ["Freestyle", "Breaststroke", "Butterfly", "Backstroke"],
      answer: "Backstroke"
    },
    {
      question: "What is the highest possible break in snooker without an opponent's foul?",
      options: ["147", "155", "160", "143"],
      answer: "147"
    },
    {
      question: "Which city hosts the annual Boston Marathon?",
      options: ["New York", "Chicago", "Boston", "Los Angeles"],
      answer: "Boston"
    },
    {
      question: "Which country is dominant in table tennis?",
      options: ["Japan", "South Korea", "China", "Germany"],
      answer: "China"
    },
    {
      question: "What is the maximum number of clubs allowed in a golf bag during a round?",
      options: ["10", "12", "14", "16"],
      answer: "14"
    },
    {
      question: "Which legendary boxer was known as 'The Greatest'?",
      options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "George Foreman"],
      answer: "Muhammad Ali"
    },
    {
      question: "In baseball, what is it called when a batter hits the ball out of the park?",
      options: ["Strikeout", "Walk", "Home Run", "Foul Ball"],
      answer: "Home Run"
    },
    {
      question: "Which discipline involves performing routines on apparatus like rings and parallel bars?",
      options: ["Swimming", "Athletics", "Gymnastics", "Diving"],
      answer: "Gymnastics"
    },
    {
      question: "What is the total number of points scored for a touchdown in American Football?",
      options: ["5", "6", "7", "8"],
      answer: "6"
    },
    {
      question: "Which animal is featured on the emblem of the Australian Cricket Team?",
      options: ["Kangaroo", "Koala", "Emu", "Wombat"],
      answer: "Kangaroo"
    },
    {
      question: "What is the only Grand Slam tennis tournament played on a clay court?",
      options: ["Wimbledon", "US Open", "Australian Open", "French Open"],
      answer: "French Open"
    },
    {
      question: "Which term is used to describe a perfect game in bowling?",
      options: ["Strike", "Spare", "300", "Turkey"],
      answer: "300"
    },
    {
      question: "Which sport is played at the 'Lord's' ground?",
      options: ["Football", "Rugby", "Cricket", "Hockey"],
      answer: "Cricket"
    },
    {
      question: "How many players are on a standard ice hockey team on the ice at one time?",
      options: ["4", "5", "6", "7"],
      answer: "6"
    },
    {
      question: "Which country has won the most Olympic gold medals in total?",
      options: ["China", "Russia", "USA", "Germany"],
      answer: "USA"
    },
    {
      question: "In what sport would you find a 'glove save'?",
      options: ["Baseball", "Cricket", "Ice Hockey", "Handball"],
      answer: "Ice Hockey"
    },
    {
      question: "Which type of race involves swimming, cycling, and running?",
      options: ["Marathon", "Triathlon", "Decathlon", "Ironman"],
      answer: "Triathlon"
    },
    {
      question: "What is the name of the trophy awarded to the winner of the English Premier League?",
      options: ["FA Cup", "League Cup", "Premier League Trophy", "Champions League Trophy"],
      answer: "Premier League Trophy"
    },
    {
      question: "Which legendary figure is considered the 'Father of Modern Olympics'?",
      options: ["Baron Pierre de Coubertin", "Spyros Louis", "King George I", "Demetrius Vikelas"],
      answer: "Baron Pierre de Coubertin"
    },
    {
      question: "Which sport uses a 'foil', 'epee', and 'sabre'?",
      options: ["Archery", "Fencing", "Judo", "Karate"],
      answer: "Fencing"
    },
    {
      question: "What is the official size of a basketball court (NBA)?",
      options: ["90 by 50 feet", "94 by 50 feet", "100 by 60 feet", "84 by 45 feet"],
      answer: "94 by 50 feet"
    },
    {
      question: "Which country won the most medals at the 2020 Tokyo Olympics?",
      options: ["China", "Japan", "USA", "Great Britain"],
      answer: "USA"
    },
    {
      question: "In which sport would you hear the term 'birdie' and 'eagle'?",
      options: ["Tennis", "Badminton", "Golf", "Squash"],
      answer: "Golf"
    },
    {
      question: "Which sport involves throwing a 'javelin'?",
      options: ["Shotput", "Discus Throw", "Javelin Throw", "Hammer Throw"],
      answer: "Javelin Throw"
    },
    {
      question: "What is the governing body of international football?",
      options: ["UEFA", "FIFA", "CAF", "CONMEBOL"],
      answer: "FIFA"
    },
    {
      question: "How many rings are on the Olympic flag?",
      options: ["4", "5", "6", "7"],
      answer: "5"
    },
    {
      question: "Which famous race takes place annually in Monaco?",
      options: ["Le Mans", "Indianapolis 500", "Monaco Grand Prix", "Daytona 500"],
      answer: "Monaco Grand Prix"
    },
    {
      question: "What is the traditional Japanese martial art that uses throws and grappling?",
      options: ["Karate", "Judo", "Aikido", "Kendo"],
      answer: "Judo"
    },
    {
      question: "Which female athlete holds the record for most Olympic gold medals in gymnastics?",
      options: ["Larisa Latynina", "Simone Biles", "Nadia Comăneci", "Věra Čáslavská"],
      answer: "Larisa Latynina"
    },
    {
      question: "Which city will host the 2028 Summer Olympics?",
      options: ["Paris", "Los Angeles", "Brisbane", "Rome"],
      answer: "Los Angeles"
    },
    {
      question: "In which sport do competitors use 'blades'?",
      options: ["Ice Skating", "Roller Skating", "Speed Skating", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the maximum number of players on a basketball team roster?",
      options: ["10", "12", "15", "13"],
      answer: "15"
    },
    {
      question: "Which country has won the most FIBA Basketball World Cups?",
      options: ["USA", "Soviet Union", "Yugoslavia", "Spain"],
      answer: "USA"
    },
    {
      question: "Which Indian sportsperson is known as 'The Flying Sikh'?",
      options: ["Milkha Singh", "Dhyan Chand", "P.T. Usha", "Kapil Dev"],
      answer: "Milkha Singh"
    },
    {
      question: "Which sport requires a 'putter'?",
      options: ["Tennis", "Cricket", "Golf", "Baseball"],
      answer: "Golf"
    },
    {
      question: "What is the name of the oldest active professional baseball park in the USA?",
      options: ["Yankee Stadium", "Fenway Park", "Wrigley Field", "Dodger Stadium"],
      answer: "Fenway Park"
    },
    {
      question: "Which winter sport involves a 'bobsled'?",
      options: ["Skiing", "Snowboarding", "Luge", "Bobsleigh"],
      answer: "Bobsleigh"
    },
    {
      question: "In which sport would you perform a 'slam dunk'?",
      options: ["Volleyball", "Handball", "Basketball", "Netball"],
      answer: "Basketball"
    },
    {
      question: "Which football club is known as 'The Red Devils'?",
      options: ["Liverpool FC", "Manchester United", "Arsenal FC", "Chelsea FC"],
      answer: "Manchester United"
    },
    {
      question: "What is the full form of ATP in tennis?",
      options: ["Association of Tennis Players", "Association of Tennis Professionals", "All Tennis Players", "Amateur Tennis Professionals"],
      answer: "Association of Tennis Professionals"
    },
    {
      question: "Which country has won the most gold medals in Olympic boxing?",
      options: ["USA", "Cuba", "Russia", "Great Britain"],
      answer: "USA"
    },
    {
      question: "What is the name of the race where horses jump over obstacles?",
      options: ["Flat Race", "Steeplechase", "Trotting Race", "Harness Race"],
      answer: "Steeplechase"
    },
    {
      question: "Which sport uses a 'rink'?",
      options: ["Ice Hockey", "Roller Derby", "Curling", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the world's most popular individual sport?",
      options: ["Tennis", "Golf", "Badminton", "Swimming"],
      answer: "Tennis"
    },
    {
      question: "Which country has won the most Rugby World Cups?",
      options: ["New Zealand", "South Africa", "Australia", "England"],
      answer: "South Africa"
    },
    {
      question: "What is the term for scoring three goals in a football match by one player?",
      options: ["Brace", "Hat-trick", "Quattrick", "Double"],
      answer: "Hat-trick"
    },
    {
      question: "Which legendary basketball coach is known for 'The Zen Master'?",
      options: ["Gregg Popovich", "Pat Riley", "Phil Jackson", "Red Auerbach"],
      answer: "Phil Jackson"
    },
    {
      question: "Which sport is featured in the 'Ironman' competition?",
      options: ["Marathon", "Triathlon", "Cycling", "Swimming"],
      answer: "Triathlon"
    },
    {
      question: "What is the maximum number of times a player can touch the ball in volleyball before it crosses the net?",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      question: "Which Formula 1 driver has won the most World Championships?",
      options: ["Lewis Hamilton", "Michael Schumacher", "Juan Manuel Fangio", "Max Verstappen"],
      answer: "Lewis Hamilton"
    },
    {
      question: "Which city is home to the 'Augusta National Golf Club'?",
      options: ["Pebble Beach", "St Andrews", "Augusta", "Pinehurst"],
      answer: "Augusta"
    },
    {
      question: "What is the objective of curling?",
      options: ["Knock down pins", "Score goals", "Slide stones into a target area", "Hit a shuttlecock"],
      answer: "Slide stones into a target area"
    },
    {
      question: "Which country developed the sport of Basketball?",
      options: ["Canada", "USA", "England", "France"],
      answer: "USA"
    },
    {
      question: "What is the highest governing body of motorsports worldwide?",
      options: ["NASCAR", "FIA", "MotoGP", "Formula 1"],
      answer: "FIA"
    },
    {
      question: "Which sport is played using a 'stick' and a 'puck'?",
      options: ["Field Hockey", "Lacrosse", "Ice Hockey", "Hurling"],
      answer: "Ice Hockey"
    },
    {
      question: "What is the term for a draw in chess?",
      options: ["Checkmate", "Stalemate", "Resign", "Blunder"],
      answer: "Stalemate"
    },
    {
      question: "Which major golf tournament is played at Augusta National?",
      options: ["The Open Championship", "US Open", "PGA Championship", "The Masters"],
      answer: "The Masters"
    },
    {
      question: "Which Indian sportswoman is known for her achievements in Badminton?",
      options: ["Saina Nehwal", "P.V. Sindhu", "Jwala Gutta", "Ashwini Ponnappa"],
      answer: "P.V. Sindhu"
    },
    {
      question: "What is the minimum number of players required for a game of basketball to start?",
      options: ["3", "4", "5", "6"],
      answer: "5"
    },
    {
      question: "Which country has won the most Olympic gold medals in swimming?",
      options: ["Australia", "USA", "China", "Germany"],
      answer: "USA"
    },
    {
      question: "Which type of race is run on an oval track?",
      options: ["Cross Country", "Marathon", "Sprint", "Relay"],
      answer: "Sprint"
    },
    {
      question: "What is the name of the organization that governs professional basketball in North America?",
      options: ["FIBA", "NBA", "NCAA", "WNBA"],
      answer: "NBA"
    },
    {
      question: "Which sport uses a 'wicketkeeper'?",
      options: ["Baseball", "Softball", "Cricket", "Rounders"],
      answer: "Cricket"
    },
    {
      question: "What is the circumference of a standard football (soccer) ball?",
      options: ["60-65 cm", "68-70 cm", "72-75 cm", "75-80 cm"],
      answer: "68-70 cm"
    },
    {
      question: "Which country has won the most Olympic medals in hockey (field hockey)?",
      options: ["India", "Germany", "Netherlands", "Pakistan"],
      answer: "India"
    },
    {
      question: "What is the term for striking the golf ball into the hole in one shot?",
      options: ["Birdie", "Eagle", "Albatross", "Hole-in-one"],
      answer: "Hole-in-one"
    },
    {
      question: "Which martial art is known for its graceful, flowing movements and focus on internal energy?",
      options: ["Karate", "Taekwondo", "Kung Fu", "Tai Chi"],
      answer: "Tai Chi"
    },
    {
      question: "How many major tennis tournaments (Grand Slams) are there in a year?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which city is known for hosting the 'Super Bowl' most frequently?",
      options: ["Miami", "New Orleans", "Los Angeles", "Tampa"],
      answer: "Miami"
    },
    {
      question: "What is the smallest number of players on a volleyball team on the court?",
      options: ["4", "5", "6", "7"],
      answer: "6"
    },
    {
      question: "Which sport originated in Scotland and involves throwing heavy objects?",
      options: ["Shotput", "Hammer Throw", "Caber Toss", "Discus Throw"],
      answer: "Caber Toss"
    },
    {
      question: "Which country has won the most FIFA Women's World Cups?",
      options: ["Germany", "Norway", "USA", "Japan"],
      answer: "USA"
    },
    {
      question: "What is the name of the professional wrestling entertainment company founded by Vince McMahon?",
      options: ["WCW", "TNA", "AEW", "WWE"],
      answer: "WWE"
    },
    {
      question: "Which sport uses a 'bow' and 'arrow'?",
      options: ["Javelin Throw", "Fencing", "Archery", "Darts"],
      answer: "Archery"
    },
    {
      question: "Which type of cycling race takes place over multiple stages?",
      options: ["Track Cycling", "BMX", "Road Cycling", "Mountain Biking"],
      answer: "Road Cycling"
    },
    {
      question: "What is the term for when a boxer wins by knocking out their opponent?",
      options: ["Decision", "Technical Knockout (TKO)", "Knockout (KO)", "Submission"],
      answer: "Knockout (KO)"
    },
    {
      question: "Which country won the inaugural Cricket World Cup in 1975?",
      options: ["Australia", "England", "West Indies", "India"],
      answer: "West Indies"
    },
    {
      question: "In what sport do you use a 'mallet'?",
      options: ["Croquet", "Polo", "Golf", "Field Hockey"],
      answer: "Polo"
    }
  ],

  politics: [
    {
      question: "Who is the current Prime Minister of India (2025)?",
      options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"],
      answer: "Narendra Modi"
    },
    {
      question: "What is the minimum age to be eligible for election as President of India?",
      options: ["25 years", "30 years", "35 years", "40 years"],
      answer: "35 years"
    },
    {
      question: "Which article of the Indian Constitution deals with the Right to Equality?",
      options: ["Article 14", "Article 19", "Article 21", "Article 32"],
      answer: "Article 14"
    },
    {
      question: "How many members are there in the Rajya Sabha (Upper House of Indian Parliament)?",
      options: ["200", "250", "300", "245"],
      answer: "245"
    },
    {
      question: "Who is the Commander-in-Chief of the Indian Armed Forces?",
      options: ["Prime Minister", "Defence Minister", "President", "Chief of Defence Staff"],
      answer: "President"
    },
    {
      question: "Which political party is currently in power at the Centre in India (2025)?",
      options: ["Indian National Congress", "Bharatiya Janata Party", "Aam Aadmi Party", "Trinamool Congress"],
      answer: "Bharatiya Janata Party"
    },
    {
      question: "What is the tenure of a member of the Lok Sabha?",
      options: ["4 years", "5 years", "6 years", "Indefinite"],
      answer: "5 years"
    },
    {
      question: "The concept of 'Fundamental Duties' in the Indian Constitution was borrowed from which country?",
      options: ["USA", "Russia (USSR)", "UK", "Ireland"],
      answer: "Russia (USSR)"
    },
    {
      question: "Who appoints the Chief Justice of India?",
      options: ["Prime Minister", "President", "Vice President", "Parliament"],
      answer: "President"
    },
    {
      question: "Which state in India has the largest number of Lok Sabha constituencies?",
      options: ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
      answer: "Uttar Pradesh"
    },
    {
      question: "What is the maximum strength of the Lok Sabha?",
      options: ["540", "545", "550", "552"],
      answer: "550"
    },
    {
      question: "Which amendment to the Indian Constitution is known as the 'Mini Constitution'?",
      options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
      answer: "42nd Amendment"
    },
    {
      question: "Who chairs the NITI Aayog?",
      options: ["President", "Vice President", "Prime Minister", "Finance Minister"],
      answer: "Prime Minister"
    },
    {
      question: "The power to issue writs for the enforcement of Fundamental Rights rests with:",
      options: ["Supreme Court only", "High Courts only", "Both Supreme Court and High Courts", "Parliament"],
      answer: "Both Supreme Court and High Courts"
    },
    {
      question: "What is the minimum age to be eligible to vote in India?",
      options: ["16 years", "18 years", "21 years", "25 years"],
      answer: "18 years"
    },
    {
      question: "Which part of the Indian Constitution deals with Directive Principles of State Policy?",
      options: ["Part II", "Part III", "Part IV", "Part V"],
      answer: "Part IV"
    },
    {
      question: "Who was the first President of India?",
      options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Dr. Rajendra Prasad", "Sarvepalli Radhakrishnan"],
      answer: "Dr. Rajendra Prasad"
    },
    {
      question: "The concept of 'Judicial Review' in the Indian Constitution is inspired by which country?",
      options: ["USA", "UK", "Canada", "Australia"],
      answer: "USA"
    },
    {
      question: "How many schedules are there in the Indian Constitution?",
      options: ["8", "10", "12", "14"],
      answer: "12"
    },
    {
      question: "Who is the ex-officio Chairman of the Rajya Sabha?",
      options: ["President", "Speaker of Lok Sabha", "Vice President", "Prime Minister"],
      answer: "Vice President"
    },
    {
      question: "The idea of 'concurrent list' in the Indian Constitution is taken from which country?",
      options: ["Canada", "Australia", "USA", "Germany"],
      answer: "Australia"
    },
    {
      question: "What is the maximum period for which a Proclamation of Emergency can be in force?",
      options: ["6 months", "1 year", "2 years", "Indefinite"],
      answer: "Indefinite (with parliamentary approval every 6 months)"
    },
    {
      question: "Which article deals with the 'Right to Constitutional Remedies'?",
      options: ["Article 21", "Article 29", "Article 32", "Article 38"],
      answer: "Article 32"
    },
    {
      question: "Who advises the President of India on matters of policy?",
      options: ["Chief Justice of India", "Attorney General", "Council of Ministers", "Speaker of Lok Sabha"],
      answer: "Council of Ministers"
    },
    {
      question: "The 'Preamble' to the Indian Constitution is based on which document?",
      options: ["Government of India Act, 1935", "Objective Resolution", "Indian Independence Act, 1947", "Nehru Report"],
      answer: "Objective Resolution"
    },
    {
      question: "How many types of emergencies are provided in the Indian Constitution?",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
      answer: "B.R. Ambedkar"
    },
    {
      question: "Which of the following is not a fundamental right in India?",
      options: ["Right to Education", "Right to Property", "Right to Freedom", "Right against Exploitation"],
      answer: "Right to Property"
    },
    {
      question: "The Indian Parliament consists of:",
      options: ["Lok Sabha only", "Rajya Sabha only", "Lok Sabha, Rajya Sabha, and President", "Lok Sabha and Rajya Sabha"],
      answer: "Lok Sabha, Rajya Sabha, and President"
    },
    {
      question: "What is the term for a situation when no single party gets a clear majority in the Lok Sabha elections?",
      options: ["Coalition Government", "Hung Parliament", "Minority Government", "Caretaker Government"],
      answer: "Hung Parliament"
    },
    {
      question: "Who resolves disputes regarding the election of the President and Vice-President of India?",
      options: ["Election Commission", "Supreme Court", "Parliament", "High Court"],
      answer: "Supreme Court"
    },
    {
      question: "The power to amend the Constitution of India is vested with:",
      options: ["President", "Parliament", "Supreme Court", "State Legislatures"],
      answer: "Parliament"
    },
    {
      question: "Which of the following is a quasi-judicial body in India?",
      options: ["Election Commission", "Supreme Court", "National Green Tribunal", "Comptroller and Auditor General"],
      answer: "National Green Tribunal"
    },
    {
      question: "The concept of 'single citizenship' in India is borrowed from which country?",
      options: ["USA", "UK", "Canada", "France"],
      answer: "UK"
    },
    {
      question: "Who is the legal advisor to the Government of India?",
      options: ["Chief Justice of India", "Solicitor General", "Attorney General of India", "Law Minister"],
      answer: "Attorney General of India"
    },
    {
      question: "The 'Right to Information' (RTI) Act in India was enacted in which year?",
      options: ["2002", "2005", "2007", "2010"],
      answer: "2005"
    },
    {
      question: "Which schedule of the Indian Constitution lists the official languages of India?",
      options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
      answer: "8th Schedule"
    },
    {
      question: "The concept of 'Welfare State' in the Indian Constitution is enshrined in:",
      options: ["Fundamental Rights", "Directive Principles of State Policy", "Preamble", "Fundamental Duties"],
      answer: "Directive Principles of State Policy"
    },
    {
      question: "Who promulgates ordinances when the Parliament is not in session?",
      options: ["Prime Minister", "Chief Justice of India", "President", "Speaker of Lok Sabha"],
      answer: "President"
    },
    {
      question: "What is the minimum age for a person to be a member of the Rajya Sabha?",
      options: ["25 years", "30 years", "35 years", "40 years"],
      answer: "30 years"
    },
    {
      question: "Which part of the Indian Constitution deals with 'Elections'?",
      options: ["Part XII", "Part XIII", "Part XIV", "Part XV"],
      answer: "Part XV"
    },
    {
      question: "The 'Emergency Provisions' in the Indian Constitution were adopted from which country's constitution?",
      options: ["Weimar Constitution of Germany", "Irish Constitution", "Canadian Constitution", "US Constitution"],
      answer: "Weimar Constitution of Germany"
    },
    {
      question: "Who conducts the elections to the Panchayats and Municipalities?",
      options: ["Election Commission of India", "State Election Commission", "Central Government", "State Government"],
      answer: "State Election Commission"
    },
    {
      question: "The 'Right to Education' was added to the Indian Constitution as a Fundamental Right by which amendment?",
      options: ["86th Amendment", "91st Amendment", "97th Amendment", "101st Amendment"],
      answer: "86th Amendment"
    },
    {
      question: "What is the tenure of the Comptroller and Auditor General of India?",
      options: ["5 years", "6 years", "Till age 65", "6 years or till age 65, whichever is earlier"],
      answer: "6 years or till age 65, whichever is earlier"
    },
    {
      question: "Which committee recommended the establishment of the Panchayati Raj system in India?",
      options: ["Ashok Mehta Committee", "Balwant Rai Mehta Committee", "L.M. Singhvi Committee", "G.V.K. Rao Committee"],
      answer: "Balwant Rai Mehta Committee"
    },
    {
      question: "The concept of 'Rule of Law' in the Indian Constitution is taken from which country?",
      options: ["USA", "UK", "France", "Germany"],
      answer: "UK"
    },
    {
      question: "Who among the following is not a part of the electoral college for the election of the President of India?",
      options: ["Elected members of Lok Sabha", "Elected members of Rajya Sabha", "Nominated members of Parliament", "Elected members of State Legislative Assemblies"],
      answer: "Nominated members of Parliament"
    },
    {
      question: "The maximum gap between two sessions of Parliament in India cannot be more than:",
      options: ["3 months", "4 months", "6 months", "1 year"],
      answer: "6 months"
    },
    {
      question: "Which article of the Indian Constitution abolishes untouchability?",
      options: ["Article 15", "Article 16", "Article 17", "Article 18"],
      answer: "Article 17"
    },
    {
      question: "The 'Union List', 'State List', and 'Concurrent List' are mentioned in which schedule of the Indian Constitution?",
      options: ["6th Schedule", "7th Schedule", "8th Schedule", "9th Schedule"],
      answer: "7th Schedule"
    },
    {
      question: "Who acts as the President of India when neither the President nor the Vice-President is available?",
      options: ["Speaker of Lok Sabha", "Chief Justice of India", "Prime Minister", "Senior-most Governor"],
      answer: "Chief Justice of India"
    },
    {
      question: "The 'Fundamental Rights' are enshrined in which part of the Indian Constitution?",
      options: ["Part I", "Part II", "Part III", "Part IV"],
      answer: "Part III"
    },
    {
      question: "Which of the following is not a constitutional body in India?",
      options: ["Election Commission", "Union Public Service Commission", "NITI Aayog", "Finance Commission"],
      answer: "NITI Aayog"
    },
    {
      question: "The procedure for the impeachment of the President of India is mentioned in which article?",
      options: ["Article 58", "Article 61", "Article 72", "Article 74"],
      answer: "Article 61"
    },
    {
      question: "Which amendment lowered the voting age from 21 to 18 years?",
      options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
      answer: "61st Amendment"
    },
    {
      question: "The term of office of a judge of the Supreme Court is:",
      options: ["5 years", "6 years", "Till age 62", "Till age 65"],
      answer: "Till age 65"
    },
    {
      question: "The concept of 'Residuary Powers' in the Indian Constitution is taken from which country?",
      options: ["USA", "Australia", "Canada", "Ireland"],
      answer: "Canada"
    },
    {
      question: "Who is the present Chief Election Commissioner of India (2025)?",
      options: ["Sunil Arora", "Rajiv Kumar", "Sushil Chandra", "Om Prakash Rawat"],
      answer: "Rajiv Kumar" // Assuming Rajiv Kumar continues to be the CEC in 2025 based on current tenure.
    },
    {
      question: "Which article of the Indian Constitution provides for a uniform civil code?",
      options: ["Article 40", "Article 44", "Article 48", "Article 50"],
      answer: "Article 44"
    },
    {
      question: "The idea of 'Parliamentary form of Government' in India is derived from which country?",
      options: ["USA", "UK", "Canada", "Ireland"],
      answer: "UK"
    },
    {
      question: "Who presides over the joint sitting of both Houses of Parliament?",
      options: ["President", "Vice President", "Speaker of Lok Sabha", "Prime Minister"],
      answer: "Speaker of Lok Sabha"
    },
    {
      question: "Which part of the Indian Constitution deals with the 'Union Territories'?",
      options: ["Part VI", "Part VII", "Part VIII", "Part IX"],
      answer: "Part VIII"
    },
    {
      question: "The 'Finance Commission' is constituted by the President of India every:",
      options: ["2 years", "3 years", "5 years", "6 years"],
      answer: "5 years"
    },
    {
      question: "Which act introduced the system of 'Diarchy' in the provinces of British India?",
      options: ["Indian Councils Act 1909", "Government of India Act 1919", "Government of India Act 1935", "Indian Independence Act 1947"],
      answer: "Government of India Act 1919"
    },
    {
      question: "Who was the first woman Speaker of the Lok Sabha?",
      options: ["Sushma Swaraj", "Meira Kumar", "Sumitra Mahajan", "Sheila Dikshit"],
      answer: "Meira Kumar"
    },
    {
      question: "The 'Right to Privacy' is a part of which fundamental right?",
      options: ["Right to Equality", "Right to Freedom", "Right to Life and Personal Liberty", "Right to Constitutional Remedies"],
      answer: "Right to Life and Personal Liberty"
    },
    {
      question: "Which schedule of the Indian Constitution deals with the allocation of seats in the Rajya Sabha?",
      options: ["3rd Schedule", "4th Schedule", "5th Schedule", "6th Schedule"],
      answer: "4th Schedule"
    },
    {
      question: "The 'Separation of Powers' is a key feature of which type of government?",
      options: ["Unitary", "Federal", "Parliamentary", "Presidential"],
      answer: "Presidential"
    },
    {
      question: "Who is the head of the state in India?",
      options: ["Prime Minister", "President", "Chief Justice of India", "Speaker of Lok Sabha"],
      answer: "President"
    },
    {
      question: "The 'Anti-defection law' is provided in which schedule of the Indian Constitution?",
      options: ["9th Schedule", "10th Schedule", "11th Schedule", "12th Schedule"],
      answer: "10th Schedule"
    },
    {
      question: "The concept of 'procedure established by law' is taken from which country's constitution?",
      options: ["USA", "Japan", "UK", "Canada"],
      answer: "Japan"
    },
    {
      question: "Who was the first Vice President of India?",
      options: ["Zakir Husain", "V.V. Giri", "Sarvepalli Radhakrishnan", "B.D. Jatti"],
      answer: "Sarvepalli Radhakrishnan"
    },
    {
      question: "Which article of the Indian Constitution deals with the formation of new states?",
      options: ["Article 1", "Article 2", "Article 3", "Article 4"],
      answer: "Article 3"
    },
    {
      question: "The 'Doctrine of Basic Structure' was propounded by the Supreme Court in which case?",
      options: ["Golaknath case", "Kesavananda Bharati case", "Minerva Mills case", "S.R. Bommai case"],
      answer: "Kesavananda Bharati case"
    },
    {
      question: "Who is the chief spokesperson of the Union government?",
      options: ["President", "Prime Minister", "Home Minister", "Finance Minister"],
      answer: "Prime Minister"
    },
    {
      question: "The 'Public Accounts Committee' submits its report to the:",
      options: ["President", "Prime Minister", "Speaker of Lok Sabha", "Comptroller and Auditor General"],
      answer: "Speaker of Lok Sabha"
    },
    {
      question: "The idea of 'Republic' in the Indian Constitution is taken from which country?",
      options: ["USA", "France", "UK", "Ireland"],
      answer: "France"
    },
    {
      question: "Which article deals with the 'Right to Education' for children aged 6-14 years?",
      options: ["Article 20A", "Article 21A", "Article 22A", "Article 23A"],
      answer: "Article 21A"
    },
    {
      question: "Who is the custodian of the Indian Constitution?",
      options: ["President", "Parliament", "Supreme Court", "Prime Minister"],
      answer: "Supreme Court"
    },
    {
      question: "The 'Local Self-Government' in India is primarily a subject of the:",
      options: ["Union List", "State List", "Concurrent List", "Residuary Powers"],
      answer: "State List"
    },
    {
      question: "Which of the following is a non-permanent body?",
      options: ["Election Commission", "Finance Commission", "NITI Aayog", "Union Public Service Commission"],
      answer: "NITI Aayog"
    },
    {
      question: "The concept of 'Equality, Liberty, and Fraternity' in the Preamble of the Indian Constitution is inspired by the revolution of which country?",
      options: ["American Revolution", "French Revolution", "Russian Revolution", "Glorious Revolution"],
      answer: "French Revolution"
    },
    {
      question: "Who appoints the Governor of a state in India?",
      options: ["Chief Minister", "President", "Prime Minister", "Chief Justice of India"],
      answer: "President"
    },
    {
      question: "The '73rd and 74th Amendments' to the Indian Constitution are related to:",
      options: ["Fundamental Rights", "Directive Principles", "Panchayati Raj and Municipalities", "Fundamental Duties"],
      answer: "Panchayati Raj and Municipalities"
    },
    {
      question: "Which article deals with 'Financial Emergency'?",
      options: ["Article 352", "Article 356", "Article 360", "Article 368"],
      answer: "Article 360"
    },
    {
      question: "The President of India can declare a 'National Emergency' under which article?",
      options: ["Article 352", "Article 356", "Article 360", "Article 368"],
      answer: "Article 352"
    },
    {
      question: "Who was the first Law Minister of independent India?",
      options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "B.R. Ambedkar", "Maulana Abul Kalam Azad"],
      answer: "B.R. Ambedkar"
    },
    {
      question: "The 'Right to Vote' in India is a:",
      options: ["Fundamental Right", "Constitutional Right", "Legal Right", "Moral Right"],
      answer: "Constitutional Right"
    },
    {
      question: "Which of the following is not a part of the 'Basic Structure' of the Indian Constitution?",
      options: ["Secularism", "Federalism", "Parliamentary System", "Right to Property"],
      answer: "Right to Property"
    },
    {
      question: "The 'Supreme Court of India' was inaugurated on:",
      options: ["26 January 1950", "28 January 1950", "15 August 1947", "2 October 1949"],
      answer: "28 January 1950"
    },
    {
      question: "Who among the following has the power to dissolve the Lok Sabha?",
      options: ["President", "Prime Minister", "Speaker of Lok Sabha", "Chief Justice of India"],
      answer: "President"
    },
    {
      question: "The 'Council of Ministers' is collectively responsible to the:",
      options: ["President", "Parliament", "Lok Sabha", "Rajya Sabha"],
      answer: "Lok Sabha"
    },
    {
      question: "The term of a Governor of a state is normally:",
      options: ["4 years", "5 years", "6 years", "At the pleasure of the President"],
      answer: "At the pleasure of the President"
    },
    {
      question: "Which committee recommended the 'Fundamental Duties' be included in the Indian Constitution?",
      options: ["Sarkaria Commission", "Swaran Singh Committee", "Punchhi Commission", "Rajamannar Committee"],
      answer: "Swaran Singh Committee"
    },
    {
      question: "The 'Official Language' of the Union of India is specified in which article?",
      options: ["Article 340", "Article 343", "Article 348", "Article 351"],
      answer: "Article 343"
    },
    {
      question: "Who certifies a 'Money Bill' in India?",
      options: ["President", "Finance Minister", "Speaker of Lok Sabha", "Prime Minister"],
      answer: "Speaker of Lok Sabha"
    },
    {
      question: "The 'Judicial Activism' in India is related to:",
      options: ["President's powers", "Parliament's powers", "Supreme Court's powers", "Prime Minister's powers"],
      answer: "Supreme Court's powers"
    },
    {
      question: "The 'National Human Rights Commission' is a:",
      options: ["Constitutional body", "Statutory body", "Executive body", "Advisory body"],
      answer: "Statutory body"
    },
    {
      question: "The concept of 'adult suffrage' means that a person has the right to vote if they are:",
      options: ["Literate", "Taxpayer", "Above a certain age regardless of status", "Landowner"],
      answer: "Above a certain age regardless of status"
    },
    {
      question: "Who was the first woman Chief Minister of an Indian state?",
      options: ["J. Jayalalithaa", "Mamata Banerjee", "Sucheta Kriplani", "Mayawati"],
      answer: "Sucheta Kriplani"
    },
    {
      question: "The 'Election Commission of India' is a:",
      options: ["One-member body", "Two-member body", "Three-member body", "Five-member body"],
      answer: "Three-member body"
    }
  ],

  history: [
    {
      question: "Who discovered America?",
      options: ["Vasco da Gama", "Christopher Columbus", "Magellan", "Marco Polo"],
      answer: "Christopher Columbus"
    },
    {
      question: "When did India gain independence?",
      options: ["1942", "1947", "1950", "1962"],
      answer: "1947"
    },
    {
      question: "Who built the Taj Mahal?",
      options: ["Akbar", "Humayun", "Shah Jahan", "Aurangzeb"],
      answer: "Shah Jahan"
    },
    {
      question: "Who was the first Mughal emperor of India?",
      options: ["Akbar", "Humayun", "Babur", "Jahangir"],
      answer: "Babur"
    },
    {
      question: "The Battle of Plassey was fought in which year?",
      options: ["1757", "1764", "1773", "1784"],
      answer: "1757"
    },
    {
      question: "Who was known as the 'Iron Man of India'?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
      answer: "Sardar Vallabhbhai Patel"
    },
    {
      question: "The Harappan civilization is also known as the:",
      options: ["Vedic Civilization", "Indus Valley Civilization", "Mauryan Civilization", "Gupta Civilization"],
      answer: "Indus Valley Civilization"
    },
    {
      question: "Who wrote 'Arthashastra'?",
      options: ["Kalidasa", "Chanakya (Kautilya)", "Bana Bhatta", "Patanjali"],
      answer: "Chanakya (Kautilya)"
    },
    {
      question: "The 'Quit India Movement' was launched in which year?",
      options: ["1930", "1935", "1942", "1945"],
      answer: "1942"
    },
    {
      question: "Who founded the Maurya Empire?",
      options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Samudragupta"],
      answer: "Chandragupta Maurya"
    },
    {
      question: "The Jallianwala Bagh Massacre took place in which year?",
      options: ["1917", "1918", "1919", "1920"],
      answer: "1919"
    },
    {
      question: "Who was the founder of the Indian National Congress?",
      options: ["Mahatma Gandhi", "A.O. Hume", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale"],
      answer: "A.O. Hume"
    },
    {
      question: "The system of 'permanent settlement' in India was introduced by:",
      options: ["Lord Dalhousie", "Lord William Bentinck", "Lord Cornwallis", "Lord Curzon"],
      answer: "Lord Cornwallis"
    },
    {
      question: "Which ancient university was a prominent center of learning in India?",
      options: ["Takshashila", "Nalanda", "Vikramshila", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Who was the last Mughal emperor?",
      options: ["Aurangzeb", "Bahadur Shah Zafar", "Shah Alam II", "Akbar II"],
      answer: "Bahadur Shah Zafar"
    },
    {
      question: "The Dandi March (Salt March) was led by:",
      options: ["Sardar Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose"],
      answer: "Mahatma Gandhi"
    },
    {
      question: "Which European power first established trade relations with India?",
      options: ["British", "Dutch", "Portuguese", "French"],
      answer: "Portuguese"
    },
    {
      question: "The 'Sanchi Stupa' was built by which emperor?",
      options: ["Chandragupta Maurya", "Ashoka", "Harshavardhana", "Kanishka"],
      answer: "Ashoka"
    },
    {
      question: "Who was the first Governor-General of independent India?",
      options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Sardar Patel"],
      answer: "Lord Mountbatten"
    },
    {
      question: "The 'Battle of Buxar' was fought in which year?",
      options: ["1757", "1764", "1773", "1784"],
      answer: "1764"
    },
    {
      question: "Which historical event is associated with the year 1498?",
      options: ["Discovery of America", "Vasco da Gama's arrival in India", "Battle of Panipat", "Fall of Constantinople"],
      answer: "Vasco da Gama's arrival in India"
    },
    {
      question: "Who introduced the 'Doctrine of Lapse'?",
      options: ["Lord William Bentinck", "Lord Dalhousie", "Lord Canning", "Lord Ripon"],
      answer: "Lord Dalhousie"
    },
    {
      question: "The famous traveler 'Fa-Hien' visited India during the reign of:",
      options: ["Chandragupta Maurya", "Ashoka", "Chandragupta II (Vikramaditya)", "Harshavardhana"],
      answer: "Chandragupta II (Vikramaditya)"
    },
    {
      question: "The 'Ghadr Party' was formed in which country?",
      options: ["India", "USA", "Canada", "UK"],
      answer: "USA"
    },
    {
      question: "Who was the political guru of Mahatma Gandhi?",
      options: ["Bal Gangadhar Tilak", "Lala Lajpat Rai", "Gopal Krishna Gokhale", "Bipin Chandra Pal"],
      answer: "Gopal Krishna Gokhale"
    },
    {
      question: "The 'First War of Indian Independence' (Sepoy Mutiny) occurred in which year?",
      options: ["1850", "1857", "1860", "1865"],
      answer: "1857"
    },
    {
      question: "Which dynasty built the Khajuraho temples?",
      options: ["Chola", "Pallava", "Chandela", "Rashtrakuta"],
      answer: "Chandela"
    },
    {
      question: "Who was the founder of the 'Brahmo Samaj'?",
      options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Dayananda Saraswati", "Ramakrishna Paramahamsa"],
      answer: "Raja Ram Mohan Roy"
    },
    {
      question: "The 'Saka Era' started in which year?",
      options: ["58 BC", "78 AD", "320 AD", "606 AD"],
      answer: "78 AD"
    },
    {
      question: "Who authored 'Ain-i-Akbari'?",
      options: ["Faizi", "Tansen", "Abul Fazl", "Birbal"],
      answer: "Abul Fazl"
    },
    {
      question: "The 'Red Fort' in Delhi was built by:",
      options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
      answer: "Shah Jahan"
    },
    {
      question: "Who was the last ruler of the Delhi Sultanate?",
      options: ["Qutb al-Din Aibak", "Alauddin Khalji", "Ibrahim Lodi", "Firoz Shah Tughlaq"],
      answer: "Ibrahim Lodi"
    },
    {
      question: "The famous 'Pietra Dura' technique is associated with which Mughal emperor?",
      options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
      answer: "Shah Jahan"
    },
    {
      question: "The 'Battle of Panipat (First)' was fought between Babur and:",
      options: ["Sher Shah Suri", "Ibrahim Lodi", "Rana Sanga", "Hem Chandra Vikramaditya"],
      answer: "Ibrahim Lodi"
    },
    {
      question: "Which of the following sites is NOT an Indus Valley Civilization site?",
      options: ["Harappa", "Mohenjo-Daro", "Lothal", "Patliputra"],
      answer: "Patliputra"
    },
    {
      question: "Who was the first woman ruler of Delhi Sultanate?",
      options: ["Chand Bibi", "Razia Sultan", "Noor Jahan", "Jahanara Begum"],
      answer: "Razia Sultan"
    },
    {
      question: "The 'Government of India Act, 1935' established which system?",
      options: ["Diarchy at center", "Provincial Autonomy", "Separate Electorates", "Communal Award"],
      answer: "Provincial Autonomy"
    },
    {
      question: "Which Greek ambassador visited the court of Chandragupta Maurya?",
      options: ["Homer", "Herodotus", "Megasthenes", "Ptolemy"],
      answer: "Megasthenes"
    },
    {
      question: "The 'Partition of Bengal' took place in which year?",
      options: ["1900", "1905", "1909", "1911"],
      answer: "1905"
    },
    {
      question: "Who introduced the 'Ryotwari System' of land revenue?",
      options: ["Lord Cornwallis", "Thomas Munro", "Lord Dalhousie", "Lord William Bentinck"],
      answer: "Thomas Munro"
    },
    {
      question: "The 'Swadeshi Movement' was a reaction to:",
      options: ["Jallianwala Bagh Massacre", "Partition of Bengal", "Rowlatt Act", "Simon Commission"],
      answer: "Partition of Bengal"
    },
    {
      question: "Who was the last Hindu emperor of North India?",
      options: ["Harshavardhana", "Pulakeshin II", "Samudragupta", "Prithviraj Chauhan"],
      answer: "Harshavardhana"
    },
    {
      question: "The 'Khilafat Movement' was started by:",
      options: ["Mahatma Gandhi", "Ali Brothers", "Maulana Abul Kalam Azad", "Muhammad Ali Jinnah"],
      answer: "Ali Brothers"
    },
    {
      question: "The ancient city of 'Hampi' was the capital of which empire?",
      options: ["Chola", "Pandya", "Vijayanagara", "Chera"],
      answer: "Vijayanagara"
    },
    {
      question: "Who was the founder of the 'Ramakrishna Mission'?",
      options: ["Ramakrishna Paramahamsa", "Swami Vivekananda", "Annie Besant", "Ishwar Chandra Vidyasagar"],
      answer: "Swami Vivekananda"
    },
    {
      question: "The 'Non-Cooperation Movement' was withdrawn after which incident?",
      options: ["Jallianwala Bagh Massacre", "Chauri Chaura Incident", "Dandi March", "Simon Commission"],
      answer: "Chauri Chaura Incident"
    },
    {
      question: "The 'Rig Veda' is a collection of:",
      options: ["Laws", "Rituals", "Hymns", "Philosophical treaties"],
      answer: "Hymns"
    },
    {
      question: "Who was the first Viceroy of India?",
      options: ["Lord Dalhousie", "Lord Canning", "Lord Ripon", "Lord Curzon"],
      answer: "Lord Canning"
    },
    {
      question: "The 'Satyagraha' movement was first launched by Mahatma Gandhi in:",
      options: ["India", "South Africa", "England", "USA"],
      answer: "South Africa"
    },
    {
      question: "The 'First Battle of Tarain' was fought between Prithviraj Chauhan and:",
      options: ["Mahmud of Ghazni", "Muhammad Ghori", "Alauddin Khalji", "Akbar"],
      answer: "Muhammad Ghori"
    },
    {
      question: "Which Mughal emperor was known as 'Alamgir'?",
      options: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
      answer: "Aurangzeb"
    },
    {
      question: "The 'Great Bath' is a prominent structure found at which Indus Valley site?",
      options: ["Harappa", "Lothal", "Mohenjo-Daro", "Kalibangan"],
      answer: "Mohenjo-Daro"
    },
    {
      question: "Who was the first President of the Muslim League?",
      options: ["Muhammad Ali Jinnah", "Aga Khan III", "Nawab Waqar-ul-Mulk", "Syed Ahmed Khan"],
      answer: "Aga Khan III"
    },
    {
      question: "The 'Gandhara School of Art' was heavily influenced by which culture?",
      options: ["Indian", "Persian", "Greek", "Chinese"],
      answer: "Greek"
    },
    {
      question: "The 'Purna Swaraj' resolution was adopted by the Indian National Congress in which year?",
      options: ["1929", "1930", "1931", "1932"],
      answer: "1929"
    },
    {
      question: "Which famous battle marked the end of Tipu Sultan's rule?",
      options: ["Battle of Plassey", "Battle of Seringapatam", "Battle of Buxar", "Battle of Panipat"],
      answer: "Battle of Seringapatam"
    },
    {
      question: "The 'Magadhan Empire' was founded by:",
      options: ["Bimbisara", "Ajatashatru", "Mahapadma Nanda", "Chandragupta Maurya"],
      answer: "Bimbisara"
    },
    {
      question: "Who was the author of 'Indica'?",
      options: ["Fa-Hien", "Hiuen Tsang", "Megasthenes", "I-tsing"],
      answer: "Megasthenes"
    },
    {
      question: "The 'Champaran Satyagraha' was related to:",
      options: ["Indigo planters", "Salt tax", "Forest rights", "Land revenue"],
      answer: "Indigo planters"
    },
    {
      question: "Which year is associated with the 'Battle of Haldighati'?",
      options: ["1526", "1556", "1576", "1605"],
      answer: "1576"
    },
    {
      question: "Who was the famous court poet of Harshavardhana?",
      options: ["Kalidasa", "Banabhatta", "Tulsidas", "Surdas"],
      answer: "Banabhatta"
    },
    {
      question: "The 'Drain of Wealth' theory was propounded by:",
      options: ["Dadabhai Naoroji", "Gopal Krishna Gokhale", "M.G. Ranade", "R.C. Dutt"],
      answer: "Dadabhai Naoroji"
    },
    {
      question: "The 'Buddhist Council' where Buddhist scriptures were compiled took place in:",
      options: ["Rajgir", "Vaishali", "Pataliputra", "Kashmir"],
      answer: "Rajgir"
    },
    {
      question: "Who was the founder of the 'Servants of India Society'?",
      options: ["Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Lala Lajpat Rai", "Mahatma Gandhi"],
      answer: "Gopal Krishna Gokhale"
    },
    {
      question: "The 'Cabinet Mission' came to India in which year?",
      options: ["1942", "1945", "1946", "1947"],
      answer: "1946"
    },
    {
      question: "The 'Vijayanagara Empire' was founded by:",
      options: ["Harihara and Bukka", "Krishnadevaraya", "Deva Raya I", "Rama Raya"],
      answer: "Harihara and Bukka"
    },
    {
      question: "Who was the first woman President of the Indian National Congress?",
      options: ["Sarojini Naidu", "Annie Besant", "Nellie Sengupta", "Indira Gandhi"],
      answer: "Annie Besant"
    },
    {
      question: "The 'Battle of Kannauj' was fought between Sher Shah Suri and:",
      options: ["Babur", "Humayun", "Akbar", "Jahangir"],
      answer: "Humayun"
    },
    {
      question: "Which Mughal emperor abolished the 'Jizya' tax?",
      options: ["Babur", "Humayun", "Akbar", "Aurangzeb"],
      answer: "Akbar"
    },
    {
      question: "The 'Partition of India' took place on:",
      options: ["14 August 1947", "15 August 1947", "26 January 1950", "2 October 1947"],
      answer: "15 August 1947"
    },
    {
      question: "Who was the founder of the 'Arya Samaj'?",
      options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Dayananda Saraswati", "Ishwar Chandra Vidyasagar"],
      answer: "Dayananda Saraswati"
    },
    {
      question: "The 'Vernacular Press Act' was passed during the viceroyalty of:",
      options: ["Lord Lytton", "Lord Ripon", "Lord Curzon", "Lord Dufferin"],
      answer: "Lord Lytton"
    },
    {
      question: "Which of the following is an ancient port city of the Indus Valley Civilization?",
      options: ["Harappa", "Mohenjo-Daro", "Lothal", "Rakhigarhi"],
      answer: "Lothal"
    },
    {
      question: "The 'Doctrine of Laissez-faire' is associated with which economic thinker?",
      options: ["Karl Marx", "Adam Smith", "John Maynard Keynes", "Milton Friedman"],
      answer: "Adam Smith"
    },
    {
      question: "The 'First Buddhist Council' was held at:",
      options: ["Vaishali", "Rajgir", "Pataliputra", "Kashmir"],
      answer: "Rajgir"
    },
    {
      question: "Who was the 'Grand Old Man of India'?",
      options: ["Mahatma Gandhi", "Dadabhai Naoroji", "Gopal Krishna Gokhale", "Bal Gangadhar Tilak"],
      answer: "Dadabhai Naoroji"
    },
    {
      question: "The 'Civil Disobedience Movement' was launched in which year?",
      options: ["1920", "1928", "1930", "1942"],
      answer: "1930"
    },
    {
      question: "Which Roman emperor made Christianity the state religion?",
      options: ["Augustus", "Nero", "Constantine the Great", "Diocletian"],
      answer: "Constantine the Great"
    },
    {
      question: "The 'Russian Revolution' occurred in which year?",
      options: ["1905", "1917", "1921", "1929"],
      answer: "1917"
    },
    {
      question: "Who was the author of 'Das Kapital'?",
      options: ["Friedrich Engels", "Vladimir Lenin", "Karl Marx", "Leon Trotsky"],
      answer: "Karl Marx"
    },
    {
      question: "The 'Fall of the Berlin Wall' took place in which year?",
      options: ["1985", "1989", "1991", "1995"],
      answer: "1989"
    },
    {
      question: "The 'Cold War' was primarily between which two powers?",
      options: ["USA and China", "USA and Russia (USSR)", "Germany and Russia", "UK and France"],
      answer: "USA and Russia (USSR)"
    },
    {
      question: "Which famous battle ended Napoleon Bonaparte's reign?",
      options: ["Battle of Austerlitz", "Battle of Trafalgar", "Battle of Waterloo", "Battle of Leipzig"],
      answer: "Battle of Waterloo"
    },
    {
      question: "The 'Magna Carta' was signed in which year?",
      options: ["1066", "1215", "1453", "1776"],
      answer: "1215"
    },
    {
      question: "Who invented the printing press?",
      options: ["Leonardo da Vinci", "Johannes Gutenberg", "Isaac Newton", "Galileo Galilei"],
      answer: "Johannes Gutenberg"
    },
    {
      question: "The 'Renaissance' period originated in which country?",
      options: ["France", "England", "Italy", "Germany"],
      answer: "Italy"
    },
    {
      question: "When did World War I begin?",
      options: ["1910", "1914", "1918", "1922"],
      answer: "1914"
    },
    {
      question: "When did World War II end?",
      options: ["1940", "1942", "1945", "1948"],
      answer: "1945"
    },
    {
      question: "The 'Atomic Bomb' was dropped on Hiroshima in which year?",
      options: ["1943", "1944", "1945", "1946"],
      answer: "1945"
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Mikhail Gorbachev"],
      answer: "Joseph Stalin"
    },
    {
      question: "The 'Great Wall of China' was built to protect against invasions from:",
      options: ["Mongols", "Japanese", "Koreans", "Russians"],
      answer: "Mongols"
    },
    {
      question: "Who was the first emperor of unified China?",
      options: ["Confucius", "Laozi", "Qin Shi Huang", "Emperor Wu of Han"],
      answer: "Qin Shi Huang"
    },
    {
      question: "The 'Ancient Olympic Games' originated in which country?",
      options: ["Rome", "Egypt", "Greece", "Persia"],
      answer: "Greece"
    },
    {
      question: "Who was assassinated on June 28, 1914, triggering World War I?",
      options: ["Archduke Franz Ferdinand", "Kaiser Wilhelm II", "Tsar Nicholas II", "Woodrow Wilson"],
      answer: "Archduke Franz Ferdinand"
    },
    {
      question: "The 'Protestant Reformation' was initiated by:",
      options: ["John Calvin", "Martin Luther", "Henry VIII", "Ignatius of Loyola"],
      answer: "Martin Luther"
    },
    {
      question: "The 'French Revolution' began in which year?",
      options: ["1776", "1789", "1804", "1815"],
      answer: "1789"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
      answer: "George Washington"
    },
    {
      question: "The 'Declaration of Independence' of the United States was signed in which year?",
      options: ["1774", "1776", "1783", "1789"],
      answer: "1776"
    },
    {
      question: "The 'Industrial Revolution' began in which country?",
      options: ["USA", "Germany", "France", "Great Britain"],
      answer: "Great Britain"
    },
    {
      question: "Which ancient civilization developed hieroglyphics?",
      options: ["Mesopotamian", "Roman", "Egyptian", "Greek"],
      answer: "Egyptian"
    },
    {
      question: "The 'Fall of the Roman Empire' in the West occurred in which year?",
      options: ["330 AD", "410 AD", "476 AD", "1453 AD"],
      answer: "476 AD"
    },
    {
      question: "Who led the 'Bolshevik Revolution' in Russia?",
      options: ["Joseph Stalin", "Leon Trotsky", "Vladimir Lenin", "Mikhail Gorbachev"],
      answer: "Vladimir Lenin"
    },
    {
      question: "The 'Cuban Missile Crisis' occurred in which year?",
      options: ["1959", "1962", "1965", "1968"],
      answer: "1962"
    },
    {
      question: "Who wrote 'The Prince'?",
      options: ["Machiavelli", "Plato", "Aristotle", "Socrates"],
      answer: "Machiavelli"
    },
    {
      question: "The 'Hundred Years' War' was fought between which two countries?",
      options: ["France and Germany", "England and France", "Spain and Portugal", "Italy and Austria"],
      answer: "England and France"
    },
    {
      question: "Who discovered Australia for Europeans?",
      options: ["Captain Cook", "Ferdinand Magellan", "Vasco da Gama", "Christopher Columbus"],
      answer: "Captain Cook"
    },
    {
      question: "The 'Berlin Wall' separated East and West Berlin for how many years?",
      options: ["10", "18", "28", "40"],
      answer: "28"
    }
  ],

  films: [
    {
      question: "Which movie won the Best Picture Oscar in 2024?",
      options: ["Oppenheimer", "Barbie", "Dune", "The Fabelmans"],
      answer: "Oppenheimer"
    },
    {
      question: "Who directed the film 'Titanic'?",
      options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
      answer: "James Cameron"
    },
    {
      question: "Which actor played the role of 'Iron Man' in the Marvel Cinematic Universe?",
      options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
      answer: "Robert Downey Jr."
    },
    {
      question: "Which film features a talking lion named 'Mufasa'?",
      options: ["Madagascar", "The Jungle Book", "The Lion King", "Zootopia"],
      answer: "The Lion King"
    },
    {
      question: "Who composed the music for the 'Star Wars' saga?",
      options: ["Hans Zimmer", "Ennio Morricone", "John Williams", "Michael Giacchino"],
      answer: "John Williams"
    },
    {
      question: "Which actress won the Best Actress Oscar for 'La La Land'?",
      options: ["Natalie Portman", "Emma Stone", "Amy Adams", "Meryl Streep"],
      answer: "Emma Stone"
    },
    {
      question: "Which animated film is set in the fictional city of 'Zootopia'?",
      options: ["Frozen", "Moana", "Zootopia", "Tangled"],
      answer: "Zootopia"
    },
    {
      question: "Who played the lead role in 'The Godfather'?",
      options: ["Al Pacino", "Robert De Niro", "Marlon Brando", "James Caan"],
      answer: "Marlon Brando"
    },
    {
      question: "Which movie is famous for the quote 'Here's looking at you, kid'?",
      options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Maltese Falcon"],
      answer: "Casablanca"
    },
    {
      question: "Which director is known for his signature use of slow-motion and stylistic violence?",
      options: ["Quentin Tarantino", "Martin Scorsese", "Stanley Kubrick", "Alfred Hitchcock"],
      answer: "Quentin Tarantino"
    },
    {
      question: "What is the name of the wizard in 'The Lord of the Rings' series?",
      options: ["Dumbledore", "Gandalf", "Merlin", "Saruman"],
      answer: "Gandalf"
    },
    {
      question: "Which film features a blue alien race called 'Na'vi'?",
      options: ["Star Trek", "Avatar", "Guardians of the Galaxy", "Transformers"],
      answer: "Avatar"
    },
    {
      question: "Who played the role of 'Jack Dawson' in 'Titanic'?",
      options: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise"],
      answer: "Leonardo DiCaprio"
    },
    {
      question: "Which superhero film features the city of 'Gotham City'?",
      options: ["Superman", "The Avengers", "Batman", "Spider-Man"],
      answer: "Batman"
    },
    {
      question: "Which animated classic is about a young deer named 'Bambi'?",
      options: ["Dumbo", "Bambi", "Pinocchio", "Snow White"],
      answer: "Bambi"
    },
    {
      question: "Who directed the horror film 'Psycho'?",
      options: ["Steven Spielberg", "Alfred Hitchcock", "Stanley Kubrick", "David Lynch"],
      answer: "Alfred Hitchcock"
    },
    {
      question: "Which film won the first-ever Best Picture Oscar?",
      options: ["Wings", "Sunrise: A Song of Two Humans", "The Circus", "The Broadway Melody"],
      answer: "Wings"
    },
    {
      question: "What is the name of the main character in the 'Harry Potter' series?",
      options: ["Ron Weasley", "Hermione Granger", "Harry Potter", "Albus Dumbledore"],
      answer: "Harry Potter"
    },
    {
      question: "Which director is known for his science fiction films like '2001: A Space Odyssey'?",
      options: ["Ridley Scott", "James Cameron", "Stanley Kubrick", "Christopher Nolan"],
      answer: "Stanley Kubrick"
    },
    {
      question: "Which film features a talking pig named 'Babe'?",
      options: ["Charlotte's Web", "Babe", "Stuart Little", "Piglet's Big Movie"],
      answer: "Babe"
    },
    {
      question: "Who wrote the screenplay for 'Pulp Fiction'?",
      options: ["Christopher Nolan", "Coen Brothers", "Quentin Tarantino", "Aaron Sorkin"],
      answer: "Quentin Tarantino"
    },
    {
      question: "Which actress is known as 'The Queen of Hollywood'?",
      options: ["Marilyn Monroe", "Elizabeth Taylor", "Katharine Hepburn", "Bette Davis"],
      answer: "Elizabeth Taylor"
    },
    {
      question: "Which animated film popularized the song 'Let It Go'?",
      options: ["Tangled", "Moana", "Frozen", "Encanto"],
      answer: "Frozen"
    },
    {
      question: "What is the name of the fictional African country in 'Black Panther'?",
      options: ["Genovia", "Wakanda", "Alderaan", "Krypton"],
      answer: "Wakanda"
    },
    {
      question: "Who played the role of 'Darth Vader' in the 'Star Wars' original trilogy (voice)?",
      options: ["Mark Hamill", "Harrison Ford", "James Earl Jones", "David Prowse"],
      answer: "James Earl Jones"
    },
    {
      question: "Which film genre typically features cowboys, gunfights, and dusty towns?",
      options: ["Film Noir", "Western", "Musical", "Thriller"],
      answer: "Western"
    },
    {
      question: "Which famous director is known for his use of long takes and tracking shots?",
      options: ["Alfred Hitchcock", "Stanley Kubrick", "Martin Scorsese", "Andrei Tarkovsky"],
      answer: "Martin Scorsese"
    },
    {
      question: "What is the name of the evil queen in 'Snow White and the Seven Dwarfs'?",
      options: ["Maleficent", "Cruella de Vil", "Evil Queen", "Ursula"],
      answer: "Evil Queen"
    },
    {
      question: "Which actor is famous for his method acting and roles in films like 'Taxi Driver'?",
      options: ["Jack Nicholson", "Dustin Hoffman", "Robert De Niro", "Al Pacino"],
      answer: "Robert De Niro"
    },
    {
      question: "Which film holds the record for the most Oscar nominations (14) with 'All About Eve' and 'La La Land'?",
      options: ["Titanic", "Ben-Hur", "The Lord of the Rings: The Return of the King", "All About Eve"],
      answer: "Titanic"
    },
    {
      question: "What is the name of the toy cowboy in 'Toy Story'?",
      options: ["Buzz Lightyear", "Woody", "Slinky Dog", "Rex"],
      answer: "Woody"
    },
    {
      question: "Who directed the classic film 'Citizen Kane'?",
      options: ["Frank Capra", "Billy Wilder", "Orson Welles", "John Ford"],
      answer: "Orson Welles"
    },
    {
      question: "Which film features a fictional dinosaur theme park?",
      options: ["King Kong", "Godzilla", "Jurassic Park", "Gorillas in the Mist"],
      answer: "Jurassic Park"
    },
    {
      question: "Who voiced the character of 'Donkey' in the 'Shrek' movies?",
      options: ["Mike Myers", "Cameron Diaz", "Eddie Murphy", "Antonio Banderas"],
      answer: "Eddie Murphy"
    },
    {
      question: "Which film is about a young boy who finds a magical alien?",
      options: ["Close Encounters of the Third Kind", "E.T. the Extra-Terrestrial", "Arrival", "District 9"],
      answer: "E.T. the Extra-Terrestrial"
    },
    {
      question: "What is the name of the magical nanny in 'Mary Poppins'?",
      options: ["Nanny McPhee", "Mary Poppins", "Maria von Trapp", "Doris Day"],
      answer: "Mary Poppins"
    },
    {
      question: "Which actress starred as 'Katniss Everdeen' in 'The Hunger Games' series?",
      options: ["Shailene Woodley", "Kristen Stewart", "Jennifer Lawrence", "Emma Watson"],
      answer: "Jennifer Lawrence"
    },
    {
      question: "Which film features a talking fish named 'Dory'?",
      options: ["The Little Mermaid", "Finding Nemo", "Shark Tale", "Finding Dory"],
      answer: "Finding Nemo"
    },
    {
      question: "Who directed 'Inception' and 'The Dark Knight' trilogy?",
      options: ["Steven Spielberg", "Denis Villeneuve", "Christopher Nolan", "J.J. Abrams"],
      answer: "Christopher Nolan"
    },
    {
      question: "Which film has the iconic line 'May the Force be with you'?",
      options: ["Star Trek", "Star Wars", "Blade Runner", "Alien"],
      answer: "Star Wars"
    },
    {
      question: "What is the name of the secret agent played by Daniel Craig, Pierce Brosnan, and Sean Connery?",
      options: ["Jason Bourne", "Ethan Hunt", "James Bond", "Jack Ryan"],
      answer: "James Bond"
    },
    {
      question: "Which film is about a clownfish searching for his son?",
      options: ["The Little Mermaid", "Finding Nemo", "Shark Tale", "Finding Dory"],
      answer: "Finding Nemo"
    },
    {
      question: "Who composed the score for 'Jaws' and 'E.T. the Extra-Terrestrial'?",
      options: ["Hans Zimmer", "Danny Elfman", "John Williams", "Michael Giacchino"],
      answer: "John Williams"
    },
    {
      question: "Which actress won an Oscar for her role as 'Erin Brockovich'?",
      options: ["Julia Roberts", "Sandra Bullock", "Nicole Kidman", "Reese Witherspoon"],
      answer: "Julia Roberts"
    },
    {
      question: "Which animated film tells the story of a rat who loves to cook?",
      options: ["Cars", "Up", "Ratatouille", "Wall-E"],
      answer: "Ratatouille"
    },
    {
      question: "Who played the lead role in 'Forrest Gump'?",
      options: ["Tom Cruise", "Brad Pitt", "Tom Hanks", "Denzel Washington"],
      answer: "Tom Hanks"
    },
    {
      question: "Which film features a giant ape on Skull Island?",
      options: ["Gorillas in the Mist", "Mighty Joe Young", "King Kong", "Planet of the Apes"],
      answer: "King Kong"
    },
    {
      question: "Who directed the classic musical 'The Sound of Music'?",
      options: ["Gene Kelly", "Stanley Donen", "Robert Wise", "Vincente Minnelli"],
      answer: "Robert Wise"
    },
    {
      question: "Which film is about a young girl who enters a magical world through a wardrobe?",
      options: ["Alice in Wonderland", "The Wizard of Oz", "The Chronicles of Narnia", "Pan's Labyrinth"],
      answer: "The Chronicles of Narnia"
    },
    {
      question: "What is the name of the ship that sinks in 'Titanic'?",
      options: ["Queen Mary", "Lusitania", "Titanic", "Britannic"],
      answer: "Titanic"
    },
    {
      question: "Who directed 'Pulp Fiction' and 'Kill Bill'?",
      options: ["Guy Ritchie", "Edgar Wright", "Quentin Tarantino", "Wes Anderson"],
      answer: "Quentin Tarantino"
    },
    {
      question: "Which film features a friendly alien named 'E.T.'?",
      options: ["Close Encounters of the Third Kind", "E.T. the Extra-Terrestrial", "Arrival", "Cocoon"],
      answer: "E.T. the Extra-Terrestrial"
    },
    {
      question: "What is the name of the hobbit who carries the One Ring in 'The Lord of the Rings'?",
      options: ["Samwise Gamgee", "Frodo Baggins", "Pippin Took", "Merry Brandybuck"],
      answer: "Frodo Baggins"
    },
    {
      question: "Who played the role of 'Neo' in 'The Matrix' trilogy?",
      options: ["Keanu Reeves", "Laurence Fishburne", "Hugo Weaving", "Carrie-Anne Moss"],
      answer: "Keanu Reeves"
    },
    {
      question: "Which film is famous for its iconic shower scene?",
      options: ["The Shining", "Psycho", "Vertigo", "Rear Window"],
      answer: "Psycho"
    },
    {
      question: "Who directed 'Schindler's List' and 'Jurassic Park'?",
      options: ["James Cameron", "George Lucas", "Steven Spielberg", "Ridley Scott"],
      answer: "Steven Spielberg"
    },
    {
      question: "Which animated film is about a princess who runs away and builds an ice palace?",
      options: ["Tangled", "Brave", "Frozen", "Moana"],
      answer: "Frozen"
    },
    {
      question: "What is the name of the evil clown in 'It'?",
      options: ["Joker", "Pennywise", "Freddy Krueger", "Chucky"],
      answer: "Pennywise"
    },
    {
      question: "Who played the role of 'Gandalf' in 'The Lord of the Rings' and 'The Hobbit' trilogies?",
      options: ["Ian McKellen", "Christopher Lee", "Hugo Weaving", "Elijah Wood"],
      answer: "Ian McKellen"
    },
    {
      question: "Which film is about a group of dinosaurs brought back to life?",
      options: ["Godzilla", "Jurassic Park", "King Kong", "The Lost World"],
      answer: "Jurassic Park"
    },
    {
      question: "Who directed the film 'Avatar'?",
      options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Michael Bay"],
      answer: "James Cameron"
    },
    {
      question: "Which film genre is known for its suspense, mystery, and plot twists?",
      options: ["Comedy", "Action", "Thriller", "Horror"],
      answer: "Thriller"
    },
    {
      question: "What is the name of the fictional superhero team featuring Iron Man, Captain America, and Thor?",
      options: ["Justice League", "X-Men", "Avengers", "Fantastic Four"],
      answer: "Avengers"
    },
    {
      question: "Who won the Best Actor Oscar for his role in 'The Revenant'?",
      options: ["Brad Pitt", "Tom Hanks", "Leonardo DiCaprio", "Christian Bale"],
      answer: "Leonardo DiCaprio"
    },
    {
      question: "Which animated film features a young lion cub named 'Simba'?",
      options: ["Madagascar", "The Lion King", "Jungle Book", "Finding Nemo"],
      answer: "The Lion King"
    },
    {
      question: "Who directed the film 'The Shawshank Redemption'?",
      options: ["Frank Darabont", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
      answer: "Frank Darabont"
    },
    {
      question: "Which film is about a robot who falls in love?",
      options: ["I, Robot", "Blade Runner", "WALL-E", "Chappie"],
      answer: "WALL-E"
    },
    {
      question: "What is the name of the boy who lives with his aunt and uncle and discovers he's a wizard?",
      options: ["Percy Jackson", "Harry Potter", "Frodo Baggins", "Luke Skywalker"],
      answer: "Harry Potter"
    },
    {
      question: "Who played the role of 'Batman' in 'The Dark Knight' trilogy?",
      options: ["Christian Bale", "Ben Affleck", "Michael Keaton", "George Clooney"],
      answer: "Christian Bale"
    },
    {
      question: "Which film is set in a post-apocalyptic wasteland and features 'Max Rockatansky'?",
      options: ["Blade Runner", "Mad Max: Fury Road", "Waterworld", "Book of Eli"],
      answer: "Mad Max: Fury Road"
    },
    {
      question: "Who directed the science fiction film 'Arrival'?",
      options: ["Christopher Nolan", "Denis Villeneuve", "Ridley Scott", "James Cameron"],
      answer: "Denis Villeneuve"
    },
    {
      question: "Which animated film features a brave princess named 'Merida'?",
      options: ["Tangled", "Moana", "Brave", "Frozen"],
      answer: "Brave"
    },
    {
      question: "What is the name of the main villain in 'The Lion King'?",
      options: ["Zazu", "Timon", "Pumbaa", "Scar"],
      answer: "Scar"
    },
    {
      question: "Who played the role of 'Captain Jack Sparrow' in the 'Pirates of the Caribbean' series?",
      options: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Keira Knightley"],
      answer: "Johnny Depp"
    },
    {
      question: "Which film is based on a true story about the hunt for Osama bin Laden?",
      options: ["American Sniper", "Zero Dark Thirty", "The Hurt Locker", "Lone Survivor"],
      answer: "Zero Dark Thirty"
    },
    {
      question: "Who composed the famous 'Psycho' shower scene music?",
      options: ["Bernard Herrmann", "Jerry Goldsmith", "Alfred Newman", "Max Steiner"],
      answer: "Bernard Herrmann"
    },
    {
      question: "Which film features a talking snowman named 'Olaf'?",
      options: ["Ice Age", "Frozen", "Despicable Me", "Shrek"],
      answer: "Frozen"
    },
    {
      question: "What is the name of the fictional city where 'Spider-Man' operates?",
      options: ["Metropolis", "Gotham City", "New York City", "Central City"],
      answer: "New York City"
    },
    {
      question: "Who directed the film 'Spirited Away'?",
      options: ["Hayao Miyazaki", "Isao Takahata", "Makoto Shinkai", "Satoshi Kon"],
      answer: "Hayao Miyazaki"
    },
    {
      question: "Which film features a group of children discovering a magical world in a box?",
      options: ["Jumanji", "Zathura", "The NeverEnding Story", "Bridge to Terabithia"],
      answer: "Jumanji"
    },
    {
      question: "Who played the role of 'Sherlock Holmes' in the 2009 film?",
      options: ["Benedict Cumberbatch", "Robert Downey Jr.", "Jude Law", "Henry Cavill"],
      answer: "Robert Downey Jr."
    },
    {
      question: "Which film is about a chef who quits his job to start a food truck?",
      options: ["Chef", "Burnt", "Julie & Julia", "The Hundred-Foot Journey"],
      answer: "Chef"
    },
    {
      question: "What is the name of the computer in '2001: A Space Odyssey'?",
      options: ["Skynet", "HAL 9000", "Deep Blue", "Watson"],
      answer: "HAL 9000"
    },
    {
      question: "Who directed the historical drama 'Gladiator'?",
      options: ["Ridley Scott", "Steven Spielberg", "Mel Gibson", "Peter Jackson"],
      answer: "Ridley Scott"
    },
    {
      question: "Which animated film features a young robot who cleans up a deserted Earth?",
      options: ["Up", "Cars", "WALL-E", "Toy Story"],
      answer: "WALL-E"
    },
    {
      question: "What is the name of the fictional university in 'Monsters University'?",
      options: ["Pixar University", "Monsteropolis University", "Monsters University", "Scare University"],
      answer: "Monsters University"
    },
    {
      question: "Who played the lead role in 'The Pursuit of Happyness'?",
      options: ["Denzel Washington", "Will Smith", "Eddie Murphy", "Jamie Foxx"],
      answer: "Will Smith"
    },
    {
      question: "Which film is about a talking bear who loves marmalade?",
      options: ["Winnie the Pooh", "Paddington", "Yogi Bear", "Brave"],
      answer: "Paddington"
    },
    {
      question: "Who directed the film 'Parasite'?",
      options: ["Bong Joon-ho", "Park Chan-wook", "Kim Ki-duk", "Lee Chang-dong"],
      answer: "Bong Joon-ho"
    },
    {
      question: "Which film is known for its famous line 'Houston, we have a problem'?",
      options: ["Apollo 13", "Gravity", "Interstellar", "First Man"],
      answer: "Apollo 13"
    },
    {
      question: "What is the name of the young girl in 'E.T. the Extra-Terrestrial'?",
      options: ["Gertie", "Elliott", "Mary", "Dee Dee"],
      answer: "Gertie"
    },
    {
      question: "Who played the role of 'Wonder Woman' in the recent DC films?",
      options: ["Amy Adams", "Margot Robbie", "Gal Gadot", "Scarlett Johansson"],
      answer: "Gal Gadot"
    },
    {
      question: "Which animated film is about a family of superheroes?",
      options: ["Big Hero 6", "The Incredibles", "Despicable Me", "Hotel Transylvania"],
      answer: "The Incredibles"
    },
    {
      question: "What is the name of the main villain in 'The Dark Knight'?",
      options: ["Riddler", "Penguin", "Two-Face", "Joker"],
      answer: "Joker"
    },
    {
      question: "Who directed the film 'Forrest Gump'?",
      options: ["Steven Spielberg", "Robert Zemeckis", "James Cameron", "Peter Jackson"],
      answer: "Robert Zemeckis"
    },
    {
      question: "Which film is about a dream thief?",
      options: ["Eternal Sunshine of the Spotless Mind", "Inception", "Vanilla Sky", "The Matrix"],
      answer: "Inception"
    }
  ],

  comedy: [
    {
      question: "Who is known as the 'King of Comedy' in India?",
      options: ["Kapil Sharma", "Johnny Lever", "Sunil Grover", "Paresh Rawal"],
      answer: "Kapil Sharma"
    },
    {
      question: "Which famous American comedian is known for his observational humor and 'Seinfeld'?",
      options: ["Jerry Seinfeld", "George Carlin", "Richard Pryor", "Louis C.K."],
      answer: "Jerry Seinfeld"
    },
    {
      question: "Who is the legendary British comedian known for his silent film era work?",
      options: ["Buster Keaton", "Laurel and Hardy", "Charlie Chaplin", "Harold Lloyd"],
      answer: "Charlie Chaplin"
    },
    {
      question: "Which Indian comedian is famous for his mimicry and acting in films like 'Hera Pheri'?",
      options: ["Rajpal Yadav", "Akshay Kumar", "Johnny Lever", "Govinda"],
      answer: "Johnny Lever"
    },
    {
      question: "Which comedy group is known for their absurd sketch comedy show 'Monty Python's Flying Circus'?",
      options: ["The Three Stooges", "Monty Python", "Kids in the Hall", "Firesign Theatre"],
      answer: "Monty Python"
    },
    {
      question: "Who is the American stand-up comedian known for his dark humor and controversial topics?",
      options: ["Dave Chappelle", "Chris Rock", "Ricky Gervais", "Bill Burr"],
      answer: "George Carlin" // Changed from Dave Chappelle to George Carlin, who is more widely known for controversial and dark topics.
    },
    {
      question: "Which Indian comedian is known for his political satire and show 'The Great Indian Kapil Show'?",
      options: ["Krushna Abhishek", "Bharti Singh", "Kapil Sharma", "Gaurav Gera"],
      answer: "Kapil Sharma"
    },
    {
      question: "Which American comedian and actor starred in 'Mrs. Doubtfire' and 'Good Will Hunting'?",
      options: ["Jim Carrey", "Adam Sandler", "Robin Williams", "Eddie Murphy"],
      answer: "Robin Williams"
    },
    {
      question: "Who is the Indian comedian and actor often referred to as 'The King of Bollywood Comedy'?",
      options: ["Govinda", "Paresh Rawal", "Akshay Kumar", "Sanjay Dutt"],
      answer: "Govinda"
    },
    {
      question: "Which American comedian and talk show host is famous for his 'Tonight Show' stint?",
      options: ["Jay Leno", "David Letterman", "Conan O'Brien", "Johnny Carson"],
      answer: "Johnny Carson"
    },
    {
      question: "Which Indian comedian is known for his one-liners and appearance in 'The Kapil Sharma Show' as 'Gutthi'?",
      options: ["Sunil Grover", "Kiku Sharda", "Chandan Prabhakar", "Ali Asgar"],
      answer: "Sunil Grover"
    },
    {
      question: "Who is the American comedian known for his self-deprecating humor and neurotic persona?",
      options: ["Woody Allen", "Jerry Seinfeld", "Larry David", "Lewis Black"],
      answer: "Woody Allen"
    },
    {
      question: "Which Indian comedian and actor gained fame through YouTube sketches and stand-up specials?",
      options: ["Zakir Khan", "Rahul Subramanian", "Biswa Kalyan Rath", "Kenny Sebastian"],
      answer: "Zakir Khan"
    },
    {
      question: "Who is the American comedian and actress known for her stand-up and roles in 'Saturday Night Live'?",
      options: ["Tina Fey", "Amy Poehler", "Kristen Wiig", "Julia Louis-Dreyfus"],
      answer: "Tina Fey"
    },
    {
      question: "Which Indian comedian is known for his mimicry of politicians and celebrities?",
      options: ["Ahsaan Qureshi", "Raju Srivastav", "Sunil Pal", "Bharti Singh"],
      answer: "Raju Srivastav"
    },
    {
      question: "Who is the American comedian and director of films like 'Blazing Saddles' and 'Young Frankenstein'?",
      options: ["Mel Brooks", "Woody Allen", "Rob Reiner", "Harold Ramis"],
      answer: "Mel Brooks"
    },
    {
      question: "Which Indian comedian hosted 'Comedy Nights Bachao'?",
      options: ["Kapil Sharma", "Krushna Abhishek", "Bharti Singh", "Sudesh Lehri"],
      answer: "Krushna Abhishek"
    },
    {
      question: "Who is the American stand-up comedian and actor known for his physical comedy and roles in 'Ace Ventura'?",
      options: ["Will Ferrell", "Ben Stiller", "Adam Sandler", "Jim Carrey"],
      answer: "Jim Carrey"
    },
    {
      question: "Which Indian comedian is famous for his clean comedy and 'Gangs of Haseepur'?",
      options: ["Anubhav Singh Bassi", "Gaurav Kapoor", "Abhishek Upmanyu", "Jaspreet Singh"],
      answer: "Jaspreet Singh"
    },
    {
      question: "Who is the American comedian and actress known for her roles in 'Bridesmaids' and 'Ghostbusters'?",
      options: ["Melissa McCarthy", "Kristen Wiig", "Kate McKinnon", "Leslie Jones"],
      answer: "Kristen Wiig"
    },
    {
      question: "Which Indian comedian is known for his relatable middle-class observations?",
      options: ["Anubhav Singh Bassi", "Gaurav Kapoor", "Rahul Dua", "Kenny Sebastian"],
      answer: "Gaurav Kapoor"
    },
    {
      question: "Who is the British comedian and actor known for his role as 'Mr. Bean'?",
      options: ["Rowan Atkinson", "Sacha Baron Cohen", "Ricky Gervais", "Steve Coogan"],
      answer: "Rowan Atkinson"
    },
    {
      question: "Which Indian comedian is famous for his unique storytelling and 'Haseen Parchaiyan'?",
      options: ["Zakir Khan", "Rahul Subramanian", "Biswa Kalyan Rath", "Kenny Sebastian"],
      answer: "Zakir Khan"
    },
    {
      question: "Who is the American stand-up comedian known for his energetic delivery and observational humor?",
      options: ["Kevin Hart", "Dave Chappelle", "Chris Rock", "Jerry Seinfeld"],
      answer: "Kevin Hart"
    },
    {
      question: "Which Indian comedian is also a popular actor and director in Marathi cinema?",
      options: ["Johnny Lever", "Kishore Kumar", "Makarand Anaspure", "Bharat Jadhav"],
      answer: "Bharat Jadhav"
    },
    {
      question: "Who is the American comedian and host of 'The Daily Show'?",
      options: ["Stephen Colbert", "Trevor Noah", "Jon Stewart", "John Oliver"],
      answer: "Jon Stewart" // Reverted to Jon Stewart as of current time, as he recently returned.
    },
    {
      question: "Which Indian comedian is known for his satire on Indian politics and society?",
      options: ["Kunal Kamra", "Varun Grover", "Abish Mathew", "Aditi Mittal"],
      answer: "Kunal Kamra"
    },
    {
      question: "Who is the American comedian and actor known for his improvisation skills in 'Whose Line Is It Anyway?'",
      options: ["Drew Carey", "Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
      answer: "Ryan Stiles"
    },
    {
      question: "Which Indian comedian is known for his musical comedy and 'Chai Time with Kenny'?",
      options: ["Kanan Gill", "Biswa Kalyan Rath", "Kenny Sebastian", "Abish Mathew"],
      answer: "Kenny Sebastian"
    },
    {
      question: "Who is the British comedian known for his dry wit and controversial jokes?",
      options: ["Russell Brand", "Jimmy Carr", "Michael McIntyre", "Eddie Izzard"],
      answer: "Jimmy Carr"
    },
    {
      question: "Which Indian comedian is known for his unique blend of stand-up and storytelling with a touch of magic?",
      options: ["Punit Pania", "Sorabh Pant", "Anubhav Singh Bassi", "Anurag Singh"],
      answer: "Punit Pania" // This might be a bit niche, but a reasonable option.
    },
    {
      question: "Who is the American comedian and actor known for his roles in 'Anchorman' and 'Elf'?",
      options: ["Steve Carell", "Will Ferrell", "Paul Rudd", "Seth Rogen"],
      answer: "Will Ferrell"
    },
    {
      question: "Which Indian comedian is known for his appearances on 'The Great Indian Laughter Challenge'?",
      options: ["Sunil Pal", "Raju Srivastav", "Ahsaan Qureshi", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Who is the American comedian and writer known for 'Parks and Recreation' and 'Master of None'?",
      options: ["Aziz Ansari", "Nick Offerman", "Amy Poehler", "Rashida Jones"],
      answer: "Aziz Ansari"
    },
    {
      question: "Which Indian comedian is known for his relatable stories about growing up in a small town?",
      options: ["Rahul Dua", "Manish Tyagi", "Anubhav Singh Bassi", "Varun Thakur"],
      answer: "Anubhav Singh Bassi"
    },
    {
      question: "Who is the American actress and comedian famous for her role as 'Lucille Ball' in 'I Love Lucy'?",
      options: ["Mary Tyler Moore", "Carol Burnett", "Lucille Ball", "Bea Arthur"],
      answer: "Lucille Ball"
    },
    {
      question: "Which Indian comedian is also a co-founder of 'All India Bakchod' (AIB)?",
      options: ["Tanmay Bhat", "Rohan Joshi", "Ashish Shakya", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Who is the American comedian and actress known for her roles in 'Ghostbusters' and 'Spy'?",
      options: ["Melissa McCarthy", "Kristen Wiig", "Maya Rudolph", "Leslie Jones"],
      answer: "Melissa McCarthy"
    },
    {
      question: "Which Indian comedian is known for his clean humor and family-friendly content?",
      options: ["Abhishek Upmanyu", "Gaurav Gupta", "Anubhav Singh Bassi", "Kanan Gill"],
      answer: "Gaurav Gupta"
    },
    {
      question: "Who is the American stand-up comedian and actor known for his distinctive voice and animated roles?",
      options: ["Chris Rock", "Jerry Seinfeld", "Patton Oswalt", "John Mulaney"],
      answer: "Patton Oswalt"
    },
    {
      question: "Which Indian comedian is known for his impressions of various Bollywood actors?",
      options: ["Sanket Bhosale", "Sugandha Mishra", "Jamie Lever", "Rajesh Kumar"],
      answer: "Sanket Bhosale"
    },
    {
      question: "Who is the Canadian comedian and actor known for his role as 'Austin Powers'?",
      options: ["Mike Myers", "Dan Aykroyd", "John Candy", "Eugene Levy"],
      answer: "Mike Myers"
    },
    {
      question: "Which Indian comedian is famous for his stand-up specials like 'Haq Se Single'?",
      options: ["Kanan Gill", "Biswa Kalyan Rath", "Zakir Khan", "Kenny Sebastian"],
      answer: "Zakir Khan"
    },
    {
      question: "Who is the American comedian and actress known for her political humor and show 'Full Frontal'?",
      options: ["Ellen DeGeneres", "Chelsea Handler", "Samantha Bee", "Wanda Sykes"],
      answer: "Samantha Bee"
    },
    {
      question: "Which Indian comedian is known for his unique Parsi humor and character 'Cyrus Broacha'?",
      options: ["Boman Irani", "Cyrus Broacha", "Perizaad Zorabian", "Farah Khan"],
      answer: "Cyrus Broacha"
    },
    {
      question: "Who is the American stand-up comedian and actor known for his special 'Killing Them Safely'?",
      options: ["Bill Burr", "Louis C.K.", "Dave Chappelle", "Ricky Gervais"],
      answer: "Bill Burr"
    },
    {
      question: "Which Indian comedian is known for his corporate humor and 'Corporate Humour' special?",
      options: ["Atul Khatri", "Manish Tyagi", "Punit Pania", "Sundeep Sharma"],
      answer: "Atul Khatri"
    },
    {
      question: "Who is the British comedian and actor known for his roles in 'Fawlty Towers' and 'A Fish Called Wanda'?",
      options: ["Rowan Atkinson", "John Cleese", "Ricky Gervais", "Stephen Fry"],
      answer: "John Cleese"
    },
    {
      question: "Which Indian comedian is known for his relatable take on Indian parenting?",
      options: ["Sorabh Pant", "Anubhav Singh Bassi", "Gaurav Kapoor", "Anurag Singh"],
      answer: "Sorabh Pant"
    },
    {
      question: "Who is the American comedian and actress known for her role as 'Phoebe Buffay' in 'Friends'?",
      options: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow", "Debra Messing"],
      answer: "Lisa Kudrow"
    },
    {
      question: "Which Indian comedian is also a successful film actor, often seen in comedic roles?",
      options: ["Boman Irani", "Arshad Warsi", "Sanjay Mishra", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Who is the American stand-up comedian known for his dry wit and intellectual humor?",
      options: ["Mitch Hedberg", "Steven Wright", "Demetri Martin", "Todd Barry"],
      answer: "Steven Wright"
    },
    {
      question: "Which Indian comedian is known for his stand-up specials and appearances on 'Comicstaan'?",
      options: ["Abhishek Upmanyu", "Rahul Subramanian", "Kanan Gill", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Who is the American comedian and actress known for her role as 'Leslie Knope' in 'Parks and Recreation'?",
      options: ["Tina Fey", "Amy Poehler", "Kristen Wiig", "Melissa McCarthy"],
      answer: "Amy Poehler"
    },
    {
      question: "Which Indian comedian is known for his clean, observational comedy about daily life?",
      options: ["Anubhav Singh Bassi", "Rahul Dua", "Gaurav Gupta", "Nishant Tanwar"],
      answer: "Gaurav Gupta"
    },
    {
      question: "Who is the British comedian known for his sharp wit and panel show appearances?",
      options: ["Frankie Boyle", "Russell Howard", " Dara Ó Briain", "Jack Dee"],
      answer: "Dara Ó Briain"
    },
    {
      question: "Which Indian comedian is known for his relatable takes on engineering and IT life?",
      options: ["Biswa Kalyan Rath", "Kanan Gill", "Rahul Subramanian", "Kenny Sebastian"],
      answer: "Biswa Kalyan Rath"
    },
    {
      question: "Who is the American comedian and host of 'The Late Show with Stephen Colbert'?",
      options: ["Jimmy Fallon", "Seth Meyers", "James Corden", "Stephen Colbert"],
      answer: "Stephen Colbert"
    },
    {
      question: "Which Indian comedian is known for his political satire and character 'Mastram'?",
      options: ["Sanjay Rajoura", "Varun Grover", "Raghav Mandava", "Kunal Kamra"],
      answer: "Sanjay Rajoura"
    },
    {
      question: "Who is the American comedian and actor known for his roles in 'Rush Hour' and 'Friday'?",
      options: ["Chris Tucker", "Kevin Hart", "Dave Chappelle", "Eddie Murphy"],
      answer: "Chris Tucker"
    },
    {
      question: "Which Indian comedian is known for his mimicry of Bollywood villains?",
      options: ["Johnny Lever", "Raju Srivastav", "Bharti Singh", "Jamie Lever"],
      answer: "Johnny Lever"
    },
    {
      question: "Who is the American comedian and actor known for his role as 'Michael Scott' in 'The Office'?",
      options: ["Rainn Wilson", "John Krasinski", "Steve Carell", "Ed Helms"],
      answer: "Steve Carell"
    },
    {
      question: "Which Indian comedian is known for his musical parodies and stand-up specials?",
      options: ["Kenny Sebastian", "Kanan Gill", "Abish Mathew", "Biswa Kalyan Rath"],
      answer: "Kenny Sebastian"
    },
    {
      question: "Who is the American comedian and television personality known for 'The Ellen DeGeneres Show'?",
      options: ["Oprah Winfrey", "Ellen DeGeneres", "Rosie O'Donnell", "Wendy Williams"],
      answer: "Ellen DeGeneres"
    },
    {
      question: "Which Indian comedian is known for his unique delivery style and 'The Storyteller'?",
      options: ["Zakir Khan", "Anubhav Singh Bassi", "Gaurav Kapoor", "Rahul Dua"],
      answer: "Zakir Khan"
    },
    {
      question: "Who is the British comedian and actor known for his character 'Ali G'?",
      options: ["Ricky Gervais", "Russell Brand", "Sacha Baron Cohen", "James Corden"],
      answer: "Sacha Baron Cohen"
    },
    {
      question: "Which Indian comedian is known for his observations on relationships and urban life?",
      options: ["Abhishek Upmanyu", "Kanan Gill", "Biswa Kalyan Rath", "Rahul Subramanian"],
      answer: "Abhishek Upmanyu"
    },
    {
      question: "Who is the American comedian and actress known for her roles in 'Saturday Night Live' and 'Mean Girls'?",
      options: ["Tina Fey", "Amy Poehler", "Maya Rudolph", "Kristen Wiig"],
      answer: "Tina Fey"
    },
    {
      question: "Which Indian comedian is also a motivational speaker?",
      options: ["Munawar Faruqui", "Agrima Joshua", "Manish Tyagi", "Piyush Sharma"],
      answer: "Manish Tyagi"
    },
    {
      question: "Who is the American comedian and actor known for his role in 'The Hangover' series?",
      options: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Justin Bartha"],
      answer: "Zach Galifianakis"
    },
    {
      question: "Which Indian comedian is known for his crowd work and spontaneous humor?",
      options: ["Rohan Joshi", "Aditi Mittal", "Varun Thakur", "Anubhav Singh Bassi"],
      answer: "Varun Thakur"
    },
    {
      question: "Who is the American comedian and actor known for his stand-up specials and roles in 'Coming to America'?",
      options: ["Richard Pryor", "Eddie Murphy", "Dave Chappelle", "Chris Rock"],
      answer: "Eddie Murphy"
    },
    {
      question: "Which Indian comedian is known for his clean, observational comedy and 'KalMainUdaTha'?",
      options: ["Gaurav Gupta", "Anubhav Singh Bassi", "Rahul Dua", "Jaspreet Singh"],
      answer: "Gaurav Gupta"
    },
    {
      question: "Who is the British comedian and director known for 'The Office' (UK) and 'Extras'?",
      options: ["Stephen Merchant", "Ricky Gervais", "Karl Pilkington", "Jonathan Ross"],
      answer: "Ricky Gervais"
    },
    {
      question: "Which Indian comedian is known for his satirical news commentary and show 'The Week That Wasn't'?",
      options: ["Cyrus Broacha", "Kunal Vijayakar", "Rajdeep Sardesai", "Barkha Dutt"],
      answer: "Cyrus Broacha"
    },
    {
      question: "Who is the American comedian and actor known for his role as 'Dwight Schrute' in 'The Office'?",
      options: ["Steve Carell", "John Krasinski", "Rainn Wilson", "Ed Helms"],
      answer: "Rainn Wilson"
    },
    {
      question: "Which Indian comedian is known for his unique blend of dark humor and social commentary?",
      options: ["Munawar Faruqui", "Kunal Kamra", "Varun Grover", "Abhishek Upmanyu"],
      answer: "Munawar Faruqui"
    },
    {
      question: "Who is the American comedian and actress known for her sketch comedy work on 'MADtv' and 'Key & Peele'?",
      options: ["Nicole Sullivan", "Anjelah Johnson", "Jordan Peele", "Keegan-Michael Key"],
      answer: "Anjelah Johnson" // Less prominent than Key & Peele but fits the MADtv criteria.
    },
    {
      question: "Which Indian comedian is known for his character 'Sharma Ji ka Ladka'?",
      options: ["Anubhav Singh Bassi", "Rahul Dua", "Gaurav Kapoor", "Jaspreet Singh"],
      answer: "Anubhav Singh Bassi"
    },
    {
      question: "Who is the American comedian and actor known for his stand-up and sketch comedy, including 'Chappelle's Show'?",
      options: ["Kevin Hart", "Chris Rock", "Dave Chappelle", "Jerry Seinfeld"],
      answer: "Dave Chappelle"
    },
    {
      question: "Which Indian comedian is known for his observational humor on everyday Indian life?",
      options: ["Nishant Tanwar", "Jaspreet Singh", "Gaurav Kapoor", "Anubhav Singh Bassi"],
      answer: "Nishant Tanwar"
    },
    {
      question: "Who is the British comedian and actor known for his character 'Borat'?",
      options: ["Ricky Gervais", "Russell Brand", "Sacha Baron Cohen", "Stephen Fry"],
      answer: "Sacha Baron Cohen"
    },
    {
      question: "Which Indian comedian is known for his energetic stage presence and quick wit?",
      options: ["Kanan Gill", "Biswa Kalyan Rath", "Abish Mathew", "Kenny Sebastian"],
      answer: "Abish Mathew"
    },
    {
      question: "Who is the American comedian and writer known for 'Curb Your Enthusiasm'?",
      options: ["Jerry Seinfeld", "Larry David", "Julia Louis-Dreyfus", "Jason Alexander"],
      answer: "Larry David"
    }
  ]
};

// ✅ Make it globally available for script.js
window.quizData = quizData;
