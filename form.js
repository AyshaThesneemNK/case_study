let username = document.getElementById("username");
let password= document.getElementById("password");

function checkform(){
    if(username.value == "admin" && password.value == "1234" ){
        alert("Login Successful");
        
        }
    
    else{
     alert("Access denied. Valid username and password is required.");
    }}

    
 



