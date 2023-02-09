"use strict";
const input = document.getElementById("todoinput");
const btn = document.getElementById("btn");
const form = document.querySelector("form");
const list = document.getElementById('todolist');
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    newLI.append(newTodo);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    input.value = '';
}
form.addEventListener("submit", handleSubmit);
