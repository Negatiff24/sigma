// main.test.js

const { updateMoney } = require('./payment.js'); // Импортируем функцию, которую мы хотим протестировать

// Тесты для функции updateMoney
describe('updateMoney function', () => {
    // Тестирование обновления суммы денег
    test('updates money amount in localStorage', () => {
        // Создаем фиктивные данные
        const newAmount = 500;
        const expectedAmount = newAmount + ' руб';

        // Вызываем функцию, которую мы тестируем
        updateMoney(newAmount);

        // Получаем текущее значение суммы денег из localStorage
        const actualAmount = localStorage.getItem('moneyAmount');

        // Проверяем, что сумма денег была обновлена правильно
        expect(actualAmount).toEqual(expectedAmount);
    });
});
