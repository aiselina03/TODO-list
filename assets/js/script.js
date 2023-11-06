const inputbox = document.querySelector(".inputbox");
const list = document.querySelector(".list");
const form = document.querySelector("form");

form.onsubmit = function (event) {
    event.preventDefault();
    Add();
};

function Add() {
    if (inputbox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        list.appendChild(li);
       
        const icon1 = document.createElement('i');
        icon1.className = "fa-solid fa-trash";
        li.appendChild(icon1);
        icon1.onclick = () => {
            li.remove();
        };

        const arr = JSON.parse(localStorage.getItem("todo")) || [];
        arr.push(inputbox.value);
        localStorage.setItem("todo", JSON.stringify(arr));

        inputbox.value = '';

        console.log(JSON.parse(localStorage.getItem("todo")));
    }
}
