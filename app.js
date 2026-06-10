const PASSWORD = "JoashManicum";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
  } else {
    error.textContent = "Not quite… try again ❤️";
  }
}

/* PWA Service Worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}