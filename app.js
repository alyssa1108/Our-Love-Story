const PASSWORD = "JoashManicum";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");

    showPage("cover");
  } else {
    error.textContent = "Not quite… try again ❤️";
  }
}

function showPage(page) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

/* PWA */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
