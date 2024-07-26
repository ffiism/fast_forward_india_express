let bloodcases = 370;
let bloodunits = 637;
let participants = 1000;

let num1 = document.querySelector("#bloodcases");

function change(i){
    num1.innerHTML = i + "+";
}
for (let i = 0; i <= bloodcases; i++){
    setInterval(change(i) , 400);
}