let PayFunc = (evt) =>{
	evt.preventDefault();
	alert("You are now supporting the goat!");
}

let payMe = document.querySelector("#Pay");
payMe.addEventListener("submit", PayFunc)

let ColorFav = (evt) =>{
    
    alert("My favorite color is Blue or Green!");
}
let ColorMFav = document.querySelector("#color");
ColorMFav.addEventListener("click", ColorFav)

let PlaceFav = (evt) => {
    alert("My favorite place is anywhere with my family");
}
let PlaceMFave = document.querySelector("#place");
PlaceMFave.addEventListener("click", PlaceFav)

let RitualFav = (evt) =>{
    alert("Hot cocoa in the morning.");
}
let RitualMFav = document.querySelector("#ritual");
RitualMFav.addEventListener("click", RitualFav)