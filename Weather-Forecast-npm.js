const inquirer = require("inquirer");
const weather = require('weather-js');

console.log("something wrong")

const questions = [
    {
        type: 'input',
        name: 'location',
        message: "What's your location? 'City State'",

    },
];
inquirer.prompt(questions).then(answers => {

    forecast(answers.location)
});

function forecast(location) {
    let choices = [
        {
            type: 'list',
            name: 'forecast',
            message: 'Choose Forecast option?',
            choices: [
                'Curent Weather',
                'Wether for week']
        },]

    inquirer.prompt(choices).then(answers => {
        console.log(answers.forecast)
        weather.find({ search: location, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);
           
            if (answers.forecast == "Curent Weather") {
                console.log(result[0].current)
            }
            if (answers.forecast == "Wether for week") {
                console.log(result[0].forecast)
            } 
        });
    });
}
