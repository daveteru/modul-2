const test2 = document.getElementById('test2');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');


redBtn.addEventListener('click', (e) => {
  test2.style.backgroundColor = 'red';
})

blueBtn.addEventListener('click', (e) => {
  test2.style.backgroundColor = 'blue';
})

const allbutton = document.querySelectorAll('button')
console.log(allbutton)