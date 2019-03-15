var btn = document.querySelector('.main-nav__toggler');
var menu = document.querySelector('.main-nav__list');
var logo = document.querySelector('.page-header__logo');

btn.addEventListener('click', function() {
        menu.classList.toggle('main-nav__list--open');
        logo.classList.toggle('page-header__logo--filled');
        btn.classList.toggle('main-nav__toggler--active');
})
