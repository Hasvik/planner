let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

    let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("В какую сумму обойдется", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
    a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        alert("Ошибка ввода данных, попробуйте снова!");
        i = i - 1;
    }
};

/*let i = 0;
while (i < 2) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("В какую сумму обойдется", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
    a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        alert("Ошибка ввода данных, попробуйте снова!");
        i = i - 1;
    }
};*/

/*let i = 0;
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("В какую сумму обойдется", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
    a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        alert("Ошибка ввода данных, попробуйте снова!");
        i = i - 1;
    };
}
while (i < 2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на сегодня: " + appData.moneyPerDay);

if (appData.moneyPerDay < 200) {
    console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка, проверьте введённые данные");
};
