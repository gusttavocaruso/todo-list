const buttonCreateTask = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const clearFinishedButton = document.querySelector('#remover-finalizados');
const task = document.querySelector('#texto-tarefa');

const clearAllTasks = () => {
  const li = document.querySelectorAll('.liTask');
  li.forEach((l) => ol.removeChild(l));
};

const clearFinishedOnes = () => {
  const finishedTasks = document.querySelectorAll('.completed');
  finishedTasks.forEach((tks) => ol.removeChild(tks));
};

const taskSelect = ({ target }) => {
  const allLi = document.querySelectorAll('.liTask');
  allLi.forEach((li) => li.removeAttribute('id'));
  target.id = 'selected-task';
};

const taskFinished = ({ target }) => {
  target.classList.toggle('completed'); 
};

const createTask = () => {
  const taskText = document.querySelector('#texto-tarefa').value;
  const li = document.createElement('li');
  li.className = 'liTask';
  li.innerHTML = taskText;
  ol.appendChild(li);
  task.value = '';
  li.addEventListener('click', taskSelect);
  li.addEventListener('dblclick', taskFinished);
};

buttonCreateTask.addEventListener('click', createTask);
clearButton.addEventListener('click', clearAllTasks);
clearFinishedButton.addEventListener('click', clearFinishedOnes);
