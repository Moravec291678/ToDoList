const main = document.querySelector(".main")
const headerInput = document.querySelector("#headerInput");
const addTaskBtn = document.querySelector("#addTask");
const tasks = document.querySelector("#tasks");
let inputValue = "";

// do inputValue vztahne hodnotu z inputu
headerInput.addEventListener("input", function (event) {
  inputValue = event.target.value;
});



//vytvori paragraf zapise do nej hodnotu z inputu a prida do `div #tasks`
addTaskBtn.addEventListener("click", function(event){
  let p = document.createElement("p");
  p.classList.add("task");
  const controlButtons = document.createElement("div");
  const editBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  controlButtons.classList.add("controlButtons");
  editBtn.classList.add("controlBtn","edit");
  removeBtn.classList.add("controlBtn","remove");
  p.textContent = ` - ${inputValue}`;
  controlButtons.appendChild(editBtn);
  controlButtons.appendChild(removeBtn);
  p.appendChild(controlButtons);
  
  tasks.appendChild(p);



  headerInput.value = "";
});


 