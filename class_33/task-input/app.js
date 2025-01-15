


let  h1 = document.querySelector('h1')
let  input = document.querySelector('input')


input.addEventListener('input'  , (event)=>{
h1.innerText = event.target.value;
})