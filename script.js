'use strict';

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: null,
    savings: false
};
console.log(appData);


let question11 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    question12 = +prompt("Во сколько обойдется?", ''),
    question21 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    question22 = +prompt("Во сколько обойдется?", '');

appData.expenses.question11 = question12;
console.log(appData.expenses.question11);
appData.expenses.question21 = question22;
console.log(appData.expenses.question21);

let everydaySpendings = (appData.budget - appData.expenses.question11 -
     appData.expenses.question21)/30;
alert(everydaySpendings);
console.log(everydaySpendings);