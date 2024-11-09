import './style.css'
import javascriptLogo from './javascript.svg'


const addButton = document.getElementById('add-button');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function addTask() {
  const taskText = inputField.value; // i need to get-save users input text
  if (taskText === '') return; 

  const newTask = document.createElement('li'); // I need to create new elements
  newTask.textContent = taskText; 
  todoList.appendChild(newTask); 

  inputField.value = ''; // clen for another use
}


addButton.addEventListener('click', addTask); //add spy on btn
inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { 
    addTask(); // add spy on ENTER
  }
});