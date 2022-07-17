let userData = [
    {
        email: 'sth5209@psu.edu',
        password: '1'
    },
    {
        email: 'jmc902@psu.edu',
        password: '2'
    },
    {
        email: 'mcs65@psu.edu',
        password: '3'
    }
  ]
  
  
  function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    for (let i = 0; i < userData.length; i++){
    if ( email == userData[i].email && password == userData[i].password){
    alert ("Email already in use");
    return false;
    }
    else{
        alert("Register Successful");
        window.location = "Home.html"; // Redirecting to other page.
        return false;
    }
}
}