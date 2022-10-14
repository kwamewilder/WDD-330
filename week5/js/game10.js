const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonderwoman", realName: "Dianna Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];
const updateWhen = quiz.length - 1

// View Object
const view = {
  score: document.querySelector("#score strong"),
  question: document.querySelector("#question"),
  result: document.querySelector("#result"),
  info: document.querySelector("#info"),
  start: document.querySelector("#start"),
  response: document.querySelector("#response"),
  timer: document.querySelector("#timer strong"),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element) {
    element.style.display = "block";
  },
  hide(element) {
    element.style.display = "none";
  },
  resetForm() {
    this.response.answer.value = "";
    this.response.answer.focus();
  },
  setup() {
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.result.style.padding = "0";
    this.hide(this.start);
    this.render(this.score, game.score);
    this.render(this.result, "");
    this.render(this.info, "");
    this.resetForm();
  },
  teardown() {
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
    this.result.style.padding = "10px";
  },
};

const game = {
  start(quiz) {
    console.log("start() invoked");
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.secondsRemaining = 20;
    this.timer = setInterval(this.countdown, 1000);
    this.ask();
  },
  countdown() {
    game.secondsRemaining--;
    view.render(view.timer, game.secondsRemaining);
    if (game.secondsRemaining <= 0) {
      game.gameOver();
    }
  },
  ask(name) {
    console.log("ask() invoked");
    if (this.questions.length == updateWhen) {
      view.result.style.padding = "10px";
    }
    if (this.questions.length > 0) {
      this.question = this.questions.pop();
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question, question);
    } else {
      this.gameOver();
    }
  },
  check(event) {
    console.log("check(event) invoked");
    event.preventDefault();
    const response = view.response.answer.value;
    const words = response.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }

    const answer = this.question.realName;
    if (words.join(" ") === answer) {
      view.render(view.result, "Correct!", { class: "correct" });
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `Wrong! The correct answer was ${answer}`, {
        class: "wrong",
      });
    }
    view.resetForm();
    this.ask();
  },
  gameOver() {
    console.log("gameOver() invoked");
    view.render(
      view.info,
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    );
    view.teardown();
    clearInterval(this.timer);
  },
};

view.start.addEventListener("click", () => game.start(quiz), false);
view.response.addEventListener("submit", (event) => game.check(event), false);
view.hide(view.response);
