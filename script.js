const usrName= document.getElementById("usrName");
const usrPswd= document.getElementById("pswd");
const form = document.getElementById("login-form");
const errorElement = document.getElementById("error");

// usrName.addEventListener("input",(e)=>{
//   let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//   let current= e.target.value;
//   console.log(pattern.test(current));
// })

form.addEventListener('submit',(e)=>{
  
  let messages =[];
  if(usrName.value === "" || usrName.value == null){
    messages.push("Name is required");
  }

  if(usrPswd.value.length < 8){
    messages.push("password must be greater than 8")
  }

  // let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  // let current= usrName.target.value;
  // console.log(emailRegex.test(current));
  
  if(messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
  
});

