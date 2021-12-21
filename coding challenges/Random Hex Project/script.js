const body = document.querySelector("body");
const generate = document.querySelector(".generate");
const hex = document.querySelector("#hex");
const input = document.querySelector("#input");

generate.addEventListener("click", () => {
const hexcode = [0,1,2,3,4,5,6,7,8,9,'A','B','C', 'D', 'E', 'F'];
var hex_key = "#";
for (let i = 0 ; i < 6 ; i++){
    let hex_value = Math.floor(Math.random() * hexcode.length);
    hex_key = hex_key + hexcode[hex_value];
}

    body.style.backgroundColor = hex_key;
    hex.innerHTML = hex_key.toLowerCase();
    input.value = hex_key.toLowerCase();
})
 
function doCopy(){
    input.select();
    document.execCommand("copy");
    alert("Copied Hex Code : " + input.value.toLowerCase())
}

input.addEventListener('keyup', ()=> {
    body.style.backgroundColor = input.value.toLowerCase();
    hex.innerHTML = input.value.toLowerCase();
})