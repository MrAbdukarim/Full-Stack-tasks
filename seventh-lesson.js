// let num1 = document.querySelector('#num1');
// let num2 = document.querySelector('#num2');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', (e) => {
//     console.log(Number(num1.value) + Number(num2.value));
//     num1.value = '';
//     num2.value = '';
// })

// let btn = document.querySelector('button')
// btn.addEventListener('click', e => {
//     if (document.querySelector('button').textContent == "ON") {
//         document.querySelector('input').type = 'text';
//         document.querySelector('button').textContent = "OFF"
//     } else{
//         document.querySelector('input').type = 'password';
//         document.querySelector('button').textContent = "ON"
//     }
// })

document.querySelector('#dark-mode').addEventListener('click', (e) => {
    if (document.querySelector('#dark-mode').textContent === 'Dark mode') {
        document.body.style.backgroundColor = '#000000';
        document.querySelector('h1').style.color = '#fff';
        document.querySelector('h1').innerText = 'At the moment, this page dark mode';
        document.querySelector('#dark-mode').textContent = 'White mode';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('h1').style.color = '#000000';
        document.querySelector('h1').innerText = 'At the moment, this page white mode';
        document.querySelector('#dark-mode').textContent = 'Dark mode';
    }
})