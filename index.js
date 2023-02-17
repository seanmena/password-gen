let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let areNumbers = "1234567890".split("");
let areSpecial = "!@#$%^&*".split("");
let upperCheck = document.querySelector("#upper");
let lowerCheck = document.querySelector("#lower");
let numCheck = document.querySelector("#number");
let specCheck = document.querySelector("#special");
let button = document.querySelector("#button");
let howmany = document.querySelector("#length");
let passwordOutput = document.querySelector("#password");

function getUpper() {
  if (upperCheck.checked) {
    return true;
  } else {
    return false;
  }
}

function getLower() {
  if (lowerCheck.checked) {
    return true;
  } else {
    return false;
  }
}

function getNum() {
  if (numCheck.checked) {
    return true;
  } else {
    return false;
  }
}

function getSpec() {
  if (specCheck.checked) {
    return true;
  } else {
    return false;
  }
}

function getLength() {
  lengthNum = howmany.value;
  console.log(lengthNum);
}

function generatePass() {
  let password = "";
  let possiblePass = [];

  if (lengthNum < 8) {
    alert("Must be at least 8 characters");
    return null;
  }

  if (lengthNum > 1000000) {
    alert("one million is more than enough pal.");
    return null;
  }

  if (
    getUpper() === !true &&
    (getLower() === !true) & (getNum() === !true) & (getSpec() === !true)
  ) {
    alert("We can't do something with nothing! Please check at least one box.");
    return null;
  }
  if (getUpper() === true) {
    possiblePass = possiblePass.concat(upperCase);
  }

  if (getLower() === true) {
    possiblePass = possiblePass.concat(lowerCase);
  }

  if (getNum() === true) {
    possiblePass = possiblePass.concat(areNumbers);
  }

  if (getSpec() === true) {
    possiblePass = possiblePass.concat(areSpecial);
  }

  while (password.length < Number(lengthNum)) {
    let randomIndex = Math.floor(Math.random() * possiblePass.length);
    let randomChar = possiblePass[randomIndex];
    password += randomChar;
  }

  passwordOutput.textContent = password;
  console.log(password);
  console.log(possiblePass, lengthNum + "working!! hooray!!!");
}

button.addEventListener("click", () => {
  getLength();
  generatePass();
});
