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
  start: document.getElementById("start"),
  response: document.querySelector("#response"),
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
  },
};

const game = {
  start(quiz) {
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.ask();
  },
  ask(name) {
    if (this.questions.length > 0) {
      this.question = this.questions.pop();
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question, question);
    } else {
      this.gameOver();
    }
  },
  check(event) {
    event.preventDefault();
    const response = view.response.answer.value;
    const words = response.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
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
    view.render(
      view.info,
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    );
    view.teardown();
  },
};

view.start.addEventListener("click", () => game.start(question), false);
view.response.addEventListener("submit", (event) => game.check(event), false);
view.hide(view.response);