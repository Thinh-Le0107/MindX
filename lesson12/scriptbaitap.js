//C1
const titleH1EL = document.querySelector(".titleH1");
titleH1EL.innerText = 'Đây là nội dung';

//C2
titleH1EL.style.color = 'red';
titleH1EL.style.backgroundColor = 'blue';

//C3
const btnClickEL = document.querySelector(".btnClick");
let isChanged = false;

btnClickEL.addEventListener("click", function () {
  if (isChanged === false) {
    titleH1EL.innerText = "This is content";
    titleH1EL.style.color = "";           
    titleH1EL.style.backgroundColor = "";
    isChanged = true;
  } else {
    titleH1EL.innerText = "Đây là nội dung";
    titleH1EL.style.color = "red";
    titleH1EL.style.backgroundColor = "blue";
    isChanged = false;
  }
});

//C4-C5
const inputContentEL = document.querySelector(".inputContent");
const btnAddEL = document.querySelector(".btnAdd");
const todoListEL = document.querySelector(".todoList");
let listTask = JSON.parse(localStorage.getItem("listTask")) || [];
function renderTasks() {
  todoListEL.innerHTML = "";
  listTask.forEach(function (task) {
    todoListEL.innerHTML += `
      <div style="display: flex; align-items: center; gap: 8px; margin-top: 5px;">
        <input type="checkbox" />
        <span>${task}</span>
      </div>
    `;
  });
}
renderTasks();
btnAddEL.addEventListener("click", function () {
  const text = inputContentEL.value;
  if (text.trim() !== "") {
    listTask.push(text.trim());
    localStorage.setItem("listTask", JSON.stringify(listTask));
    renderTasks();
    inputContentEL.value = "";
  }
});
