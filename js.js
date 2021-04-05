var num = prompt("plz enter number :")

document.getElementById("num").innerHTML=num;
function oddAndEeven(num){
    if (num %2 ===0){
        alert("your number is even");
        document.getElementById("num").innerHTML +=" and it is even number.";
    }
    else{
        alert("your number is odd");
        document.getElementById("num").innerHTML +=" and it is odd number.";
    }
}
oddAndEeven(num);
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
var flowerType=prompt("are you prefer white sunflower or yellow sunflower?");
while(flowerType!== 'white' && flowerType !=='yellow'){
    flowerType=prompt("sorry but you should choose between white and yellow only");
}
function flowerName(num ){
    if(num =='white'){
        document.write("<img src='img/white.jpg' >");
    }
    else{
        document.write("<img src='img/yelow.jpg' >");
    }
}
var numOfFlower = prompt("how many flower do you want?")
for (var i = 0; i<numOfFlower ;i++){
    flowerName(flowerType);
}
