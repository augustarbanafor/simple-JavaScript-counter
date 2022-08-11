// create a counter and set an initial value of 0 to it
// grab/select the buttons using the the selector, querySelectorAll() method
/*add an event listener to the buttons by
    attaching the forEach() method to the btns which takes in a callback fn that loops over the list, adding event listeners to each item  on the nodelist
*/
// the click event should fire a callback funtion that employs
    //e.currentTarget evnt property
    //classlist property
    //the contains() method
    //if statements

let counter = 0;


let counterValue = document.querySelector('.counterValue');
let buttons = document.querySelectorAll('.btn');


buttons.forEach((btn) => {  //takes a callback fn. The parameter represent each btn
    btn.addEventListener('click', (e) => {
       let currentBtn = e.currentTarget.classList;

       //conditionals to either increament or decrement the counter value
       if(currentBtn.contains('decrease')){
           counter--
       }else if(currentBtn.contains('increase')){
           counter++
       }else{
           counter = 0
       }

       //conditionals to change the counter value's color
       if(counter < 0){
           counterValue.style.color = 'red';
       } else if (counter > 0){
           counterValue.style.color = 'green';
       } else{
           counterValue.style.color = 'initial';
       }
       counterValue.innerText = counter;
    })
})

