let qword : Array<string> = ["zero"];
let text :Array<string> = [];
let index :number = 0;

class EventName {
    static LOAD:string = "load";
    static CLICK:string = "click";
    static MOUSE_MOVE:string = "mousemove";
}

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
const {webkitSpeechRecognition} : IWindow = <IWindow>window;
const recognition = new webkitSpeechRecognition();

const rec = document.getElementById('speak');

rec.addEventListener(EventName.CLICK, function () {
  recognition.start();
  console.log("recording");
});

let period_split = (text:string): string[] => {
   const period : string= ".";
   return text.split(period);
}

const next = document.getElementById('nextbutton');

next.addEventListener(EventName.CLICK, function () {
  index+=1;
  document.getElementById("question_index").innerHTML=""+index+"";
  document.getElementById("now_question").innerHTML=qword[index];
});

const doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
  let question: string  =  (<HTMLInputElement>document.getElementById("q_area")).value;
  period_split(question).forEach(function (q) {
    console.log(q);
    if(q.length>=2){
      let regexpa =/[^a-zA-Z0-9|| ]/g
      let set_question = q.replace(regexpa,"");
      console.log(set_question);
      qword.push(set_question);
    }
    });
});

const answer = document.getElementById('cansbutton');
answer.addEventListener(EventName.CLICK, function () {
    let msg = new SpeechSynthesisUtterance();
    msg.text = qword[index];
    msg.lang = 'en-US';
    msg.rate = 0.5;
    speechSynthesis.speak(msg);
});

let results_hash: { [key: string]: boolean; } = {};


recognition.lang = 'en-US';
recognition.addEventListener('result', function(event){
  let text: string= event.results.item(0).item(0).transcript;
  console.log(text);
  if(text==qword[1]){
    document.getElementById("result").innerHTML="<li class='fa fa-circle-o'>Correct</li>";
    results_hash[qword[index]] = true;
  }else{
      document.getElementById("result").innerHTML="<li class='fa fa-circle-o'>Correct</li>";
      results_hash[qword[index]] = false;
  }
}, false);
