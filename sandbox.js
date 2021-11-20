

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


