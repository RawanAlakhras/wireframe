var num = prompt("plz enter number :")
if (num %2 ==0){
    alert("your number is even")
}
else{
    alert("your number is odd");
}
var user_name=prompt("plz enter your name:");
if(user_name != "")
{
    document.getElementById('name').innerHTML = user_name;

}
else{
    document.getElementById('name').innerHTML = " -->you didn't enter your name 😒";
    
}
