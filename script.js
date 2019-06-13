'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", ''),
    
    appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(money);
console.log(time);
console.log(appData);

// let question11 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     question12 = +prompt("Во сколько обойдется?", ''),
//     question21 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     question22 = +prompt("Во сколько обойдется?", '');

// appData.expenses.question11 = question12;
// console.log(appData.expenses.question11);
// appData.expenses.question21 = question22;
// console.log(appData.expenses.question21);

// for (let i = 0; i < 2; i++) {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         question2 = +prompt("Во сколько обойдется?", '');

//     if ( (typeof(question1)) === 'string' && (typeof(question1)) != null && (typeof(question2)) != null
//         && question1 != '' && question2 != '' && question1.length < 50) {
//         console.log("done");
//         appData.expenses[question1] = question2; 
//     } else {
//         i--;
//     }     
// };

// let i = 0;
// while (i < 2) {
//     i++;

//     let question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         question2 = +prompt("Во сколько обойдется?", '');

//     if ( (typeof(question1)) === 'string' && (typeof(question1)) != null && (typeof(question2)) != null
//         && question1 != '' && question2 != '' && question1.length < 50) {
//         console.log("done");
//         appData.expenses[question1] = question2; 
//     } else {
//         i--;
//     }     
// };

let i = 0;
do {
    i++;

    let question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
        question2 = +prompt("Во сколько обойдется?", '');

    if ( (typeof(question1)) === 'string' && (typeof(question1)) != null && (typeof(question2)) != null
        && question1 != '' && question2 != '' && question1.length < 50) {
        console.log("done");
        appData.expenses[question1] = question2; 
    } else {
        i--;
    }     
}
while (i < 2);
appData.moneyPerDay = appData.budget / 30;

alert('Ежедевный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}