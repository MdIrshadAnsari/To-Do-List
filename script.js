const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list-container");

function addtask() {
  if (inputBox.value === "") {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
listBox.addEventListener(
  "click",
  function (element) {
    if (element.target.tagName === "SPAN") {
      element.target.parentElement.remove();
    }
  },
  false
);
