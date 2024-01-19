const plus = document.querySelector(".fa-circle-plus");
const minus = document.querySelector(".fa-circle-minus");
const addTodoBtn = document.querySelector("#addTodoBtn");
const addList = document.querySelector(".addList");
const input = document.getElementById("input");
const list = document.querySelector(".list");

plus.style.display = "block";
minus.style.display = "none";
addList.style.display = "none";

const onClickPlusBtn = () => {
  if (addList.style.display === "none") {
    plus.style.display = "none";
    minus.style.display = "block";
    addList.style.display = "block";
  }
};

const onClickMinusBtn = () => {
  if (addList.style.display === "block") {
    minus.style.display = "none";
    plus.style.display = "block";
    addList.style.display = "none";
  }
};

const onInput = (e) => {
  input.value = e.target.value;
};

let colorIndex = 0;
const colorOptions = [
  "#b6e28f",
  "#f6e988",
  "#cdf7ff",
  "#ffcdcd",
  "#cddeff",
  "#e8cdff",
];
const getColor = () => {
  const color = colorOptions[colorIndex];
  colorIndex = (colorIndex + 1) % colorOptions.length; // 다음 컬러 인덱스 계산
  return color;
};

const onClickAddTodoBtn = () => {
  const newTodo = input;
  if (newTodo.value === "") {
    alert("내용을 입력해주세요.");
  } else {
    const textColor = getColor();
    const todo = document.createElement("div");
    todo.setAttribute("class", "todo");

    checkBox = document.createElement("i");
    checkedBox = document.createElement("i");
    remove = document.createElement("i");

    checkBox.setAttribute("class", "fa-regular fa-square");
    checkedBox.setAttribute("class", "fa-regular fa-square-check");
    remove.setAttribute("class", "fa-solid fa-trash-can");
    checkedBox.style.display = "none";

    text = document.createElement("span");
    text.setAttribute("class", "text");
    text.style.background = `linear-gradient(to bottom, transparent 50%, ${textColor} 50%)`;

    text.innerHTML = newTodo.value;

    todo.append(checkBox, checkedBox, text, remove);
    list.appendChild(todo);
    input.value = "";
  }
};

const onClickCheckTodo = (e) => {
  if (e.target.tagName === "I" && e.target.classList.contains("fa-regular")) {
    const target = e.target;

    target.classList.toggle("fa-square");
    target.classList.toggle("fa-square-check");

    // 여기서 e.target은 i 요소이므로 부모 요소를 찾아서 처리
    const todoItem = target.closest("div");
    const text = todoItem.querySelector(".text");
    if (target.classList.contains("fa-square-check")) {
      text.style.color = "rgb(201, 201, 201)";
      text.style.textDecoration = "line-through ";

      list.appendChild(todoItem);
    } else {
      text.style.color = "black";
      text.style.textDecoration = "none";
    }
  } else if (
    e.target.tagName === "I" &&
    e.target.classList.contains("fa-trash-can")
  ) {
    const todoItem = e.target.closest("div");
    todoItem.remove();
  }
};

plus.addEventListener("click", onClickPlusBtn);
minus.addEventListener("click", onClickMinusBtn);
addTodoBtn.addEventListener("click", onClickAddTodoBtn);
input.addEventListener("input", onInput);
list.addEventListener("click", onClickCheckTodo);

// 심화
// - 정렬
// - 수정
