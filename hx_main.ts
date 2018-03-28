class text_write {
  output_text: string;
  text_index: number;
  constructor(inputs: string) {
     this.output_text = inputs+"\r";
   }
   output() {
    console.log(this.output_text);
  }
}
enum hx{
    h2,
    h3,
    h4,
    h5
}

const hxs :Array<string>= ["\\．","\\((\\d+)\\)","[①-⑩]+","・+"];
class EventName {
    static LOAD:string = "load";
    static CLICK:string = "click";
    static MOUSE_MOVE:string = "mousemove";
}
const add_tags = (splited :Array<string>)=>{
  let add_tag_text : string;
  splited.forEach(text => {
      if(text.match(hxs[hx.h2])!=null){
        add_tag_text +="<h2>"+text+"</h2>";
      }else if(text.match(hxs[hx.h3])!=null){
        add_tag_text +="<h3>"+text+"</h3>";
      }else if(text.match(hxs[hx.h4])!=null){
        add_tag_text +="<h4>"+text+"</h4>";
      }else{
        add_tag_text +=text+"\r";
      }
      // }else if(text.match(hxs[hx.h5])!=null){
      //   text="<h5>"+text+"</h5>";
      // }
  })
    return add_tag_text;
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
});

const separate_text = (result: Array<string>) =>{
  let break_mark :string="\n\n";
  let document: string=" ";
  let block: string=" ";
  let sentence_count : number = 0;
  let block_count : number = 0;

  result.forEach(sentence =>{
      sentence +="．";
      block += sentence;
      if(sentence_count == 2){
        block += break_mark;
        document += block;
        block = "";
        sentence_count = 0;
        block_count++;
        if(block_count==2){
          block +="<h2></h2>\n";
          block_count=0;
        }
      }
      sentence_count++;
  })
  return document;
}
