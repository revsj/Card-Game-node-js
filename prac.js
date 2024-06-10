//Card Game 5 student//
//Remember the rules, you win if you have better score than other stud.//
const POINTS_REQUIRED = 50;
const STUD_ONE_POINTS = 47;
const STUD_TWO_POINTS = 43;
const STUD_THREE_POINTS = 41;
const STUD_FOUR_POINTS = 34;
const STUD_FIVE_POINTS = 32;


const STUD_ONE = "Rie";
const STUD_TWO = "Lester";
const STUD_THREE = "Jayanne";
const STUD_FOUR = "Marcy";
const STUD_FIVE = "Jezel";

console.log(`Welcome to our card game wherein each of you has to compete with each other to win a free trip to Hong Kong! consisting of 50 points or those who got the highest score required, welcome to our game ${STUD_ONE}, ${STUD_TWO}, ${STUD_THREE}, ${STUD_FOUR}, and ${STUD_FIVE}. ENJOY THE GAME!`);

if(STUD_ONE_POINTS <= POINTS_REQUIRED) {
console.log(`Congratulations player number 1 ${STUD_ONE}, you've won a free trip to Hong Kong!!`);
} 
else if (STUD_TWO_POINTS <= POINTS_REQUIRED) {
console.log(`Congratulations player number 2 ${STUD_TWO}, you've won a free trip to Hong Kong!!`);
}
else if (STUD_THREE_POINTS <= POINTS_REQUIRED) {
console.log(`Congratulations player number 3 ${STUD_THREE}, you've won a free trip to Hong Kong!!"`);
}
else if (STUD_FOUR_POINTS <= POINTS_REQUIRED) {
console.log(`Congratulations player number 4 ${STUD_FOUR}, you've won a free trip to Hong Kong!!`);
} 
else if (STUD_FIVE_POINTS <= POINTS_REQUIRED) {
console.log(`Congratulations player number 5 ${STUD_FIVE}, you've won a free trip to Hong Kong!!`); 
}

else { console.log("Push more and don't give up"); 
     }