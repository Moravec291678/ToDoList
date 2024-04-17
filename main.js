const main = document.querySelector(".main")
const headerInput = document.querySelector("#headerInput");
const addTaskBtn = document.querySelector("#addTask");
const tasks = document.querySelector("#tasks");


addTaskBtn.addEventListener("click", () => {
  const task = headerInput.value;
  if (!headerInput.value) {
    alert("Nemáš vyplněné pole")
    return
  }

  const taskElement = document.createElement('div');
  taskElement.classList.add('task')
  const taskContentElement = document.createElement('div');
  taskContentElement.classList.add('content');

  taskElement.appendChild(taskContentElement);

  const taskInputElement = document.createElement('input');
  taskInputElement.classList.add('text');
  taskInputElement.type = 'text';
  taskInputElement.value = task;
  taskInputElement.setAttribute('readonly', 'readonly');

  taskContentElement.appendChild(taskInputElement);

  const taskActionElement = document.createElement('div');
  taskActionElement.classList.add('actions');

  const taskEditElement = document.createElement('button');
  taskEditElement.classList.add('edit');
  let index = 1;

  const taskDeleteElement = document.createElement('button');
  taskDeleteElement.classList.add('delete');

  taskActionElement.appendChild(taskEditElement);
  taskActionElement.appendChild(taskDeleteElement);

  taskElement.appendChild(taskActionElement);
  tasks.appendChild(taskElement);

  headerInput.value = "";
  taskEditElement.addEventListener('click', () =>{
    if (index) {
      taskInputElement.removeAttribute('readonly');
      taskInputElement.focus();
      taskEditElement.style.backgroundImage = "url('img/save.png')"
      index = 0;
      
    }
    else {
      taskInputElement.setAttribute('readonly', 'readonly');
      taskEditElement.style.backgroundImage = "url('img/edit.png')"
      index = 1;
    }
  })

  taskDeleteElement.addEventListener('click', () => {
    tasks.removeChild(taskElement);
  })

})