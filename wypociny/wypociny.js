document.getElementById("sidebar").onmouseover = function() {mouseOver()};
document.getElementById("sidebar").onmouseout = function() {mouseOut()};
document.getElementById("home").style.visibility = "hidden";
document.getElementById("about").style.visibility = "hidden";
document.getElementById("projects").style.visibility = "hidden";
document.getElementById("gallery").style.visibility = "hidden";
document.getElementById("contact").style.visibility = "hidden";
document.getElementById("toys").style.visibility = "hidden";

function mouseOver() 
{
  document.getElementById("home").style.visibility = "visible";
  document.getElementById("about").style.visibility = "visible";
  document.getElementById("projects").style.visibility = "visible";
  document.getElementById("gallery").style.visibility = "visible";
  document.getElementById("contact").style.visibility = "visible";
  document.getElementById("toys").style.visibility = "visible";
}

function mouseOut() 
{
  document.getElementById("home").style.visibility = "hidden";
  document.getElementById("about").style.visibility = "hidden";
  document.getElementById("projects").style.visibility = "hidden";
  document.getElementById("gallery").style.visibility = "hidden";
  document.getElementById("contact").style.visibility = "hidden";
  document.getElementById("toys").style.visibility = "hidden";
}

let chatInput = document.getElementById("chatInput");
let sendButton = document.getElementById("sendButton");
let messageBox = document.getElementById("messageBox");
let arrChat = [];
document.getElementById("sendButton").addEventListener("click", addMessage);
//document.getElementById("messageBox").addEventListener("click", addMessage);
//poniższy fragment przeniesiony do oddzielnego pliku js
/* let picFront = 1;
let arrPic = [[],[]];
let picCount = document.querySelector("img");
console.log(picCount); */





function printChat()
{
  for (i = 0; i < arrChat.length; i++)
  {
    messageBox.innerHTML += "<p class='post'>" + arrChat[i] + "</p>";
  }
}

function addMessage()
{
  clearMessageBox();
  arrChat.push(chatInput.value);
  printChat();
  clearInput();
  //console.log(arrChat);
}

function clearInput()
{
  chatInput.value = "";
}

function clearMessageBox()
{
  messageBox.innerHTML = "";
}

