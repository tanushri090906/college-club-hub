function addTask() {
  const name = document.getElementById("taskName").value;
  const date = document.getElementById("taskDate").value;

  if (!name || !date) {
    alert("Enter task and date");
    return;
  }

  const list = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = `${name} - ${date}`;
  list.appendChild(li);

  document.getElementById("taskName").value = "";
  document.getElementById("taskDate").value = "";
}
