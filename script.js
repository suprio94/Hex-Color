let change_background_color= setInterval(changeColor,10000);
let displayTimer= setInterval(showtimer,1000);

function changeColor(){
    var hex_numbers= ["0","1","2","3","4","5","6","7","8",
"9","A","B","C","D","E","F"]


var hexcode= '';

for(var i=0;i<6;i++){
 let random_index= Math.floor(Math.random()* hex_numbers.length);
    hexcode= hexcode+ hex_numbers[random_index]; 
} 
document.getElementById ("hex-code").innerHTML=hexcode;
document.getElementsByTagName("body")[0].style.backgroundColor= "#" + hexcode;

}

function showtimer(){
let currentDateTime= new Date();
let currentTime= currentDateTime.toLocaleTimeString();
document.getElementById("timer").innerHTML=currentTime
}


