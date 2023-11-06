const inputbox = document.querySelector(".inputbox");
const list = document.querySelector(".list");
const form = document.querySelector("form");
const arr = [];

form.onsubmit = function (e) {
  e.preventDefault();
  Add();
};

function Add() {
  if (inputbox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list.appendChild(li);

    const icon1 = document.createElement("i");
    icon1.className = "fa-solid fa-trash";
    li.appendChild(icon1);

    //local-atmaq
    arr.push(li.textContent);
    localStorage.setItem("todo", JSON.stringify(arr)); //local-a yazdirmaq
    console.log(JSON.parse(localStorage.getItem("todo")));

    icon1.onclick = () => {
      li.remove();
      const liIndex = arr.indexOf(li.textContent);
      arr.splice(liIndex, 1);
      localStorage.setItem("todo", JSON.stringify(arr));
    };
    inputbox.value = "";
  }
}
