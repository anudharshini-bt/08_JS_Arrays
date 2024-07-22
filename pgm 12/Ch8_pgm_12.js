var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  displayQuestion(question1);

  var question2 ={
    question : "What is the largest planet in solarsystem?",
    answers : [
        "Mars",
        "Jupiter",
        "Uranus",
        "Saturn"
    ],
    correctAnswer : "Jupiter"
  };

  var question3 ={
    question :"who wrote Atomic Habit?",
    answers : [
        "James clear",
        "Stephen Covey",
        "Tony Robbins",
        "J.K Rowling"
    ],
    correctAnswer : "James clear"
  };

  var question = [question1,question2,question3];

  questions.forEach(function(question, index) {
    console.log("\nQuestion " + (index + 1) + ":");
    displayQuestion(question);
  })

  console.log("\nDisplaying the second question:");
displayQuestion(questions[1]);