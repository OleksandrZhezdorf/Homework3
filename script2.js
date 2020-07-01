/* Тернарный вариант */
let birthDate = prompt('What is the date of your birthday?');
let age = 2020 - 1 - birthDate;
console.log (age);
let message = (isNaN(age)) ? "Write only number, please" :
(age<12) ? "U are too small, kiddy. Come back after more than 6 years or try another service." :
(age<18) ? "Access declined. Try again later after few years." :
"Congratulations, my friend. You are welcome."
alert(message);



