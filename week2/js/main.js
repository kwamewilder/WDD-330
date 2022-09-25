// Quiz Ninja Project 2
document.getElementById("prompt").addEventListener("click", () => {
  const question = "what is Superman's real name?";
  const answer = prompt(question);
  if (answer === "") {
    alert("You did not enter an answer");
  } else {
    alert(`You answered ${answer}`);
  }
});

// Quiz Ninja Project 3
document.getElementById("game").addEventListener("click", () => {
  const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
  ];
  let score = 0;
  for (const [question, answer] of quiz) {
    const response = prompt(question);

    if (response !== "") {
      const words = response.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] =
          words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
      }

      if (words.join(" ") === answer) {
        alert("Correct!");
        score++;
      } else {
        alert(`Wrong! The correct answer was ${answer}`);
      }
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }
  alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
});

// Quiz Ninja Project 4
const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"],
];

function start(quiz) {
  let score = 0;

  // main game loop
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question) {
    return prompt(question);
  }

  function check(response, answer) {
    if (response !== "") {
      const words = response.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] =
          words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
      }

      if (words.join(" ") === answer) {
        alert("Correct!");
        score++;
      } else {
        alert(`Wrong! The correct answer was ${answer}`);
      }
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver() {
    alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
  }
}

document.getElementById("gameRev").addEventListener("click", function () {
  start(quiz);
});
