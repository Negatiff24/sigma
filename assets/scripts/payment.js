document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const discountInfoElement = document.getElementById('discountInfo');
    const finalPriceElement = document.getElementById('finalPrice');
    const useBonusCardCheckbox = document.getElementById('useBonusCard');
    const payBtn = document.getElementById('payBtn');
    const paymentResult = document.getElementById('paymentResult');
    const selectedBonusElement = document.getElementById('selectedBonus');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
    let availableMoney = parseFloat(localStorage.getItem('moneyAmount')) || 0; // доступные деньги
    let bonusCardDiscount = parseFloat(localStorage.getItem('selectedBonus')) || 0; // процент скидки

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart__item');

            const cartLeft = document.createElement('div');
            cartLeft.classList.add('cart__left');

            const nameElement = document.createElement('p');
            nameElement.textContent = `${item.name} - ${item.quantity} ${item.priceUnit}`;
            nameElement.classList.add('cart__name');

            const priceElement = document.createElement('p');
            priceElement.textContent = `Цена: ${item.totalPrice} руб.`;
            priceElement.classList.add('cart__price');

            const removeBtn = document.createElement('button');
            removeBtn.textContent = '✖';
            removeBtn.classList.add('remove__btn');
            removeBtn.addEventListener('click', () => removeItemFromCart(index));

            cartLeft.appendChild(nameElement);

            cartItemElement.appendChild(cartLeft);
            cartItemElement.appendChild(priceElement);
            cartItemElement.appendChild(removeBtn);

            cartItemsContainer.appendChild(cartItemElement);
        });

        totalPriceElement.textContent = `Общая стоимость: ${totalPrice.toFixed(2)} руб.`;

        // Рассчитать скидку и окончательную цену
        const discountAmount = useBonusCardCheckbox.checked ? totalPrice * (bonusCardDiscount / 100) : 0;
        const discountedTotal = totalPrice - discountAmount;

        discountInfoElement.textContent = `Скидка: ${bonusCardDiscount}% (${discountAmount.toFixed(2)} руб.)`;
        finalPriceElement.textContent = `Итоговая стоимость после скидки: ${discountedTotal.toFixed(2)} руб.`;
    }

    function removeItemFromCart(index) {
        const item = cart[index];
        totalPrice -= item.totalPrice;
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
        renderCartItems();
    }

    function handlePayment() {
        // Рассчитать скидку
        const discountAmount = useBonusCardCheckbox.checked ? totalPrice * (bonusCardDiscount / 100) : 0;
        const discountedTotal = totalPrice - discountAmount;

        const totalMoney = availableMoney;

        if (totalMoney >= discountedTotal) {
            const remainingMoney = totalMoney - discountedTotal;
            paymentResult.textContent = `Оплата успешна! Оставшиеся деньги: ${remainingMoney.toFixed(2)} руб.`;
            localStorage.removeItem('cart');
            localStorage.removeItem('totalPrice');
            cart = [];
            totalPrice = 0;
            availableMoney = remainingMoney; // Обновляем доступные деньги
            localStorage.setItem('moneyAmount', availableMoney.toFixed(2)); // Обновляем данные о доступных деньгах в localStorage
            
            if (useBonusCardCheckbox.checked) {
                localStorage.removeItem('selectedBonus'); // Удаляем бонусную карту после использования
                useBonusCardCheckbox.checked = false;
                bonusCardDiscount = 0; // Сбрасываем скидку
            }

            renderCartItems();
            // Переход на index.html после успешной оплаты
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // Задержка для показа сообщения об успешной оплате перед переходом
        } else {
            paymentResult.textContent = 'Недостаточно средств для оплаты.';
        }
    }

    function loadSelectedBonus() {
        const savedBonus = localStorage.getItem('selectedBonus');
        if (savedBonus) {
            selectedBonusElement.textContent = savedBonus + '% скидка выбрана';
        } else {
            selectedBonusElement.textContent = 'Бонусная карта не выбрана';
        }
    }

    useBonusCardCheckbox.addEventListener('change', renderCartItems);
    payBtn.addEventListener('click', handlePayment);

    renderCartItems();
    loadSelectedBonus(); // Загрузить информацию о выбранной бонусной карте при загрузке страницы
});
