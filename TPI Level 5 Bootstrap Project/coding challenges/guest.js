//add an array list
const guessList = ["Alex", "Martin", "Sophia", "Olivia", "James"];
const userInput = prompt("What is your name ?");

if(guessList.includes(userInput)){
   alert(`Welcome to Franci , ${userInput}`);
}else{
    alert("You don't seem to be our customers.");
}