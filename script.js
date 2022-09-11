const usrName= document.getElementById("usrName");
const usrPswd= document.getElementById("pswd");
const form = document.getElementById(".login-form");
const errorElement = document.getElementById("error");

form.addEventListener('submit',(e) => {
  
  let messages =[];
  if(usrName.value === "" || usrName.value == null){
    messages.push("Name is required");
  }

  if(usrPswd.value.length <= 8){
    messages.push("password must be greater than or equal 8 chars")
  }

  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  let current= usrName.value;
  console.log(emailRegex.test(current));
  if(emailRegex.test(current) === flase){
    messages.push("Please enter a valid email.");
  }
  
  let pswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let currentPswd= usrName.value;
  console.log(pswdRegex.test(current));
  if(pswdRegex.test(currentPswd) === flase){
    messages.push("Please enter a valid password: minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
  }

  if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }else{
    document.write("<h2>Welcome</h2>");
  }
  
});

