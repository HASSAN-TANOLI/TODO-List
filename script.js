const inputfield = document.getElementById("input-field");
const list = document.querySelector(".list");
const btn = document.getElementById("addbtn");

btn.addEventListener("click", () => {
  handleclick();
});

function handleclick() {
  if (inputfield.value === "") {
    alert("you must enter something in order to create todo list");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputfield.value;
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  inputfield.value = "";
  saveData();
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTasks() {
  list.innerHTML = localStorage.getItem("data");
}

showTasks();
