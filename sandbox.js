

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


let counterQ1 = 0;

function openA() {
if(counterQ1 == 0) {
    arrow1.style.transform = "rotate(180deg)";
    answer1.style.display ='';
    counterQ1++;
} else {
    arrow1.style.transform = "rotate(360deg)";
    answer1.style.display ='none';
    counterQ1--;
}
}

question2.addEventListener('click', openA2);
let counterQ2 = 0;

function openA2() {
    if(counterQ2 == 0) {
        arrow2.style.transform = "rotate(180deg)";
        answer2.style.display ='';
        counterQ2++;
    } else {
        arrow2.style.transform = "rotate(360deg)";
        answer2.style.display ='none';
        counterQ2--;
    
    }
    
}


question3.addEventListener('click', openA3);
let counterQ3 = 0;

function openA3() {
    if(counterQ3 == 0) {
        arrow3.style.transform = "rotate(180deg)";
        answer3.style.display ='';
        counterQ3++;
    } else {
        arrow3.style.transform = "rotate(360deg)";
        answer3.style.display ='none';
        counterQ3--;
    
    }
    
}


question4.addEventListener('click', openA4);
let counterQ4 = 0;

function openA4() {
    if(counterQ4 == 0) {
        arrow4.style.transform = "rotate(180deg)";
        answer4.style.display ='';
        counterQ4++;
    } else {
        arrow4.style.transform = "rotate(360deg)";
        answer4.style.display ='none';
        counterQ4--;
    
    }
    
}


//we're checking if it's an email or not

let regex = /[A-Za-z0-9]+[!#$%&'*+-/=?^_`{|}~]*[A-Za-z0-9]*@[A-Za-z0-9]+.[A-Za-z]/gi;

let errorIcon = document.querySelector('.error');
let message = document.querySelector('#message');
let spanM = document.querySelector('#span');
let submitBtn = document.querySelector('.submit');
let email = document.querySelector('#email').value;
let emailOne = document.querySelector('#email');

errorIcon.style.display = 'none';
message.style.display = 'none';

submitBtn.addEventListener('click', checkTheEmail);

function checkTheEmail() {

    if(!regex.test(email)) {
        errorIcon.style.display = 'block';
        message.style.display = 'block';
        submitBtn.style.marginTop = '2rem';
        emailOne.dataset.turnon = 'false';
    } else {
        errorIcon.style.display = 'none';
        message.style.display = 'none';
        submitBtn.style.marginTop = '0';
        emailOne.dataset.turnon = 'true';
    }
}