const correctPassword = "JoashManicum";

function checkPassword(){
const input = document.getElementById("password").value;

if(input === correctPassword){
document.getElementById("login-page").style.display="none";
document.getElementById("book-container").style.display="flex";
}else{
document.getElementById("error").innerText="Wrong password ❤️";
}
}

const pages = document.querySelectorAll(".page");
let current = 0;

function showPage(i){
pages.forEach(p=>p.classList.remove("active"));
pages[i].classList.add("active");
}

document.getElementById("nextBtn").onclick=()=>{
if(current < pages.length-1){
current++;
showPage(current);
}
};

document.getElementById("prevBtn").onclick=()=>{
if(current > 0){
current--;
showPage(current);
}
};

showPage(0);
