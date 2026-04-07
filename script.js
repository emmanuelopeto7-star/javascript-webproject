const quotes = [
    "whatever life throws at you duck it and let it hit someone else",
    "work hard so you can shop harder",
    "if the apple fell for Newton a bad bih can fall for you"
    "you miss 100% of the shots you don't take"
    "if someone is talking behind your back just fart "
];
function ageinmonts(years) {
    return years * 12;
}
function checkage(age) {
    if (age >= 18) {
        return "you can access adult content";
    } else {
        return "you are too young to access adult content";
    }
}
function showquotes() {
    let quotes="";
    for (let i=1; i<=5; i++) {
        quotes += "quote " + i + ": " + quotes[i-1] + "\n";
    }
}
document.getElementById("quotes-container").innerHTML = showquotes();
function displayresults(name, age) {
    document.getElementById("greeting").textContent = `hello, ${name}!`;
    document.getElementById("age").textContent = `you are ${age} years old, which is ${ageinmonts(age)} months. ${checkage(age)}`;
}
function saveuser() {
    document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  if (!name) { alert("Please enter your name!"); return; }
  if (!age || age < 1) { alert("Please enter a valid age!"); return; }
  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);
  displayResults(name, age);
}
window.addEventListener("DOMContentLoaded", function() {
  const savedName = localStorage.getItem("userName");
  const savedAge = localStorage.getItem("userAge");
  if (savedName && savedAge) {
    displayResults(savedName, parseInt(savedAge));
  }
});

