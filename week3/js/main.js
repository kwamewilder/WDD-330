// Quiz Ninja Project 5
const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
  ];
  
  const game = {
    start(quiz) {
      this.questions = [...quiz];
      this.score = 0;
      // main game loop
      for (const question of this.questions) {
        this.question = question;
        this.ask();
      }
      // end of main game loop
      this.gameOver();
    },
    ask() {
      const question = `What is ${this.question.name}'s real name?`;
      const response = prompt(question);
      const words = response.split(" ");
  
      for (let i = 0; i < words.length; i++) {
        words[i] =
          words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
      }
  
      this.check(words.join(" "));
    },
    check(response) {
      const answer = this.question.realName;
      if (response === answer) {
        alert("Correct!");
        this.score++;
      } else {
        alert(`Wrong! The correct answer was ${answer}`);
      }
    },
    gameOver() {
      alert(
        `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
      );
    },
  };
  
  document.getElementById("game5").addEventListener("click", function() {game.start(quiz)});