const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const dat = document.getElementById("start");
const todayBtn = document.getElementById("todayBtn");

addBtn.addEventListener("click", addTask);
todayBtn.addEventListener("click", showTodayTasks);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDate = dat.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.dataset.date = taskDate;

    const span = document.createElement("span");
    span.textContent = taskDate ? `${taskText} (${taskDate})` : taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
        completeBtn.textContent = span.classList.contains("completed") ? "Undo" : "Complete";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    dat.value = "";
}

function showTodayTasks() {
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
    const allTasks = taskList.querySelectorAll("li");

    allTasks.forEach(li => {
        if (li.dataset.date === today) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}
const upcomingBtn = document.getElementById("upcomingBtn");
upcomingBtn.addEventListener("click", showUpcomingTasks);

function showUpcomingTasks() {
    const today = new Date().toISOString().split("T")[0];
    const allTasks = taskList.querySelectorAll("li");

    allTasks.forEach(li => {
        if (li.dataset.date && li.dataset.date > today) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}
