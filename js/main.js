let cubeButton = document.querySelector('.cube');
let adviceNumber = document.querySelector('.number');
let adviceQuote = document.querySelector('.quote');

window.addEventListener('load', () =>{ApiFunction()});
cubeButton.addEventListener('click', () =>{ApiFunction()});

function ApiFunction(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        adviceNumber.innerHTML = 'ADVICE #' + data['slip']['id']; 
        adviceQuote.innerHTML = data['slip']['advice'] ; 
    });
}
