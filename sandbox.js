

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


let question1 = document.querySelector('#q1');
let question2 = document.querySelector('#q2');
let question3 = document.querySelector('#q3');
let question4 = document.querySelector('#q4');

let answer1 = document.querySelector('.a1');
let answer2 = document.querySelector('.a2');
let answer3 = document.querySelector('.a3');
let answer4 = document.querySelector('.a4');


let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');
let arrow4 = document.querySelector('.arrow4');

// arrow1.style.transform = "rotate(180deg)";


answer1.style.display = 'none';
answer2.style.display = 'none';
answer3.style.display = 'none';
answer4.style.display = 'none';

question1.addEventListener('click', openA)

function openA() {
let counter = 0;

if(counter == 0) {
    arrow1.style.transform = "rotate(180deg)";
    answer1.style.display ='';
    counter++;
} else {
   
    answer1.style.display ='none';
    counter--;
}
}