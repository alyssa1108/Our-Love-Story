const CORRECT_PASSWORD = "JoashManicum";

const loginPage = document.getElementById("login-page");
const bookContainer = document.getElementById("book-container");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

function checkPassword(){

    const enteredPassword = passwordInput.value.trim();

    if(enteredPassword === CORRECT_PASSWORD){

        loginPage.style.display = "none";
        bookContainer.style.display = "flex";

    }else{

        error.textContent = "Incorrect Password ❤️";
    }
}

/* ENTER KEY */

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();
    }
});

/* FLIPBOOK */

const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");
    });

    pages[index].classList.add("active");
}

showPage(currentPage);

/* NEXT */

nextBtn.addEventListener("click",()=>{

    if(currentPage < pages.length - 1){

        currentPage++;
        showPage(currentPage);
    }
});

/* PREVIOUS */

prevBtn.addEventListener("click",()=>{

    if(currentPage > 0){

        currentPage--;
        showPage(currentPage);
    }
});
