const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

let checked = function (e) {
    if (e.target.tagName === "li") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "span") {
        e.target.parentElement.remove();
        saveData();
    }
};
listContainer.addEventListener("click", checked, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

