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

let colorIndex = 0; // 초기 컬러 인덱스

const colorOptions = [
  "#b6e28f",
  "#f6e988",
  "#cdf7ff",
  "#ffcdcd",
  "#cddeff",
  "#e8cdff",
];
const getRandomColor = () => {
  const color = colorOptions[colorIndex];
  colorIndex = (colorIndex + 1) % colorOptions.length; // 다음 컬러 인덱스 계산
  return color;
};

const onClickAddTodoBtn = () => {
  const newTodo = input;
  if (newTodo.value === "") {
    alert("내용을 입력해주세요.");
  } else {
    const randomColor = getRandomColor();
    const todo = document.createElement("div");

    checkBox = document.createElement("i");
    checkedBox = document.createElement("i");
    remove = document.createElement("i");

    checkBox.setAttribute("class", "fa-regular fa-square");
    checkedBox.setAttribute("class", "fa-regular fa-square-check");
    remove.setAttribute("class", "fa-solid fa-trash-can");
    checkedBox.style.display = "none";

    text = document.createElement("span");
    text.setAttribute("class", "text");
    text.style.background = `linear-gradient(to bottom, transparent 50%, ${randomColor} 50%)`;

    text.innerHTML = newTodo.value;

    todo.append(checkBox, checkedBox, text, remove);
    list.appendChild(todo);
    input.value = "";
  }
};

// 체크표시하기
const onClickCheckTodo = (e) => {
  // 클릭한 대상이 i 요소이고 fa-regular 클래스를 가지고 있을 때
  if (e.target.tagName === "I" && e.target.classList.contains("fa-regular")) {
    const checkbox = e.target;

    // 체크 및 언체크를 토글
    checkbox.classList.toggle("fa-square");
    checkbox.classList.toggle("fa-square-check");

    // 여기서 e.target은 i 요소이므로 부모 요소를 찾아서 처리
    const todoItem = checkbox.parentElement;

    const text = todoItem.querySelector(".text");
    if (checkbox.classList.contains("fa-square-check")) {
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
    const todoItem = e.target.parentElement;
    todoItem.remove();
  }
};

plus.addEventListener("click", onClickPlusBtn);
minus.addEventListener("click", onClickMinusBtn);
addTodoBtn.addEventListener("click", onClickAddTodoBtn);
input.addEventListener("input", onInput);
list.addEventListener("click", onClickCheckTodo, false);

// 심화
// - 정렬
// - 수정
