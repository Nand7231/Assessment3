console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let compliment = (evt) =>{
	alert("I knew you were cool!");
}
let duck = document.querySelector("img");
duck.addEventListener("mouseover", compliment);