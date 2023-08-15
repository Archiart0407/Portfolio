

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length; i++) {

//     listItems[i].style.fontSize = '2rem';

// } 


// Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding Elements 

// ul.appendChild(li)

// Modifying the text

// li.innerText = 'X-Men';

// Modifying Attributes and Classes 
// li.classList.add('list-items');

// console.log(li.classList.contains('list-items'));

// Remove Elements 

// li.remove();

// Parent Node Traversal

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

// Sibling Node Traversal

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// element.addEventListener('click', function);

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn () {
//     alert('I also love javascript');
// };

// buttonTwo.addEventListener('click', alertBtn);

// // mouse hover 

// const newBackgroundColor = document.querySelector('.box-3');

// function changeBgColor() {
//     newBackgroundColor.style.backgroundColor = 'blue';
// };

// newBackgroundColor.addEventListener('mouseover', changeBgColor);

// const revealBtn = document.querySelector('.reveal-btn');

// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent() {
//     if (hiddenContent.classList.contains('reveal-btn')) {
//         hiddenContent.classList.remove('reveal-btn');
//     } else {
//         hiddenContent.classList.add('reveal-btn');
//     }
// }

// revealBtn.addEventListener('click', revealContent);

// window.addEventListener('click', function() {
//     console.log('Window');
// }, true);

// document.addEventListener('click', function() {
//     console.log('Document');
// }, true);

// document.querySelector('.div2').addEventListener('click', function() {
//     console.log('DIV 2');
// }, true);

// document.querySelector('.div1').addEventListener('click', function() {
//     console.log('DIV 1');
// }, true);

// document.querySelector('button').addEventListener('click', function(e) {
//     console.log(e.target.innerText = 'Clicked!');
// }, true);


// document.querySelector('#football').addEventListener
// ('click', function(e) {
//     console.log('football is clicked');

//     const target = e.target;

//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightblue';
//     }
// });

// Project One

function changeContentAndRotate(containerId) {
    // Get the container elements
    const container = document.getElementById(containerId);
    const imgContainer = container.querySelector(".img-container");
    const content = container.querySelector(".content");

    // Change the content (replace with your desired content)
    content.innerHTML = "<p>New content here...</p>";

    // Add the "rotating" class to trigger the rotation with CSS transition
    imgContainer.classList.add("rotating");

    // Wait for a short delay (50ms) to allow the class to take effect and then remove it
    setTimeout(() => {
        imgContainer.classList.remove("rotating");
    }, 50);
}