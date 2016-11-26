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
      answers: ["Saxophonist", "Clarinetist", "Cellist", "Pianist"],
      correct: 3
    },
    // 8th question
    {
      question: "Bon Jovi\'s “Livin\' on a Prayer” is known for using this audio effect: ",
      answers: ["Telephone", "Autotune", "Talkbox", "Reverb reverb"],
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
  // Check whether submitted answer is correct
  // Below, currentQuestion and "correct" are just numbers.
  function checkAnswer (userAnswer, currentQuestion) {
     if ( userAnswer == quiz[currentQuestion].correct ) {
        // Show correctMessage
        // Fix rest of this later.
        document.write(correctMessage);
     } else {
        // Show incorrectMessage
        document.write(incorrectMessage);
     }
}

  // Total number of questions -- it's an array, so do quiz.length
  var totalQuestions = quiz.length;

  // Make sure only one question displays at a time
  // Note: currentQuestion is a number.
  var currentQuestion = 0;
  
  // Display the first question
  var displayQuestion = function (num) {
    $('.question-name').text(quiz[num].question);
  }
  // Display the answers in similar way

  // Advance to the next question from the correctMessage / incorrectMessage screen
  
  // RENDER PAGE FUNCTION
  var renderPage = function(question, answer) {
      var quizHTML = question.answer.map(function(answer, correct, index) {
          var html = "";
          html += '<div class="answer-feedback">' + '<li data-index="' + index +'">'
          if (answers.correct) {
              html += '<span class="correct">' + correctMessage + '</span>'; 
          } else {
              html += '<span class="incorrect">' + incorrectMessage + '</span>'; 
          }
          html += '</div>' + '</li>';
          return html;    
      });
      element.html(quizHTML);
  };

  // SELECTORS
  // Select what we don't want to see on the welcome page: questions and results
  $('#questions').hide();
  $('#results').hide();
  $('#answer-feedback').hide();
// EVENT LISTENERS
// Submit button event listener
// On the start button, when there is a click, run this function.
$('#start').click(function () {
    $('#welcome').hide();
    $('#next').hide();
    $('#reset').hide();
    $('#questions').show();
    displayQuestion(currentQuestion);
})

// On the submit button, when there is a click, run this function.
$('#submit').click(function (e) {
  // Without preventDefault, it refreshes the page. 
    e.preventDefault();
    $('#answer-feedback').show();

})

// On the "restart quiz" button, go back to the first question. 
$('#reset').click(function () {
    $('#welcome').show();
    $('#next').hide();
    $('#reset').hide();
    $('#questions').hide();
    console.log($('#reset'));
})
  

// Correct answer listener
   
});