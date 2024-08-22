const border = document.getElementById("border");
border.className = "borderStyle";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = "0123456789";
const input = document.getElementById("input");
input.className = "inputStyle";
input.placeholder = "Email";
border.appendChild(input);

const input2 = document.getElementById("input2");
input2.placeholder = "Password";
input2.className = "input2Style";
border.appendChild(input2);

const input3 = document.getElementById("input3");
input3.placeholder = "Number";
input3.className = "input3Style";
border.appendChild(input3);

const button = document.getElementById("button");
button.className = "buttonStyle";
button.innerHTML = "Log In";
border.appendChild(button);

button.addEventListener("click", function eValue() {
  let emValue = input.value;
  if (emValue.includes("@") === false) {
    alert("@ temdegt baihgui baina");
    window.location.reload();
  } else {
    alert("Good email");
  }
  passValue();
  nuValue();
  localStorage.setItem("email", emValue);
  window.location.href = "list.html";
});

function passValue() {
  const pasValue = input2.value;
  let count = 0;
  if (pasValue.length < 8) {
    alert("8aas baga baina");
    count++;
  }
  for (let i = 0; i < pasValue.length; i++) {
    if (alphabet.includes(pasValue[i])) {
      count++;
      alert("Good Password");
      break;
    }
  }
  localStorage.setItem("password", pasValue);
  window.location.href = "list.html";
}

function nuValue() {
  let numValue = input3.value;
  for (let i = 0; i < numValue.length; i++) {
    if (numbers.includes(numValue[i]) == false) {
      return alert("Too bich");
    } else {
      alert("Good");
      break;
    }
  }
  localStorage.setItem("Number", numValue);
  window.location.href = "list.html";
}
// const click = document.getElementById("site");
// function site() {
//
//   // const site1 = localStorage.getItem(click);
//   window.location.href = "/todoList/index.html";
// }

// button.addEventListener("click", function () {
// window.location.href = "/todoList/index.html";
//   console.log(window);
// });
