const input = document.getElementById("todoinput")! as HTMLInputElement;
const btn = document.getElementById("btn")!;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist");

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = readTodos();

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  // Save to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(todo.text);
  newLI.append(checkbox);
  list?.append(newLI);
}

form.addEventListener("submit", handleSubmit);
