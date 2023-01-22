const userNameElem = document.querySelector('#user-name')
setUserName()

function setUserName() {
  let userName = localStorage.getItem('name')
  if(userName == undefined) {
    userName = prompt('What is your name?')
    if(!userName) {
      setUserName()
    } else {
      userNameElem.textContent = userName
    }
  }
}
