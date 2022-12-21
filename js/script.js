
// --------------- Password Visibility ---------------

let passwordBtn = document.querySelector(".password-btn");
let passwordBtnIcon = document.querySelector(".password-btn i");
let passwordinput = document.getElementById("input-password");

passwordBtn.addEventListener("click", function () {
    passwordBtnIcon.classList.toggle("fa-eye-slash");
    passwordBtnIcon.classList.toggle("fa-eye");

    let title = passwordBtnIcon.getAttribute("title") == "Show Password" ? "Hide Password" : "Show Password";
    let type = passwordinput.getAttribute("type") == "password" ? "text" : "password";

    passwordBtnIcon.setAttribute("title", title);
    passwordinput.setAttribute("type", type);
})