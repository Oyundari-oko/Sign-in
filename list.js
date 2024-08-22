const input = document.getElementById("input");
input.className = "inputStyle";
input.placeholder = "Ymar negn ug, ugvvlber bichne uu?";
const button = document.getElementById("button");
button.className = "buttonStyle";
const input2 = document.createElement("input");
const great = document.createElement("button");
// const nDiv = document.getElementById("nClass");
// nDiv.class
const nStyle = document.createElement("div");
nStyle.className = "stylee";
const email = localStorage.getItem("email");
const el = document.createElement("div");
el.innerHTML = email;
nStyle.appendChild(el);
document.body.appendChild(nStyle);

const password = localStorage.getItem("password");
const pass = document.createElement("div");
pass.innerHTML = password;
nStyle.appendChild(pass);
document.body.appendChild(nStyle);

const number = localStorage.getItem("Number");
const num = document.createElement("div");
num.innerHTML = number;
nStyle.appendChild(num);
document.body.appendChild(nStyle);

button.addEventListener("click", function text() {
  const newElement2 = document.createElement("div");
  newElement2.style.display = "flex";
  newElement2.style.justifyContent = "center";
  newElement2.style.gap = "10px";
  const newElement = document.createElement("div");
  newElement.className = "Style";
  let text = input.value;
  const todo = document.createElement("div");
  todo.innerHTML = text;
  newElement.appendChild(todo);
  newElement.appendChild(newElement2);
  // newElement.appendChild(date);

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formatter.format(date);
  date.className = "dateStyle";
  const nElement = document.createElement("div");
  nElement.className = "dateStyle ";
  nElement.innerHTML = formattedTime;
  newElement2.appendChild(nElement);
  if (input.value === "") {
    alert("ym biceegui bnaa");

    return input;
  }

  input.value = "";
  const Nclass = document.getElementById("myId");
  Nclass.style.overflow = "scroll";
  Nclass.appendChild(newElement);

  const newButton = document.createElement("button");
  newButton.innerHTML = "delete";
  newElement2.appendChild(newButton);
  newButton.className = "towchluur";

  newButton.addEventListener("click", function () {
    newElement.remove();
  });

  const elementEdit = document.createElement("button");
  elementEdit.innerHTML = "edit";
  elementEdit.className = "edit";
  newElement2.appendChild(elementEdit);

  elementEdit.addEventListener("click", function () {
    nElement.className = "dateStyle2";

    newElement2.appendChild(input2);
    newElement2.appendChild(newButton);
    newElement2.appendChild(elementEdit);
    newElement.appendChild(newElement2);

    const done = document.createElement("button");
    done.innerHTML = "done";
    done.className = "done";
    input2.value = todo.innerHTML;
    newElement2.appendChild(done);
    done.addEventListener("click", function () {
      todo.innerHTML = input2.value;
      input2.remove();
      // newButton.remove();
      done.remove();
      // elementEdit.remove();
    });
  });
});

// const text = document.getElementById("title");
// text.className = "tetxStyle";
// const sigIn = "";
