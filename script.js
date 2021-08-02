navbarBtn = document.querySelector('.navbar-btn');
navbar = document.querySelector('.navbar');
hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenuCloseBtn = document.querySelector('body > div > ul > li:nth-child(1) > img');

navbarBtn.addEventListener('click', () => {
    toggleHamburgerMenu();
})
hamburgerMenuCloseBtn.addEventListener('click', () => {
    toggleHamburgerMenu();
})

function toggleHamburgerMenu() {
    if (hamburgerMenu.style.display === 'flex') {
        navbar.style.display = 'flex';
        hamburgerMenu.style.display = 'none';
        return;
    }
    navbar.style.display = 'none';
    hamburgerMenu.style.display = 'flex';
    return
}

for (let x = 0; x < hamburgerMenu.children[0].children.length; x++) {
    let item = hamburgerMenu.children[0].children[x].children[0];
    let nodeName = item.nodeName;
    if (nodeName == 'A') {
        item.addEventListener('click', () => {
            toggleHamburgerMenu();
        })
    }
}
