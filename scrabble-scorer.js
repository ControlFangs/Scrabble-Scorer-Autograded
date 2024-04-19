// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer (word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt(){
   console.log("Let's play some scrabble! Enter a word")
let word = input.question("enter word ")
return word
} 




// let simpleScorer = {1:['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]}; 

function simpleScorer(word){
   let points = word.length;
 
   return points;
}


// let vowelBonusScorer;
function vowelBonusScorer(word){
let points2 = 0
let vowel = ["A","E","I","O","U"]
let consenent = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
word = word.toUpperCase()
//vowle.inculdes("i")
for(let i = 0; i <  word.length ; i++){
   if(vowel.includes(word[i])){
      points2 += 3
   } else if  (consenent.includes(word[i])){
      points2 += 1
   }
   // console.log(points2) 
}

// for (let i = 0; i = vowel.length ; i++){
 
   // if(vowel.includes([i])){


  


return points2;
}


// let scrabbleScorer;
function scrabbleScorer(word){
   let points = 0
   word = word.toLowerCase()
   for(let i = 0; i < word.length; i++){
    points += newPointStructure[word[i]]
   }

   return points 
}




const scoringAlgorithms = [
{name:"Simple Score",   
description:" Each letter is worth 1 point. ",
scorerFunction:simpleScorer},

{name:"Bonus Vowels",
description:"Vowels are 3 pts, consonants are 1 pt.",
scorerFunction:vowelBonusScorer},

{name:"Scrabble",
description:"The traditional scoring algorithm.",
scorerFunction:scrabbleScorer}

];



     function scorerPrompt() {
      let list = scoringAlgorithms.length
      let chose = ""
for (let i=0; i < list; i++) {
   chose += `\n\t${i+1} - ${scoringAlgorithms[i].name}`;
}
console.log("how would you like to be scored");
let scoreIndex = input.question("Your choice: ")

return scoringAlgorithms[scoreIndex] 
}

 
function transform(oldPointStructure){ 
	let newobject = {};
 
   for (let letterPoints in oldPointStructure )  {
      // console.log(`${letterPoints}: ${oldPointStructure [letterPoints]}`);
      let newoldscoring = oldPointStructure[letterPoints]
      for(let i = 0; i < newoldscoring.length; i++){
         // console.log(letterPoints)
         newobject[newoldscoring[i].toLowerCase()] = Number(letterPoints) ;
   }

};   
	 
// console.log(newobject)
   return newobject ;
  

	 	
}
let newPointStructure = transform(oldPointStructure)




function runProgram() {
   // let choice = scorerPrompt()

   
   
let word = initialPrompt();
let scoring = scorerPrompt(); 
// console.log(transform(oldPointStructure))

console.log(scoring.scoring(word))


  
}
 
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};