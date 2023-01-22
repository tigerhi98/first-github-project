const userNameElem = document.querySelector('#user-name')
const changeNameBtn = document.querySelector('#change-name')

initializeUserName()
changeNameBtn.onClick = setUserName

function setUserName() {
  userName = prompt('What is your name?')
  if(!userName) {
    setUserName()
  } else {
    userNameElem.textContent = userName
    localStorage.setItem('name', userName)
  }
}

function initializeUserName() {
  let userName = localStorage.getItem('name')
  if(userName == undefined) {
    setUserName()
  } else {
    userNameElem.textContent = userName
  }
}
