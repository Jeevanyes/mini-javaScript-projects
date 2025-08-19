const inputBox = document.querySelector(".box");
const button = document.querySelector(".addButton");
const list = document.querySelector(".todo-list");

button.addEventListener("click", function () {
  const text = inputBox.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.style.margin = "9px 0";
  li.style.gap = "8px";

  const closeBtn = document.createElement("span");
  closeBtn.style.fontSize = "10px";
  closeBtn.textContent = "❌";
  closeBtn.style.marginLeft = "10px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.color = "red";

  // Delete item when close button is clicked
  closeBtn.addEventListener("click", function () {
    li.remove();
  });

  li.addEventListener("click", function () {
    li.remove;
  });

  li.appendChild(closeBtn);

  list.appendChild(li);

  inputBox.value = ""; //Clean the Input box after adding
});

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
