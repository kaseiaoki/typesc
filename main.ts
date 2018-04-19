const  d1 = document.getElementById('output_area');

class text_write {
  output_text: string;
  text_index: number;
  constructor(inputs: string) {
     this.output_text = inputs+"\r";
   }
   output() {
    console.log(this.output_text);
    d1.insertAdjacentHTML('afterend', this.output_text);
  }
}
enum hx{
    h2,
    h3,
    h4,
    h5,
    h2_alt,
}

const hxs :Array<string>= ["\\．","\\((\\d+)\\)","[①-⑩]+","^・","\\．\\d*ー"];
class EventName {
    static LOAD:string = "load";
    static CLICK:string = "click";
    static MOUSE_MOVE:string = "mousemove";
    static ON_MouseUp:string = "onMouseOut"
}

const add_tags = (splited :Array<string>)=>{
  let add_tag_text : string;
  splited.forEach(text => {
      if(text.match(hxs[hx.h2])!=null){
        text=bar_case_find(text)
        if(text!=null){
          add_tag_text+=text;
        }else{
          add_tag_text +="<h2>"+text+"</h2>";
        }
      }else if(text.match(hxs[hx.h3])!=null){
        add_tag_text +="<h3>"+text+"</h3>";
      }else if(text.match(hxs[hx.h4])!=null){
        add_tag_text +="<h4>"+text+"</h4>";
      }else{
        add_tag_text +=text+"\r";
      }
  })
    return add_tag_text;
}

const bar_case_find = (text: string) =>{
  let bar = ['-','ー'];
  let count : number = 0;
  bar.forEach(bar =>{
    let result_index =text.indexOf(bar);
    while (result_index !== -1) {
      count++;
      result_index = text.indexOf(bar, result_index + 1);
    }
  })
  // let result_index =text.indexOf('ー');
  // while (result_index !== -1) {
  //   count++;
  //   result_index = text.indexOf('ー', result_index + 1);
  // }
  if(count!==null&&count!==-1){
    switch(count) {
      case 0: text="<h2>"+text+"</h2>" ; return text;
      case 1: text="<h3>"+text+"</h3>"; return text;
      case 2:  text="<h4>"+text+"</h4>"; return text;
      default: return null;
    }
  }
}


const doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
  let input_text : string =  (<HTMLInputElement>document.getElementById("q_area")).value;
  let splited_text : Array<string>= input_text.split(/\r\n|\r|\n/);
  const test=["1.","(1)","①","・1"];
  let  t = new text_write(add_tags(splited_text));
  t.output();
});

const sepa = document.getElementById('sepabutton');
sepa.addEventListener(EventName.CLICK, function () {
  let input_text : string =  (<HTMLInputElement>document.getElementById("q_area")).value;
  let splited_text : Array<string>= input_text.split(/。/);
  // console.log(splited_text);
  console.log(separate_text(splited_text));

  d1.insertAdjacentHTML('afterend', separate_text(splited_text));
  // document.write(separate_text(splited_text))

});
const clear = document.getElementById('clearbutton');
clear.addEventListener(EventName.CLICK, function () {
   let area_text =  (<HTMLInputElement>document.getElementById("q_area"));
   area_text.value = "";
});

class sentence_block{
  block: Array<string>;
  sentence: string;
  document: string;
  break_mark: string;
  htag: string;
  constructor(){
    this.document="<h2> </h2>\n";
    this.break_mark="\n\n";
    this.block=["\n"];
    this.htag = "<h2> </h2>"
  }
  spush(s:string){
    this.block.push(s);
    if(this.block.length%3==0) {
      this.block.push("。"+this.break_mark);
      this.document=this.block.join("");
    }else if(this.block.length%7==0){
      console.log(this.block.length);
      this.block.push(this.break_mark);
      this.block.push(this.htag);
      this.block.push(this.break_mark);

    }
  }
}

const separate_text = (result: Array<string>) =>{
  let sb = new sentence_block();
  result.forEach(sentence =>{sb.spush(sentence);})
  return sb.htag+sb.document;
}

enum tasks{
  hero,
  break,
  marking,
  photo,
  category,
}
class notifications {
  notification: HTMLElement;

  constructor() {
    this.notification = document.getElementById("done_notification");
  }
   in_visible(){
     let style = this.notification.style;
     style.visibility = 'hidden';
     let checks =  document.getElementsByName("done");
     checks[string_index[tasks.hero]].checked=false;
     checks[string_index[tasks.break]].checked=false;
     checks[string_index[tasks.marking]].checked=false;
     checks[string_index[tasks.photo]].checked=false;
     checks[string_index[tasks.category]].checked=false;
  }
  visible(){
    let style = this.notification.style;
    style.visibility = 'visible';
  }
}

const delete_notification = document.getElementById('delete-button');
delete_notification.addEventListener(EventName.CLICK, function () {
    let dn = new notifications();
    dn.in_visible();
});

const string_index = ['0','1','2','3','4','5']

const task_d = document.getElementById('task_done');
task_d.addEventListener(EventName.CLICK, function () {
  let checks =  document.getElementsByName("done");
  console.log(checks[string_index[tasks.hero]].checked);
  if(checks[string_index[tasks.hero]].checked==true&&checks[string_index[tasks.break]].checked==true&&checks[string_index[tasks.marking]].checked==true
    &&checks[string_index[tasks.photo]].checked==true&&checks[string_index[tasks.category]].checked==true){
    let an = new notifications();
    an.visible();
  }
});

// var filename_ex="url".match(".+/(.+?)$")[1]
// var filename_ex="url".match(".+/(.+?)\.[a-z]+$")[1]
