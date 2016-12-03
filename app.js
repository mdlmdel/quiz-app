$(document).ready(function () {
  var quiz = [ 
    // Below are the questions that will be included in the quiz app. 
    // Properties of questions: Question, possible answers, correct answer.
    // 1st question
    {
      question: "What is the stage name of Martin Karl Sandberg?",
      answers: ["Andy Samberg", "Steve Sandberg", "Max Martin", "Carl Sandburg"],
      correct: 2
    }, 
    // 2nd question
    {
      question: "Who are the members of The Eurythmics?",
      answers: ["Annie Lennox and David A. Stewart", "Sting", "The Weeknd", "Grace Slick, Paul Kantner, Marty Balin, Jack Casady, Spencer Dryden"],
      correct: 0
    },
    // 3rd question
    {
      question: "Which of the following has a rumored synchronization effect between movie and album?",
      answers: ["Bon Jovi\'s Slippery When Wet and Titanic", "Pink Floyd\'s Dark Side of the Moon and The Wizard of Oz", "Sia\'s The Greatest and Ali", "AC/DC\'s The Razors Edge and Top Gun" ],
      correct: 1
    },
    // 4th question
    {
      question: "The musical Rent is loosely based on which opera?",
      answers: ["Turandot", "La Traviata", "Rigoletto", "La Boheme"],
      correct: 3
    },
    // 5th question
    {
      question: "Who sings Love on the Brain?",
      answers: ["Britney Spears", "Tina Turner", "Whitney Houston", "Rihanna"],
      correct: 3
    },
    // 6th question
    {
      question: "Which comedian sang Hallelujah by Leonard Cohen as a skit in response to his death and the presidential election results?",
      answers: ["Kate McKinnon", "Seth Myers", "Jimmy Fallon", "Chelsea Handler"],
      correct: 0
    },
    // 7th question
    {
      question: "Hugh Laurie, the star of the TV show House, plays which instrument in his band?",
      answers: ["Saxophone", "Clarinet", "Cello", "Piano"],
      correct: 3
    },
    // 8th question
    {
      question: "Bon Jovi\'s Livin\' on a Prayer is known for using this audio effect: ",
      answers: ["Telephone", "Autotune", "Talkbox", "Reverb"],
      correct: 2
    },
    // 9th question
    {
      question: "The popular Shure SM58 microphone been shown to work in: ",
      answers: ["Zero gravity", "Water", "Oil", "Mud"],
      correct: 0
    },
    // 10th question
    {
      question: "The well-known U87 vocal mic is produced by: ",
      answers: ["Shure", "Blue", "Neumann", "Sennheiser"],
      correct: 2
    }
    ]
    // Message they receive on the screen if they selected the correct answer.
    var correctMessage = [
      "Correct!",
      "Yes!"
    ]
    // Message they receive if their answer is incorrect. 
    var incorrectMessage = [
      "Incorrect",
      "Nope" 
    ]
  
  // Total number of questions -- it's an array, so do quiz.length
  var totalQuestions = quiz.length;

  // Counter
  var counter = 0;
  function increment(){
  score++;
  return score;
}

  // User score
  var score = 0;

  var totalScore = score / totalQuestions;

  // Make sure only one question displays at a time
  // Note: currentQuestion is a number.
  var currentQuestion = 0;

  // Last question
  var lastQuestion = quiz[quiz.length];

  // Display the first question
  var displayQuestion = function (num) {
    $('.question-name').text(quiz[num].question);
  }
  
  // Display score
  var displayMessage = function (message) {
    $('#answer-feedback').text(message);
  }

  // Display totalScore
  var displayScoreMessage = function (message) {
    $('.score').text(message);
  }
  // Pick a phrase on the correctMessage or incorrectMessage from the arrays
  // 
  function getRandomInt() {
    return Math.floor(Math.random() * 2)
}
 
  // Advance to the next question from the correctMessage / incorrectMessage screen
  var nextQuestion = function (currentQuestion) {
    $('.question-name').text(quiz[num++].question);
    for (quiz[num].question = 0; quiz[num].question <= quiz.length; quiz[num++].question++);
  }

  // RENDER ANSWERS AS RADIO BUTTON ELEMENTS
  // Which question am I on? Look at the numbered question handed to us.
  var displayAnswers = function (num) {
      var html = "";
      // Display the answers for this same question reference above.
      // We're trying to run a function against every element of the answers array.
      // Index and map go together
      html += quiz[num].answers.map(function(answer, index) {
        return (
          '<li>' + 
            '<input class="choices" type="radio" name="radios" value="' + 
              index + '" required>' + 
            '<label>' + answer + '</label>' + 
          '</li>'
          )
      })
      // Set the html to the variable declared on line 131 (html)
      console.log(html);
      $('.answers').html(html);
  };

// Remove commas from displayAnswers --> Added
/*  function removeCommas(displayAnswers) {
    while (str.search(",") >= 0) {
        str = (str + "").replace(',', '');
    }
    return str;
};*/
  // Pass what was selected and the correct answer and compare them
  // Also, create a global variable score

  // SELECTORS
  // Select what we don't want to see on the welcome page: questions and results
  $('#questions').hide();
  $('#results').hide();
  $('#answer-feedback').hide();
  $('#next').hide();
// EVENT LISTENERS
// Submit button event listener
// On the start button, when there is a click, run this function.
$('#start').click(function () {
    $('#welcome').hide();
    $('#reset').hide();
    $('#questions').show();
    $('.answers').show();
    displayQuestion(currentQuestion);
    displayAnswers(currentQuestion);
})

// On the submit button, when there is a click, run this function.
$('#submit').click(function (e) {
  // Without preventDefault, it refreshes the page. 
    e.preventDefault();
    // Below, the pseudo selected is checked
    var selected = $('input[name=radios]:checked').val();
    if ($('input[name=radios]:checked').val() == quiz[currentQuestion].correct) {  
      score++;
      /* Note to remember: (currentQuestion + 1) --> Do + 1 to account for 
      how math and arrays work; to account for how arrays work, increment as we go. */
      // The return stops the code from running past that point in the block.
      // return correctMessage;
      displayMessage(correctMessage[getRandomInt()]);
    } 
    else {
    // score; --> Don't need this since it isn't doing anything here.
      displayMessage(incorrectMessage[getRandomInt()]);
    }
    $('#questions').hide();
    $('#quizquestion').hide();
    $('#next').show();
    $('#answer-feedback').show();
})

// Next question.
$('#next').click(function (e) {
  // Without preventDefault, it refreshes the page. 
    e.preventDefault();
    $('#answer-feedback').hide();
    $('#questions').show();
    $('#quizquestion').show();
    $('#next').hide();
    currentQuestion++; 
    if (currentQuestion == quiz.length) {
      // Show Results 
      $('#questions').hide();
      $('#quizquestion').hide();
      $('#results').show();
      $('.score').show();
      $('#reset').show();
      displayScoreMessage(totalScore); // A score is displaying, but it is incorrect. 
    }
    else {
      displayQuestion(currentQuestion);
      displayAnswers(currentQuestion);
    }
})

// On the "restart quiz" button, go back to the first question. 
$('#reset').click(function () {
    $('#welcome').show();
    $('#next').hide();
    $('#reset').hide();
    $('#questions').hide();
    counter = 0;
    currentQuestion = 0;
    score = 0;
    console.log($('#reset'));
})
});