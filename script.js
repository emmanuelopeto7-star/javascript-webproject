const quotes = [
  "Whatever life throws at you duck it and let it hit someone else",
  "Work hard so you can shop harder",
  "If the apple fell for Newton a bad bih can fall for you",
  "You miss 100% of the shots you don't take",
  "If someone is talking behind your back just fart"
];

function ageInMonths(years) {
  return years * 12;
}

function checkAge(age) {
  if (age >= 18) {
    return "You can access adult content";
  } else {
    return "You are too young to access adult content";
  }
}

function showQuotes() {
  let output = "";
  for (let i = 0; i < quotes.length; i++) {
    output += `<p>${i + 1}. ${quotes[i]}</p>`;
  }
  document.getElementById("quotes-container").innerHTML = output;
}

function displayResults(name, age) {
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
  document.getElementById("age-info").textContent =
    `You are ${age} years old, which is ${ageInMonths(age)} months!`;
  document.getElementById("content-section").textContent = checkAge(age);
  showQuotes();
  document.getElementById("form-section").style.display = "none";
  document.getElementById("results").style.display = "block";
}

function saveUser() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  if (!name) { alert("Please enter your name!"); return; }
  if (!age || age < 1) { alert("Please enter a valid age!"); return; }
  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);
  displayResults(name, age);
}

function resetUser() {
  localStorage.removeItem("userName");
  localStorage.removeItem("userAge");
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("form-section").style.display = "block";
  document.getElementById("results").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function() {
  const savedName = localStorage.getItem("userName");
  const savedAge = localStorage.getItem("userAge");
  if (savedName && savedAge) {
    displayResults(savedName, parseInt(savedAge));
  }
});

