const loginElement = document.getElementById('login')
const formElement = document.getElementById('login-form')
const inputElement = document.querySelector('#login-form input')

function getUser(){
  const user = localStorage.getItem('user')
  if(user){
    loginElement.innerText = `Hello ${user}`
    removeHide(loginElement)
    addHide(inputElement)
  }
}

function removeHide(targetElement){
  targetElement.classList.remove('hide')
}

function addHide(targetElement){
  targetElement.classList.add('hide')
}

function handleSubmit(e){
  e.preventDefault()
  localStorage.setItem('user',inputElement.value)
  getUser()
}
getUser()

formElement.addEventListener('submit',handleSubmit)
