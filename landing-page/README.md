# Landing Page Project
Multi-serction landing page with the dynamic navigation menu. the section actively being viewed is differentiated by yellow colour. Additionally, when user clicks on a navigation item, the item should scroll to the appropriate section rather than giving a default jump.

## DYNAMIC NAVIGATION MENU
1. I've selected all 'section' tags and the unordered list with the ID of 'navbar__list'; 
2. Within a for loop i've created two elements - 'li' and 'a';
3. Because I want each new section to differentiate from each other by a number, I've concatenated my desired text and added an i element. Now we can see the text on top of the page.
i element is going through the loop and in our case increases by one depending on the number of classes/sections added. We know that the count of an array starts from 0, and because we want our count to start from 1(section1, section2 etc..)I've equaled i to 1. 
4. In order to differentiate our list-items and anchor elements from each other I've set an attribute with name('href') and value ('#section' + 1);
5. The last step was to append both 'a' and 'li' items. 

## SMOOTH SCROOLLING TO EACH SECTION
In my navBarMenu function i've already set an attribute of href and because of that it was scrolling down to each section on click. It was not scrolling smoothly though. In order to make it work, i've selected all anchor elements with href attribute and added an event listener 'click'. Because we want to use scrollIntoView(), i've cancelled current event of 'click' and set scrollIntoview in to desired starting position and it's behaviour. 

## COLOR OF LIST ITEMS CHANGES ON SCROLL
So far the most difficult part of this project. Function compares the positions of the elements with window.scrollY and offsetTop and by that either adding or removing classes. When scrolling through the browser, if you are, let's say on section 2, section 2 on nav bar would therefore be highlighted. 
