let myName = document.querySelector("#myName");
let input =prompt("Adınız nedir?");
myName.innerText = input;

let myClock = document.querySelector("#myClock");

// setInterval(function(){
//     myClock.innerText = `${new Date().getHours().toString()}: ${new Date().getMinutes().toString()}:${new Date().getSeconds().toString()}`;    
// },1000)

function showTime(){
    myClock.innerText = `${new Date().getHours().toString()}: ${new Date().getMinutes().toString()}:${new Date().getSeconds().toString()}`;    
}
setInterval(showTime,1000)