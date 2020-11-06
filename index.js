let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

//THIS IS ONE WAY TO DO THIS
// document
//   .querySelector(".img1")
//   .setAttribute("src", `./images/dice${randomNumber1}.png`);

// document
//   .querySelector(".img2")
//   .setAttribute("src", `./images/dice${randomNumber2}.png`);

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").textContent = "Player 1 Win";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").textContent = "Player 2 Won";
// } else {
//   document.querySelector("h1").textContent = "Draw";
// }

//Another way

let randomDice1 = "dice" + randomNumber1 + ".png";
let randomDice2 = "dice" + randomNumber2 + ".png";
let diceImageChange1 = "./images/" + randomDice1;
let diceImageChange2 = "./images/" + randomDice2;

let player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src", diceImageChange1);

let player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", diceImageChange2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Win";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Won";
} else {
  document.querySelector("h1").textContent = "Draw";
}
