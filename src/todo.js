const todoFormElement = document.getElementById('todo-form')
const todoInputElement = document.querySelector('#todo-form input')
const todoListElement = document.getElementById('todo-list')

function getTodoList() {
  const todoList = localStorage.getItem('todo-list')
  return JSON.parse(todoList)
}

function insertTodo(todoList){
  for(const todo in todoList){
    const todoElement = document.createElement('li')
    todoElement.setAttribute('data-id',todo)
    const deleteTodoElement = document.createElement('button')
    const todoTextElement = document.createElement('div')
    todoTextElement.innerText = todoList[todo]
    deleteTodoElement.innerText = 'X'
    todoElement.appendChild(deleteTodoElement)
    todoElement.appendChild(todoTextElement)
    todoListElement.appendChild(todoElement)
  }
}

function refreshTodoList(){
  todoListElement.innerText = ''
  const todoList = getTodoList()
  if(todoList){
  insertTodo(todoList);
  }
}
function storeTodo(todo){
  localStorage.setItem('todo-list',JSON.stringify(todo))
}
function addTodo(e){
e.preventDefault()
const todo = todoInputElement.value
if(todo.length === 0){
  alert("empty!!")
  return
}
todoInputElement.value = ''
const todoList = getTodoList()

if(todoList){
  const newTodoList = [...todoList,todo]
  storeTodo(newTodoList)
}else{
  const list = []
  list.push(todo)
  storeTodo(list)
}
refreshTodoList()
}

function delteTodo(id){
  const todoList =getTodoList()
  todoList.splice(id,1)
  storeTodo(todoList)
}
function handleDelete(e){
  if(e.target.tagName !== 'BUTTON') return
  const id = e.target.closest('li').dataset.id
  delteTodo(id)
  refreshTodoList()
}


refreshTodoList()
todoFormElement.addEventListener('submit',addTodo)
window.addEventListener('click',handleDelete)
