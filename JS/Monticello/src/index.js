import './js/map.js';
import './js/swiper.js';
import './scss/styles.scss';

const buttonMenu = document.querySelector('[data-menu-button]');
const burgerMenu = document.querySelector('[data-menu]');

buttonMenu.addEventListener('click', hadleToggle);

function hadleToggle(e) {
  const expanded = buttonMenu.getAttribute('aria-expended') === 'true' || false;
  buttonMenu.classList.toggle('is-open');
  buttonMenu.setAttribute('aria-expended', !expanded);

  burgerMenu.classList.toggle('is-open');
}

// ========

const projects = document.querySelector('.projects');

projects.addEventListener('click', handleMoreDescription);

function handleMoreDescription(e) {
  if (e.target.nodeName === 'BUTTON') {
    const prevElemByClickMore = e.target.previousElementSibling;
    const more = prevElemByClickMore.querySelector('.more');

    more.classList.toggle('open');

    if (more.classList.value === 'more open') {
      e.target.textContent = 'Hide';
    } else {
      e.target.textContent = 'More details';
    }
  }
}

// =============

function scrollDownFromMenu() {
  const menu = document.querySelector('.menu');
  menu.addEventListener('click', handleLink);

  function handleLink(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute('href');

    if (e.target.nodeName === 'A') {
      document.querySelector('' + attribute).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (e.target === e.currentTarget) {
      return;
    }

    const currentLink = e.target;
    const activeLink = e.currentTarget.querySelector('.menu__link--active');

    if (activeLink) {
      activeLink.classList.remove('menu__link--active');
    }

    currentLink.classList.add('menu__link--active');
  }
}

scrollDownFromMenu();

// ======

function scrollDownToProjects() {
  const arrow = document.querySelector('.arrow');
  arrow.addEventListener('click', handleLink);

  function handleLink(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute('href');

    document.querySelector('' + attribute).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

scrollDownToProjects();

// ========
const userData = {
  name: name,
  email: name,
};

function getFormvalue() {
  const form = document.getElementById('form');
  const userName = document.getElementById('text');
  const userEmail = document.getElementById('email');

  form.addEventListener('click', handleValue);

  function handleValue(e) {
    e.preventDefault();
    userData.name = userName.value;
    userData.email = userEmail.value;

    if(e.target.nodeName === "BUTTON") {
      console.log(userData);
    }
  }
}

getFormvalue();

// =============
