

// the burger menu

let burgerMenu = document.querySelector('.burger-menu');

// the navbar 

let navbar = document.querySelector('.navbar');



// a counter that if it's 0 and the user clicked, the navbar will open and counter++

// if the user clicks on the x, the counter will go from 1 to zero, and navbar will close

let navbarCounter = 0;
navbar.style.display = 'none';

burgerMenu.addEventListener('click', showMobileMenu);

function showMobileMenu() {

    if(navbarCounter === 0) {
      navbar.style.display = '';
        document.querySelector('.burger-menu').src = "/Bookmark-Landing-Page/images/icon-close.svg";
        document.querySelector('.logo').style.filter = "invert(0.3) brightness(1.8)";
        navbarCounter++;
    } else if (navbarCounter > 0) {
       
        navbar.style.display = 'none';
        document.querySelector('.burger-menu').src = "/Bookmark-Landing-Page/images/icon-hamburger.svg";
        document.querySelector('.logo').style.filter = "";
        navbarCounter--;
    }
}


//the 3 tabs that get highlighted once they are clicked on

let tab1 = document.querySelector('#tab1');
let tab2 = document.querySelector('#tab2');
let tab3 = document.querySelector('#tab3');

let tab1Content = document.querySelector('.tab1');
let tab2Content = document.querySelector('.tab2');
let tab3Content = document.querySelector('.tab3');

tab2Content.style.display = 'none';
tab3Content.style.display = 'none';
tab1.addEventListener('click', getHighlighted1);

function getHighlighted1() {
    tab1.classList.add('tab');

    tab2.classList.remove('tab');
    tab3.classList.remove('tab');
    tab1Content.style.display = '';
    tab2Content.style.display = 'none';
    tab3Content.style.display = 'none';
}

tab2.addEventListener('click', getHighlighted2);

function getHighlighted2() {
    tab2.classList.add('tab');

    tab1.classList.remove('tab');
    tab3.classList.remove('tab');
    tab1Content.style.display = 'none';
    tab2Content.style.display = '';
    tab3Content.style.display = 'none';
}

tab3.addEventListener('click', getHighlighted3);

function getHighlighted3() {
    tab3.classList.add('tab');

    tab1.classList.remove('tab');
    tab2.classList.remove('tab');
    tab1Content.style.display = 'none';
    tab2Content.style.display = 'none';
    tab3Content.style.display = '';
}
