
//Dynamic navigation menu(every time another section is added, navigation bar automatically updates)
function navBarMenu() {
    let navMenu = document.getElementById('navbar__list');
    let mainSection = document.getElementsByTagName('section');
    for (let i = 1; i <= mainSection.length; i++) {
        let sectionElement = document.createElement('li');
        let navLink = document.createElement('a');
        navLink.innerHTML = 'section ' + i;
        navLink.classList.add('nav-link');
        sectionElement.classList.add('list-item');
        navLink.setAttribute('href', '#section' + i);
        sectionElement.appendChild(navLink);
        navMenu.appendChild(sectionElement);
    }
}
navBarMenu();

//smooth scrolling to each section
document.querySelectorAll('a[href^=\"#\"]').forEach((a) => {
    a.addEventListener('click', function(e) {
        e.preventDefault(); //prevents event if it's cancelable, default action of 'click' will not occur
        let anchorLink = document.querySelector(this.getAttribute('href')); //this refers to an element that received the event
        anchorLink.scrollIntoView({ //scrolls element in to the visible area of the browser window
            block: 'start',
            alignTop: true,
            behavior: 'smooth'
        });
    });
});

//color of list items changes on scroll
const linkstoHighlight = document.querySelectorAll('.list-item'); 
const sections = document.querySelectorAll('section'); 
function sectionHighlight() {
    let i = sections.length;
    if(window.scrollY >= sections[0].offsetTop){ //comparison - if the number of pixels scolled vertically is more or equal to the offset top of the first section.
        while(--i && window.scrollY + 150 < sections[i].offsetTop) {} //A while loop checks if a pre-decrement and number of pixels scrolled vertically + 150 is less than the offset top of the length of the sections. 
        // If specified condition is true, the loop calls each item of .list-item in order and removes class 'active' and adds class 'active' to a current .list-item scrolled on to. 
        linkstoHighlight.forEach((link) => link.classList.remove('active')); 
        linkstoHighlight[i].classList.add('active'); 
    } else {
        linkstoHighlight.forEach((link) => link.classList.remove('active'));
    }
}
sectionHighlight();
window.addEventListener('scroll', sectionHighlight);






