function treatLunch(){
const friends = ["Wai Bhone", "Bhone Pyae", "Phyu Sin", "Pyae Sone", "Zwe Moe",
 "Khant Phone", "Aung Chan", "Hpone Linn"];

 const totalFriends = friends.length;
 const random = Math.floor(Math.random() * totalFriends)//0 - 0.9 * 8 
 const treat = friends[random];
 return `${treat} will buy lunch for all of us.`;
}

