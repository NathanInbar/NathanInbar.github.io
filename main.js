var max = 1920//max x pos
var min = 1080//max y pos
//small symbols can show in higher layer, but not vice versa
var foreground = ['@','#','+','*','\'',',','.']
var midground = ['+','*','\'',',','.']
var background = ['\'',',','.']
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
  
  function randomChar(){
    let letters = "@#+*',.";
    let len = letters.length;
    let char =  letters[Math.floor(Math.random()*len)]; 
    return char;
  }
  
  function show(){
      let el = document.getElementById("divs");
      let element = document.createElement("div");
      element.className = "drops";
      element.innerHTML = randomChar();
      element.style.color = "#FFFFFF";//randomColor();
      element.style.fontsize =  Math.floor(Math.random()*50) + 10 +"px";
      element.style.top = -50+"px";
      element.style.left = Math.floor(Math.random()*1400)+"px";
      element.style.animationDuration = Math.floor(Math.random()* 10) + 5+"s";
      element.style.animationIterationCount = "infinite";
      element.style.animationDelay = Math.floor(Math.random()* 15) +"s";
      element.style.zIndex = Math.floor(Math.random()*20);
      el.appendChild(element);
  }
  
  
  function call(){
    for(let i = 0; i < 300; i++){
      show();
    }
  }