document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.hero__prod');
    const searchInput = document.getElementById('searchInput');
    const categoryContainer = document.querySelector('.main__cats');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeModalBtn = document.querySelector('.modal .close');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const cartCountElement = document.getElementById('cartCount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let currentProducts = products;
    let cart = [];

    // Загрузка корзины из Local Storage при загрузке страницы
    loadCartFromLocalStorage();

    function loadCartFromLocalStorage() {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            cart = storedCart;
            updateCartDisplay();
        }
    }

    function renderProducts(productsToRender) {
        productContainer.innerHTML = ''; // Очищаем контейнер перед отрисовкой

        productsToRender.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('card');

            const imgElement = document.createElement('img');
            imgElement.src = product.imageUrl;
            imgElement.alt = product.name;
            imgElement.classList.add('card__img');

            const cardRight = document.createElement('div');
            cardRight.classList.add('card__right');

            const titleElement = document.createElement('p');
            titleElement.textContent = product.name;
            titleElement.classList.add('card__title');

            const priceContainer = document.createElement('div');
            priceContainer.classList.add('price__container');

            const priceElement = document.createElement('p');
            priceElement.textContent = `${product.price} ${product.priceUnit}`;
            priceElement.classList.add('card__price');

            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.min = 1;
            quantityInput.value = 1;
            if (product.priceUnit === 'за кг') {
                quantityInput.step = '0.01';
                quantityInput.min = '0.1';
            }
            quantityInput.classList.add('card__quantity');

            const totalPriceElement = document.createElement('p');
            totalPriceElement.textContent = `Итоговая цена: ${product.price} ${product.priceUnit}`;
            totalPriceElement.classList.add('card__total-price');

            quantityInput.addEventListener('input', () => {
                const totalPrice = (product.price * quantityInput.value).toFixed(2);
                totalPriceElement.textContent = `Итоговая цена: ${totalPrice} руб.`;
            });

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Добавить в корзину';
            addToCartButton.classList.add('card__button');
            addToCartButton.addEventListener('click', () => addToCart(product, quantityInput.value));

            // Добавляем элементы в priceContainer
            priceContainer.appendChild(priceElement);
            priceContainer.appendChild(quantityInput);
            priceContainer.appendChild(totalPriceElement);
            priceContainer.appendChild(addToCartButton);

            // Добавляем titleElement и priceContainer в cardRight
            cardRight.appendChild(titleElement);
            cardRight.appendChild(priceContainer);

            // Добавляем imgElement и cardRight в productElement
            productElement.appendChild(imgElement);
            productElement.appendChild(cardRight);

            productContainer.appendChild(productElement);
        });
    }

    function searchProducts(products, searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.subcategory.toLowerCase().includes(searchTerm)
        );
        return filteredProducts;
    }

    function getUniqueCategories(products) {
        const categories = new Set();
        products.forEach(product => {
            categories.add(product.category);
        });
        return Array.from(categories);
    }

    function renderCategories(categories) {
        categoryContainer.innerHTML = '';
        categories.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category;
            categoryButton.classList.add('category-btn');
            categoryButton.addEventListener('click', () => filterProductsByCategory(category));
            categoryContainer.appendChild(categoryButton);
        });
    }

    function filterProductsByCategory(category) {
        const filteredProducts = currentProducts.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;
    
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart__item');
    
            const nameElement = document.createElement('p');
            nameElement.textContent = `${item.name} - ${item.quantity} ${item.priceUnit}`;
            nameElement.classList.add('cart__name');
    
            const priceElement = document.createElement('p');
            priceElement.textContent = `Цена: ${item.totalPrice} руб.`;
            priceElement.classList.add('cart__price');
    
            cartItemElement.appendChild(nameElement);
            cartItemElement.appendChild(priceElement);
    
            cartItemsContainer.appendChild(cartItemElement);
    
            totalPrice += parseFloat(item.totalPrice);
        });
    
        totalPriceElement.textContent = `Общая стоимость: ${totalPrice.toFixed(2)} руб.`;
        cartCountElement.textContent = cart.length;

        checkoutBtn.addEventListener('click', function() {
            window.location.href = 'payment.html'; // Замените 'payment.html' на путь к вашему HTML файлу оплаты
        });
        
    
        if (cart.length > 0) {
            checkoutBtn.style.display = 'block';
        } else {
            checkoutBtn.style.display = 'none';
        }
    
        saveCartToLocalStorage(totalPrice); // Перемещаем сохранение корзины после подсчета общей стоимости
    }
    
    function addToCart(product, quantity) {
        const cartItem = {
            name: product.name,
            price: product.price,
            priceUnit: product.priceUnit,
            quantity: parseFloat(quantity),
            totalPrice: (product.price * parseFloat(quantity)).toFixed(2)
        };
        cart.push(cartItem);
        updateCartDisplay(totalPrice); // Передаем totalPrice в updateCartDisplay
    }

    function saveCartToLocalStorage(totalPrice) {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    }

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.trim();
        const filteredProducts = searchProducts(currentProducts, searchTerm);
        renderProducts(filteredProducts);
    });

    resetFilterBtn.addEventListener('click', function() {
        renderProducts(products);
        currentProducts = products; // Возвращаемся к изначальному списку товаров
    });

    renderCategories(getUniqueCategories(products));
    renderProducts(products);
});
