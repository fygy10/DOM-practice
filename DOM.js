const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey I am red'
content.style.color = 'red'
container.appendChild(content);

const title = document.createElement('h3');
title.classList.add('title');
title.textContent = 'I am a blue h3!'
title.style.color = 'blue';
container.appendChild(title);

const parentTwo = document.createElement ('div');
parentTwo.classList.add('parentTwo');
parentTwo.style.borderBlockColor = 'black'
parentTwo.style.backgroundColor = 'pink'

const childOne = document.createElement('h1');
childOne.classList.add('childOne');
childOne.textContent = 'I am a div';
parentTwo.appendChild(childOne);

const childTwo = document.createElement('p');
childTwo.classList.add('childTwo');
childTwo.textContent = 'ME TOO!';
parentTwo.appendChild(childTwo);

container.appendChild(parentTwo);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

/*  const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert("Hello World");
    });
});