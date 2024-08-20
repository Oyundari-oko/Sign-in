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
});

function passValue() {
  // for (let i = 0; i < pasValue.length; i++) {
  const pasValue = input2.value;
  let count = 0;
  if (pasValue.length < 8) {
    // alert("8aas deesh useg, too, temdegt bich");
    alert("8aas baga baina");
    count++;
    // alert("Great Password");
  }
  // else {

  // }
  for (let i = 0; i < pasValue.length; i++) {
    if (alphabet.includes(pasValue[i])) {
      count++;
      alert("Good Password");
      break;
    }
  }
}

function nuValue() {
  let numValue = input3.value;
  let count = 0;
  if (numValue.length < 8) {
    alert("8-aas baga baina");
    count++;
  }
  for (let i = 0; i < numValue.length; i++) {
    if (numValue.includes(alphabet[i]) === false) {
      alert(" useg bish too bicheerei eswel 8-aas deesh too bicheerei");
      break;
    } else {
      alert("Bolj baina");
      window.location.reload();
      break;
    }
  }
}

//  const function window() {
//   window.location.href = "/todoList/list.html";
// }
