function addStudent() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;

  if (name === "" || id === "") {
    alert("Please fill all fields!");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    ${name} (${id})
    <button class="delete" onclick="this.parentElement.remove()">X</button>
  `;

  document.getElementById("list").appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
}
