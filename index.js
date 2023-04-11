// bring in both empty h3's to display the passwords
let boxOneEl = document.getElementById('boxOne-el');
let boxTwoEl = document.getElementById('boxTwo-el');


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(characters.length);

function generatePass(){
  let passOne = Math.floor(Math.random() * characters.length);
  console.log(passOne)
}

// each password is 15 characters long
// get a random 15 elements from the characters array
// create two random passwords when the function is called and print them to their respective boxes