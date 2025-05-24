
function login()
{
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("psw").value;
    if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else
    {
    alert('Thank You for Login');
    window.location = "home.html";
        }
}
function clearFunc()
{
    document.getElementById("uname").value="";
    document.getElementById("psw").value="";
}
