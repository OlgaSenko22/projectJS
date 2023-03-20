"use strict";
const userBirthdayYear = +prompt('What year were you born?', '2000');
let messageUserCountry = '';
let messageUserFavoriteSport = '';
const result = 2023 - userBirthdayYear;
if(userBirthdayYear) {
    const userCountry = prompt('Where are do you live?', 'Kyiv');
    if(userCountry) {
        const userFavoriteSport = prompt('What is your favorite sport?', 'boxing');
        if(userFavoriteSport) {
            switch (userCountry) {
                case 'Kyiv':
                    messageUserCountry = `You live in the capital of Ukraine - ${userCountry}`;
                    break;
                case 'Moscow':
                    messageUserCountry = `You live in the capital of Russia - ${userCountry}`;
                    break;
                case 'Minsk':
                    messageUserCountry = `You live in the capital of Belarus - ${userCountry}`;
                    break;
                default:
                    messageUserCountry = `You live in the city ${userCountry}`;
            }
            switch (userFavoriteSport) {
                case 'football':
                    messageUserFavoriteSport = 'Cool! Do you want to be like Lionel Messi?';
                    break;
                case 'boxing':
                    messageUserFavoriteSport = 'Cool! Do you want to be like Oleksandr Usyk?';
                    break;
                case 'table tennis':
                    messageUserFavoriteSport = 'Cool! Do you want to be like Ivan May?';
                    break;
                default:
                    messageUserFavoriteSport = `${userFavoriteSport} - it's cool!`;
            }
            alert(`You are ${result} years old\n ${messageUserCountry}\n ${messageUserFavoriteSport}`);
        } else {
            alert('It is a pity that you did not want to enter your favorite sport =(');
        }
        } else {
            alert('It is a pity that you did not want to enter where do you live =(');
    }
} else {
    alert('It is a pity that you did not want to enter your year of birth =(');
}
