const question = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
  ];
  
  // View Object
  const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"),
    result: document.getElementById("result"),
    info: document.getElementById("info"),
    render(target, content, attributes) {
      console.log(attributes);
      for (const key in attributes) {
        target.setAttribute(key, attributes[key]);
      }
      target.innerHTML = content;
    },
  };
  
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
      view.render(view.question, question);
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
        view.render(view.result, "Correct!", { class: "correct" });
        alert("Correct!");
        this.score++;
        view.render(view.score, this.score);
      } else {
        view.render(view.result, `Wrong! The correct answer was ${answer}`, {
          class: "wrong",
        });
        alert(`Wrong! The correct answer was ${answer}`);
      }
    },
    gameOver() {
      view.render(
        view.info,
        `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
      );
    },
  };
  
  game.start(question);