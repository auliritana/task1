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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
                q2 = +prompt("Во сколько обойдется?", '');
        
            if ( (typeof(q1)) === 'string' && (typeof(q1)) != null && (typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50) {
                console.log("done");
                appData.expenses[q1] = q2; 
            } else {
                i--;
            }     
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let q = prompt("Статья необязательных расходов?", '');
            if (q.length < 30) {
                appData.optionalExpenses[i+1] = q;
            } else {
                i--;
            }
        }
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = ( (appData.budget + 
            appData.monthIncome) / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    chooseIncome: function() {
        let items = null;
        while (typeof(items) !== "string" || items == null || items == '') {
            items = prompt("Что принесет дополнительный доход? Перечислите через запятую!", '');
        } 
        appData.income = items.split(',');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();        
    },
    showIncome: function() {
        let message = 'Способы доп. заработка: \n';
        appData.income.forEach(function(item, i) {
            message += (++i) + ': ' + item + '\n';
        });
        alert(message);
    },
    showAppData: function() {
        let message = 'Наша программа включает в себя данные: \n';
        for (let key in appData) {
            if (typeof(appData[key]) != "function") {
                switch (typeof(appData[key])) {
                    case "object":
                        if (Array.isArray(appData[key]) && appData[key].length) {
                            message += 'Свойство ' + key + ' это массив с элементами: ' + appData[key].join('; ') + '\n';
                        } else if (Object.keys(appData[key]).length) {
                            message += 'Свойство ' + key + ' имеет пары: ';
                            let arr = [];
                            for (let item in appData[key]) {
                                arr.push(item + ': ' + appData[key][item]);
                            }
                            message += arr.join(', ') + '\n';
                        }
                        break;
                    case "string":
                        if (appData[key]) {
                            message += 'Свойство ' + key + ' имеет значение ' + appData[key] + '\n';
                        }
                        break;
                    case "boolean":
                        message += 'Свойство ' + key + ' имеет значение ' + appData[key] + '\n';
                        break;
                    case "number":
                        message += 'Свойство ' + key + ' имеет значение ' + appData[key] + '\n';
                        break;
                    default:break;
                }
            }
        }
        alert(message);
    }
};

appData.chooseExpenses();
appData.chooseOptExpenses();
appData.chooseIncome();
console.log(appData);
appData.showAppData();
