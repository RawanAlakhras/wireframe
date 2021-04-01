var num = prompt("plz enter number :")

document.getElementById("num").innerHTML=num;
if (num %2 ==0){
    alert("your number is even");
    document.getElementById("num").innerHTML +=" and it is even number.";
}
else{
    alert("your number is odd");
    document.getElementById("num").innerHTML +=" and it is odd number.";
}
var user_name=prompt("plz enter your name:");
var colors = prompt("plz enter your favorite color");
document.getElementById("nav").style.backgroundColor = colors;
if(user_name != "")
{
    document.getElementById('name').innerHTML = user_name;

}
else{
    document.getElementById('name').innerHTML = " -->you didn't enter your name 😒";
    
}
