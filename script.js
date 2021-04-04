var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var counterEle = document.createElement("div");
var count = 0
var pages = [
  {
    title:"Home",
    content:"Home"
  },
  {
    title:"About",
    content:"about",
    name: "Ethan"
  },
  {
    title:"Interact",
    content:"Interact"
  }
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function home(){
  display.innerHTML="";
  var home_heading = document.createElement("h1");
  home_heading.innerHTML="Home";
  display.appendChild(home_heading);
}

function about(){
  display.innerHTML="";
  var about_header = document.createElement("h1");
  about_header.innerHTML="About";
  display.appendChild(about_header);
  var about_name = document.createElement("h3");
  about_name.innerHTML="Ethan";
  display.appendChild(about_name);
}

function interact(){
  display.innerHTML="";
  var interact_header = document.createElement("h1");
  interact_header.innerHTML = "Interact";
  display.appendChild(interact_header);
  var number_button = document.createElement("button");
  number_button.addEventListener("click", function(){
    number(count = count + 1);
  })
  number_button.innerHTML="Increase Counter";
  counterEle.innerHTML = "Counter: " + 0;
  display.appendChild(number_button);
  display.appendChild(counterEle);
}

function number(input, clicked){
  counterEle.innerHTML = "Counter: " + count;
}

function writeStuff(stuff, pg){
  if(pg == "Home"){
    home();
  }else if (pg == "About"){
    about();
  }else if (pg == "Interact"){
    interact();
  }
}


writeStuff(pages[0].content, "Home");