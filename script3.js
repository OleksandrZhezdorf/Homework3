let accessAllowedAge;
let accessAllowedExperience;
let accessAllowedSex;
let accessAllowedKnowledge;
let accessAllowedCar;
let birthDate = prompt('What is the date of your birthday?');
let age = 2020 - 1 - birthDate;
console.log (age);
if (isNaN(age)) {
    accessAllowedAge = false;
    alert("Write only number, please. Start the test again.")
  }
else if (age >= 30) {
    accessAllowedAge = true;
} else {
    accessAllowedAge = false;
    alert("Sorry, but you are too young for this job.")
}
let experience = prompt('How many years of experience do you have?');
if (isNaN(experience)) {
    accessAllowedExperience = false;
    alert("Write only number, please. Start the test again.")
  }
else if (experience > 3) {
    accessAllowedExperience = true;
} else {
    accessAllowedExperience = false;
    alert("Sorry, but you are too young for this job.")
}
let sex = prompt('What is your sex? Write only male or female.');
if (sex === "female") {
    accessAllowedSex = true;
} else {
    accessAllowedSex = false;
    alert("Sorry. We have anough men on this job.")
}
let knowledge = prompt('Do you know JS? If you know it well try to write it without mistakes)');
if (knowledge === "JavaScript") {
    accessAllowedKnowledge = true;
} else {
    accessAllowedKnowledge = false;
    alert("Sorry. U have to know it well to work in our company")
}
let car = prompt('Do you have a car? Write only Yes or No');
if (car === "Yes") {
    accessAllowedCar = true;
} else {
    accessAllowedCar = false;
    alert("Sorry. Our office is far from any civilization. You will need a car to get to work")
}
let accessAllowed = (accessAllowedAge === false) ? "Sorry" :
(accessAllowedExperience === false) ? "Sorry" :
(accessAllowedSex === false) ? "Sorry" :
(accessAllowedKnowledge === false) ? "Sorry" :
(accessAllowedCar === false) ? "Sorry" :
"Congratulations, my friend. Welcome aboard."
alert (accessAllowed);
