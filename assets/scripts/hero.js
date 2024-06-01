const products = [
    {
        name: "Шейная часть говяжья",
        price: 649.99,
        priceUnit: "за кг",
        category: "Мясо и птица",
        subcategory: "Говядина",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Тушка цыплёнка на зерновом откорме",
        price: 279.99,
        priceUnit: "за кг",
        category: "Мясо и птица",
        subcategory: "Птица",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Котлета Poroda Prime из молодого барашка на кости",
        price: 759.99,
        priceUnit: "за шт",
        category: "Мясо и птица",
        subcategory: "Баранина",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Колбаски из говядины Мираторг Чевапчичи",
        price: 159.99,
        priceUnit: "за шт",
        category: "Мясо и птица",
        subcategory: "Полуфрабрикат",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Ребра свиные",
        price: 539.99,
        priceUnit: "за кг",
        category: "Мясо и птица",
        subcategory: "Свинина",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Стейк Taurus Рибайе",
        price: 799.99,
        priceUnit: "за шт",
        category: "Мясо и птица",
        subcategory: "Говядина",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Вода Evian минеральная",
        price: 299.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Вода",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Добрый Cola, 1.5л",
        price: 124.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Газированные напитки",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Coca-Cola, 330мл",
        price: 124.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Газированные напитки",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Мохито освежающий безалкогольный, 450мл",
        price: 77.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Газированные напитки",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Сок Добрый Яблоко, 1л",
        price: 119.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Сок",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Напиток сокосодержащий Добрый из манго, 1л",
        price: 119.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Сок",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Сок Добрый Томат, 1л",
        price: 119.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Сок",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Сок Rich апельсиновый, 300мл",
        price: 69.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Сок",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Нектар Rich из апельсинов и манго для детского питания, 900мл",
        price: 159.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Сок",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Нектар Rich вишневый для детского питания, 900мл",
        price: 149.99,
        priceUnit: "за шт",
        category: "Соки, воды, напитки",
        subcategory: "Сок",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Вафли Яшкино Голландские с карамельной начинкой, 290г",
        price: 104.99,
        priceUnit: "за шт",
        category: "Шоколад, конфеты, сладости",
        subcategory: "Вафли",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Шоколад молочный Alpen Gold Орео со вкусом ванили и кусочками печенья, 90г",
        price: 119.99,
        priceUnit: "за шт",
        category: "Шоколад, конфеты, сладости",
        subcategory: "Шоколад",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Шоколад Alpen Gold молочный с фундуком, 80г",
        price: 119.99,
        priceUnit: "за шт",
        category: "Шоколад, конфеты, сладости",
        subcategory: "Шоколад",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Шоколад молочный Milka Bubbles пористый, 76г",
        price: 199.99,
        priceUnit: "за шт",
        category: "Шоколад, конфеты, сладости",
        subcategory: "Шоколад",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Конфеты Яшкино Чио Рио",
        price: 399.99,
        priceUnit: "за кг",
        category: "Шоколад, конфеты, сладости",
        subcategory: "Конфеты",
        imageUrl: "../assets/img/vossen.jpg"
    },
    {
        name: "Конфеты Золотой Степ Славянка, 192г",
        price: 109.99,
        priceUnit: "за шт",
        category: "Шоколад, конфеты, сладости",
        subcategory: "Конфеты",
        imageUrl: "../assets/img/vossen.jpg"
    },
]

function getRandomProducts(products, count) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function renderProducts() {
    const productContainer = document.querySelector('.hero__prod');
    const randomProducts = getRandomProducts(products, 12);
    
    randomProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('card');
    
        const imgElement = document.createElement('img');
        imgElement.src = product.imageUrl;
        imgElement.alt = product.name;
        imgElement.classList.add('card__img');
    
        const titleElement = document.createElement('p');
        titleElement.textContent = product.name;
        titleElement.classList.add('card__title');
    
        productElement.appendChild(imgElement);
        productElement.appendChild(titleElement);
    
        productContainer.appendChild(productElement);
        });
}
  
document.addEventListener('DOMContentLoaded', renderProducts);