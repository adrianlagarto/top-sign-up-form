function checkPassword(){
  let password = document.getElementById('password').value;
  let comPassword = document.getElementById('compassword').value;
  let message = document.getElementById('message')
  console.log(password, comPassword)

  if(password.length != 0){
    if(password == comPassword){
      message.style.color = 'green';
      return message.textContent = 'Match';
    }
    else{
      message.style.color = 'red';
      message.textContent = 'Please Match The Password';
    }
  }
}