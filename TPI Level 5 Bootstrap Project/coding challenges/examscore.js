
const user = prompt("What is your name ?");
const subject = prompt("Which subject's mark do you want to know ?");

const examScore = Math.floor(Math.random() * 100) + 1 ;

if(examScore >= 80){
    alert(`Congrats, ${user} !! Your exam score in ${subject} is ${examScore} marks. 
    Wish you would get such high mark in real.`);
}else if(examScore >= 60){
    alert(`Not bad, ${user} !! Your exam score in ${subject} is ${examScore} marks. 
    Wish you would get higher mark in real.`);
}else if(examScore >= 40){
    alert(`At least you passed, ${user} !! Your exam score in ${subject} is ${examScore} marks. 
    Wish you would get higher mark in real.`);
}else{
    alert(`Cheer up, ${user} !! Your exam score in ${subject} is ${examScore} marks. 
    Wish you would pass the exam in real.`);
}