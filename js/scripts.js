"use strict";

let newLine = "";

for (let i = 1; i <= 5; i++) {
  for (let b = 0; b < 1; b++) {
    newLine += `1 2 3 4 5`;
  }
  newLine += "\n";
}
console.log(newLine);

//////////////////////////////////////////////

const imiona = ['Karol', 'Milena', 'Oskar', 'Oliwia', 'Marta', 'Damian', 'Patrycja', 'Sebastian', 'Alicja', 'Katarzyna'];

let orderedList = '<ol>';
imiona.forEach((name, index) => {
    orderedList += `<li>${name}</li>`;
});
orderedList += '</ol>';

document.body.innerHTML = orderedList;

//////////////////////////////////////////////

let lineOfStars = "";
  
for(let i = 0; i < 5; i++) {
for(let j = 0; j < 1; j++) { 
    
    lineOfStars = lineOfStars + "*";
   
}
document.write(lineOfStars + '<br>');
} 

//////////////////////////////////////////////////

let lineOfStars1 = "*****";
  
for(let i = 5; i > 0; i--) {
for(let j = 0; j < 1; j++) { 
    
    document.write(lineOfStars1 + '<br>');
    
}
lineOfStars1 = lineOfStars1.slice(0, -1);
} 