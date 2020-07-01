let birthDate = prompt('What is the date of your birthday?');
let age = 2020 - 1 - birthDate;
console.log (age);
if (isNaN(age)) {
  alert("Write only number, please")
}
else if (age<12) {
  alert("U are too small, kiddy. Come back after more than 6 years or try another service.");
}
else if (age<18) {
  alert("Access declined. Try again later after few years.");
} 
else {
  alert("Congratulations, my friend. You are welcome.");
}
