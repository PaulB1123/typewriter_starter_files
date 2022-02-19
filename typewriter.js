"use strict";

window.addEventListener("DOMContentLoaded", getTheText);
let mytext = document.querySelector("#typewriter").textContent;
let divtext = document.querySelector("#typewriter");
let i = 0;

let typekey1 = document.querySelector("#typekey1");
let typespace = document.querySelector("#typespace");

function getTheText() {
  console.log(mytext);
  setUp();
}

function setUp() {
  console.log("setUp");
  var myArray = mytext.split("");
  console.log(myArray);
  initiateTextLoop();
}

function initiateTextLoop() {
  divtext.innerHTML = "";
  //   let firstChar = mytext.charAt(0);
  //   let restOfTheChar = mytext.substring(0, 1);
  //   console.log(firstChar);
  //   //   console.log(restOfTheChar);
  //   //   divtext.innerHTML = firstChar;
  theFunctionLoop();
}

function theFunctionLoop() {
  //   //   let firstChar = my
  loop();
  //   let restOfTheChar = mytext.substring(0, 1);
  //   for (restOfTheChar = 0; restOfTheChar > 0; restOfTheChar++) {
  //     console.log(restOfTheChar);
  //   }
  //   //   textLoop();
}

// function textLoop() {}

function loop() {
  divtext.innerHTML = divtext.innerHTML + mytext[i];

  if (mytext[i] === " ") {
    typespace.cloneNode(true).play();
  } else {
    typekey1.cloneNode(true).play();
  }

  i++;
  if (i < mytext.length) {
    setTimeout(loop, 100);
  }
}
