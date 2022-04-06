let navbarMenu = document.getElementById(
  'hero__navbar-menu'
);
let navbarButton = document.getElementById(
  'navbar__button'
);
let navbar = document.getElementById('hero__navbar');
let navbarMenuItems = document.querySelectorAll(
  'li.hero__navbar-menuItem'
);
let opened = false;

navbarButton.addEventListener('click', () => {
  if (opened) {
    navbarMenu.classList.remove('opened');
    navbar.classList.remove('opened');
    opened = false;
  } else {
    navbarMenu.classList.add('opened');
    navbar.classList.add('opened');
    opened = true;
  }
});

navbarMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbarMenu.classList.remove('opened');
    navbar.classList.remove('opened');
    opened = false;
  });
});
