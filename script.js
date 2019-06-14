'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    // while (isNaN(money) || money == '' || money == null) {
    //     money = +prompt("Ваш бюджет на месяц?", '');
    // }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
            q2 = +prompt("Во сколько обойдется?", '');
    
        if ( (typeof(q1)) === 'string' && (typeof(q1)) != null && (typeof(q2)) != null
            && q1 != '' && q2 != '' && q1.length < 50) {
            console.log("done");
            appData.expenses[q1] = q2; 
        } else {
            i--;
        }     
    }
}

function chooseOptExpenses () {
    for (let i = 0; i < 3; i++) {
        let q = prompt("Статья необязательных расходов?", '');
        if (q.length < 30) {
            appData.optionalExpenses[i+1] = q;
        } else {
            i--;
        }
    }
}

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save / 100 / 12 * percent).toFixed();
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}

function detectDayBudget () {
    appData.moneyPerDay = ( (appData.budget + appData.monthIncome) / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

chooseExpenses();
chooseOptExpenses();
detectLevel();
checkSavings();
detectDayBudget();

