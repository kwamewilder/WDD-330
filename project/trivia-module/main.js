const url = '../questions.json';

fetch(url)
  .then(res => res.json())
  .then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});

// Utility functions
function random(a,b=1) {
// if only 1 argument is provided, we need to swap the values of a and b
  if (b === 1) {
	  [a,b] = [b,a];
  }
  return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
  for (let i = array.length; i; i--) {
      let j = random(i)-1;
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}

// View Object
const view = {
  score: document.querySelector('#score strong'),
  question: document.querySelector('#question'),
  result: document.querySelector('#result'),
  info: document.querySelector('#info'),
  start: document.querySelector('#start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  hiScore: document.querySelector('#hiScore strong'),
  render(target,content,attributes) {
      for(const key in attributes) {
        target.setAttribute(key, attributes[key]);
      }
      target.innerHTML = content;
  },
  show(element){
    element.style.display = 'flex';
  },
  hide(element){
    element.style.display = 'none';
  },
  setup(){
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
    this.render(this.hiScore, game.hiScore());
  },
  teardown(){
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
    this.render(this.hiScore, game.hiScore());
  },
  buttons(array){
    return array.map(value => `<button>${value}</button>`).join('');
  }
};

const game = {
  start(quiz){
    console.log('start() invoked');
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.secondsRemaining = 60;
    this.timer = setInterval( this.countdown , 1000 );
    this.ask();
  },
  countdown() {
    game.secondsRemaining--;
    view.render(view.timer,game.secondsRemaining);
      if(game.secondsRemaining <= 0) {
        game.gameOver();
      }
  },
  ask(question){
    console.log('ask() invoked');
    if(this.questions.length > 2) {
      shuffle(this.questions);
      this.question = this.questions.pop();
      const options = [this.question.option[0], this.question.option[1], this.question.answer];
      shuffle(options);
      const question = `${this.question.question}`;
      view.render(view.question,question);
      view.render(view.response,view.buttons(options));
    }
    else {
      this.gameOver();
    }
  },
  check(event){
    console.log('check(event) invoked');
    const response = event.target.textContent;
    const answer = this.question.answer;
    if(response === answer){
      console.log('correct');
      view.render(view.result,'Correct!',{'class':'correct'});
      let audio = document.getElementById("mySoundClip");
      function pauseAudio() { 
        audio.pause(); 
      }
      function playAudio(){
        audio.play();
      }
      pauseAudio();
      playAudio();
      this.score++;
      view.render(view.score,this.score);
    } else {
      console.log('wrong');
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
      let audio = document.getElementById("wrongAnswer");
      function pauseAudio() { 
        audio.pause(); 
      }
      function playAudio(){
        audio.play();
      }
      pauseAudio();
      playAudio();
    }
    this.ask();
  },
  gameOver(){
    console.log('gameOver() invoked');
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    let audio = document.getElementById("forceSound");
    function pauseAudio() { 
      audio.pause(); 
    }
    function playAudio(){
      audio.play();
    }
    pauseAudio();
    playAudio();
    view.teardown();
    clearInterval(this.timer);
  },
  hiScore(){
    const hi = localStorage.getItem('highScore') || 0;
    if(this.score > hi || hi === 0) {
      localStorage.setItem('highScore',this.score);
      view.render(view.info,'** NEW HIGH SCORE! **');
    }
    return localStorage.getItem('highScore');
  }
}