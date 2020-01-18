let money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));
    expenseItem1 = prompt("Введите обязательную статью расходов в этом месяце");
    cost1 = prompt("В какую сумму обойдется");
    expenseItem2 = prompt("Введите обязательную статью расходов в этом месяце");
    cost2 = prompt("В какую сумму обойдется");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses.expenseItem1 = cost1;
appData.expenses.expenseItem2 = cost2;
alert("Ваш бюджет на сегодня: " + appData.budget/30);
