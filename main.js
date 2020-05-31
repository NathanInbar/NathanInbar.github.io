var max = 1920//max x pos
var min = 1080//max y pos

//small symbols can show in higher layer, but not vice versa
var s_fg = "@#+*,."//symbols foreground
var s_mg = "+*,."//symbols midground
var s_bg = "*,."//symbols background

class Agent{
    constructor(s_str){
        // - - -
        let el = document.getElementById("divs");//get divs
        let element = document.createElement("div");//create new div

        element.className = "char-drop";
        element.innerHTML = randomChar(s_str);
        element.style.top = "-50px";//start offscreen
        element.style.left = Math.floor(Math.random()*1400)+"px";
        element.style.animationDelay = Math.floor(Math.random()* 15) +"s";
        element.style.zIndex = Math.floor(Math.random()*20);//layer on the z axis
        if(s_str == s_fg)//if its a foreground agent...
        {
            element.style.fontsize = "40px";
            element.style.animationDuration = "15s"//determines speed
            element.style.color = "#FFFFFF";

        }
        else if(s_str == s_mg)//if its a midground agent...
        {
            element.style.fontsize = "30px";
            element.style.animationDuration = "25s"
            element.style.color = "#919191";
        }
        else if(s_str == s_bg)//if its a background agent...
        {
            element.style.fontsize = "10px";
            element.style.animationDuration = "35s"
            element.style.color = "#4a4a4a";
        }

        el.appendChild(element);

    }
}
// - - -
function randomColor(){
    let colorGen =  "0123456789ABCDEF";
    let len = colorGen.length;
    let color = "#";
    for(let i = 0; i < 6; i++) {
      color += colorGen[Math.floor(Math.random()*len)];
    }
  
    return color;
  }
  
  function randomChar(letters){//picks random char from string
    let len = letters.length;
    let char =  letters[Math.floor(Math.random()*len)]; 
    return char;
  }
  
  function build(s_str){
      let agent = new Agent(s_str)
  }
  
  
  function call(){
    for(let i = 0; i < 100; i++){
        build(s_bg);//build background agents
    }
    for(let i = 0; i < 100; i++){
        build(s_mg);//build midground agents
    }
    for(let i = 0; i < 100; i++){
        build(s_fg);//build foreground agents
    }
    setInterval(update, 33);
  }

  function update(){
    let el = document.getElementById("divs");//get divs
    let pos = el.getBoundingClientRect()
  }