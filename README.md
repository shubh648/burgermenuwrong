
## Wrong Implementation:

The event for collapsing the "menu navigation" is on the div element which contain body of home screen and it's not a good practice to add event listener on the body and with that the on click event listener will listen for every click event on body even after the collapse of the "burger menu navigation".

## Instructions for running project
```
git clone https://github.com/shubh648/burgermenuwrong.git
cd eventbubbling
npm i
npm start
```
