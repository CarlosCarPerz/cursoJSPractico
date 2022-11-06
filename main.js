const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const cartMenu = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDescriptionContainer = document.querySelector('.product-description')
const closeDescriptionIcon = document.querySelector('.product-description-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCartMenu);
closeDescriptionIcon.addEventListener('click', closeProductDescription);

function closeCart () {
    const isCartMenuClosed = cartMenu.classList.contains('inactive')

    if (!isCartMenuClosed) {
        cartMenu.classList.add('inactive')
    }
}

function closeEmailMenu () {
    const isEmailMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isEmailMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
}

function closeMenuMobile () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
}

function toggleDesktopMenu () {
    closeCart();
    closeProductDescription();

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    closeCart();
    closeProductDescription();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu () {
    closeMenuMobile();
    closeEmailMenu();
    closeProductDescription();

    cartMenu.classList.toggle('inactive');
}

function openProductDescription () {
    productDescriptionContainer.classList.remove('inactive');
    closeCart();
    closeEmailMenu();
    closeMenuMobile();
}

function closeProductDescription () {
    productDescriptionContainer.classList.add('inactive')
}

const productList = [];
    productList.push ({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productList.push ({
        name: 'Skate',
        price: 80,
        image: 'https://images.pexels.com/photos/5069290/pexels-photo-5069290.jpeg?cs=srgb&dl=pexels-anna-shvets-5069290.jpg&fm=jpg&_gl=1*12r1825*_ga*NjY3MjIwNDUwLjE2NjUxMDU3MDU.*_ga_8JE65Q40S6*MTY2NzY2OTc2MS4xMC4xLjE2Njc2Njk3ODEuMC4wLjA.'
    })
    productList.push ({
        name: 'Motocross',
        price: 590,
        image: 'https://images.pexels.com/photos/160882/pexels-photo-160882.jpeg?cs=srgb&dl=pexels-daniel-160882.jpg&fm=jpg&_gl=1*on63cz*_ga*NjY3MjIwNDUwLjE2NjUxMDU3MDU.*_ga_8JE65Q40S6*MTY2NzY2OTc2MS4xMC4xLjE2Njc2Njk4NDkuMC4wLjA.'
    })

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement ('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement ('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDescription);
    
        const productInfo = document.createElement ('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement ('div');
    
        const productPriece = document.createElement('p');
        productPriece.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPriece);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement ('figure');
        const productImgCart = document.createElement ('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);