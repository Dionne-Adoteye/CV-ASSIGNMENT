//get items from form and store them
let store = window.localStorage.getItem("first");
let store1 = window.localStorage.getItem("middle");
let store2 = window.localStorage.getItem("last");

//translate saved items in the static html file
document.getElementById("name").innerHTML = `${store} ${store1} ${store2}`;

let store4 = window.localStorage.getItem("email");
document.getElementById("email").innerHTML = `${store4}`;

let store5 = window.localStorage.getItem("number");
document.getElementById("number").innerHTML = `${store5}`;

let store6 = window.localStorage.getItem("address")
document.getElementById("address").innerHTML = `${store6}`;