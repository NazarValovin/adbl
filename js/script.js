
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    //Burger

    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__nav nav');
        const nav = document.querySelector('.header__nav');
        const language = document.querySelector('.header__language');
        const body = document.body;

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');


        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 1100) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menu);
            }
            if (document.documentElement.clientWidth <= 576) {
                menuMobile.insertAdjacentElement('afterbegin', nav);
                menuMobile.insertAdjacentElement('afterbegin', language);
            }
        }
    }
    burgerClick();

    //==============================================================


    // Click Menu Item

    function clickMenuItem() {
        const categoryBtn = document.querySelector('.header__nav-btn');
        const categoryItems = document.querySelector('.header__nav-body');
        const languageBtn = document.querySelector('.header__language-btn');
        const languageItems = document.querySelector('.header__language-body');
        const searchBtn = document.querySelector('.header__search-btn');
        const search = document.querySelector('.header__search');
        const burger = document.querySelector('.header__burger');
        const menuMobile = document.querySelector('.menu-mobile');
        const body = document.body;

        const div = document.createElement('div');
        body.append(div);

        if (categoryBtn) {
            categoryBtn.addEventListener('click', (e) => {
                if (document.documentElement.clientWidth >= 576) {
                    e.preventDefault();
                    div.classList.add('div-body');
                }
                categoryItems.classList.toggle('_active');
            });
        }
        if (languageBtn) {
            languageBtn.addEventListener('click', (e) => {
                languageBtn.classList.toggle('_active');
                languageItems.classList.toggle('_active');

                if (document.documentElement.clientWidth >= 576) {
                    div.classList.add('div-body');
                }
            });
        }
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                search.classList.toggle('_active');
                div.classList.add('div-body');

                if (burger.classList.contains('_active')) {
                    burger.classList.remove('_active');
                    body.classList.remove('_active');
                    menuMobile.classList.remove('_active');
                }
            });
        }
        if (div) {
            div.addEventListener('click', () => {
                if (categoryItems.classList.contains('_active')) {
                    categoryItems.classList.remove('_active');
                    div.classList.remove('div-body');
                }
                if (search.classList.contains('_active')) {
                    search.classList.remove('_active');
                    div.classList.remove('div-body');
                }
                if (languageBtn.classList.contains('_active')) {
                    languageBtn.classList.remove('_active');
                    languageItems.classList.remove('_active');
                    div.classList.remove('div-body');
                }
            });
        }
    }
    clickMenuItem();

    //======================================================================


    // Menu Footer Item Click

    function menuFooterClick() {
        const items = document.querySelectorAll('.footer__header');
        const itemsBody = document.querySelectorAll('.footer__body');

        if (items.length > 0) {
            for (let index = 0; index < items.length; index++) {
                const item = items[index];
                item.addEventListener('click', () => {
                    if (document.documentElement.clientWidth <= 576) {
                        itemsBody[index].classList.toggle('_active');
                        item.classList.toggle('_active');
                    }
                });
            }
        }
    }
    menuFooterClick();

    //=========================================================================

    // Seo Text On Main Page

    function clickBtnSeoText() {
        const btn = document.querySelector('.main-sites__seo-more');
        const text = document.querySelector('.main-sites__seo-wrap');
        if (btn) {
            const textHeight = text.clientHeight;
            text.style.height = '186px';

            btn.addEventListener('click', () => {
                text.classList.toggle('_active');
                if (text.classList.contains('_active')) {
                    text.style.height = `${textHeight}px`;
                } else {
                    text.style.height = '186px';
                }
            });
        }
    }
    clickBtnSeoText();

    //=============================================================================

    // Website Page Click Info

    function clickWebSitesInfoOtems() {
        const items = document.querySelectorAll('.single-website__descr-header');
        const itemParents = document.querySelectorAll('.single-website__descr-item');

        if (itemParents.length > 0) {
            for (let index = 0; index < items.length; index++) {
                const item = items[index];
                const itemsHeight = item.clientHeight;
                const itemParentsHeight = itemParents[index].clientHeight;

                if (document.documentElement.clientWidth <= 576) {
                    itemParents[index].style.height = `${itemsHeight}px`;
                }

                item.addEventListener('click', () => {
                    if (document.documentElement.clientWidth <= 576) {

                        itemParents[index].classList.toggle('_active');

                        if (itemParents[index].classList.contains('_active')) {
                            itemParents[index].style.height = `${itemParentsHeight}px`;
                        } else {
                            itemParents[index].style.height = `${itemsHeight}px`;
                        }
                    }
                });
            }
        }
    }
    clickWebSitesInfoOtems();

    //==============================================================================














});