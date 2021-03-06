let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

    while(isNaN(money) || money == "" || money == null) {
        alert("Введено не числовое значение в строке бюджета, попробуйте снова");
        money = +prompt("Ваш бюджет на месяц?", '');
    }
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
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("В какую сумму обойдется", "");
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
            a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                alert("Ошибка ввода данных, попробуйте снова!");
                i--;
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на сегодня: " + appData.moneyPerDay);   
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 200) {
            console.log("Низкий уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка, проверьте введённые данные");
        }  
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Введите сумму накоплений на банковском депозите"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i] = a;
            } else {
                alert("Ошибка ввода данных, попробуйте снова!");
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt ('Что принесет дополнительный доход? (введите данные через запятую)', '');
                if ( (typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length < 50) {
                    appData.income = items.split(', ');
                    appData.income.push(prompt('Может еще где-то заработаешь?'));
                    appData.income.sort();
                    appData.income.forEach(function(item, i, income) {
                        let a = i + 1; 
                        console.log(a + ' - Способы доп.заработка: ' + item);
                    });
                }
                else {
                    alert("Ошибка ввода данных, попробуйте снова!");
                    i--;
                }
        }        
    },
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ': ' + appData[key])
};

