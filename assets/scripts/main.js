function goToIndex() {
    window.location.href = 'index.html';
}

function goToCatalog() {
    window.location.href = 'cat.html';
}

function goToAcc() {
    window.location.href = 'acc.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to show the input field
    function showInputField() {
        const inputContainer = document.querySelector('.input-container');
        inputContainer.style.display = 'flex';
        inputContainer.style.marginTop = '10px';
        inputContainer.style.justifyContent = 'space-between';
        inputContainer.style.alignItems = 'center';
        document.getElementById('error-message').style.display = 'none';
    }

    // Function to update the money amount
    function updateMoney() {
        var newAmount = document.getElementById('newAmount').value;
        var errorMessage = document.getElementById('error-message');

        if (newAmount === "") {
            errorMessage.textContent = 'Пожалуйста, введите сумму!';
            errorMessage.style.display = 'block';
        } else if (newAmount < 0) {
            errorMessage.textContent = 'Сумма не может быть отрицательной!';
            errorMessage.style.display = 'block';
        } else {
            document.getElementById('moneyAmount').textContent = newAmount + ' руб';
            localStorage.setItem('moneyAmount', newAmount); // Save the amount to localStorage
            document.getElementById('newAmount').value = ''; // Clear the input field
            document.querySelector('.input-container').style.display = 'none'; // Hide the input field
            errorMessage.style.display = 'none';
        }
    }

    // Function to load the money amount from localStorage
    function loadMoneyAmount() {
        var savedAmount = localStorage.getItem('moneyAmount');
        if (savedAmount) {
            document.getElementById('moneyAmount').textContent = savedAmount + ' руб';
        }
    }

    // Function to show the bonus selection modal
    function showBonusField() {
        document.getElementById('bonusModal').style.display = 'block';
    }

    // Function to close the bonus selection modal
    function closeBonusField() {
        document.getElementById('bonusModal').style.display = 'none';
    }

    // Function to apply the selected bonus
    function applyBonus(discount) {
        const selectedBonusElement = document.getElementById('selectedBonus');
        selectedBonusElement.textContent = discount + '% скидка выбрана';
        localStorage.setItem('selectedBonus', discount); // Save the selected bonus to localStorage
        closeBonusField();
    }

    // Function to load the selected bonus from localStorage
    function loadSelectedBonus() {
        var savedBonus = localStorage.getItem('selectedBonus');
        if (savedBonus) {
            const selectedBonusElement = document.getElementById('selectedBonus');
            selectedBonusElement.textContent = savedBonus + '% скидка выбрана';
        }
    }

    // Call loadMoneyAmount and loadSelectedBonus when the page loads
    loadMoneyAmount();
    loadSelectedBonus();

    // Expose functions to global scope to attach them to event listeners
    window.showInputField = showInputField;
    window.updateMoney = updateMoney;
    window.showBonusField = showBonusField;
    window.closeBonusField = closeBonusField;
    window.applyBonus = applyBonus;
});