
// --------------- Upload Picture Name ---------------

let upload = document.querySelector("#upload");

upload.addEventListener("change", function (event) {
    let path = event.target.files[0].name;
    let fileUploadName = document.querySelector(".file-upload-label span");
    fileUploadName.innerText = path;
})


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

// --------------- Password Strength Meter & Requirement Checker ---------------

let passStrength = document.querySelector(".password-strength")
let strengthMeter = document.querySelector('.strength-meter');

let lengthOfChar = document.querySelector('.length-char');
let specialChar = document.querySelector('.special-char');
let uppercaseChar = document.querySelector('.uppercase-char');

let lengthOfCharIcon = document.querySelector('.length-char i');
let specialCharIcon = document.querySelector('.special-char i');
let uppercaseCharIcon = document.querySelector('.uppercase-char i');

passwordinput.addEventListener("input", function () {


    let strength = 25;
    let password = passwordinput.value;
    let strengthTxt = document.querySelector('.password-strength-quality span')

    // -------------- display meter -------------
    if (password.length >= 1) {
        passStrength.classList.remove("strength-hidden")
    } else {
        passStrength.classList.add("strength-hidden")
    }
    // -------------- requirement -------------

    if (password.length >= 6) {
        lengthOfChar.style.color = "hsl(170, 78%, 26%)";
        lengthOfCharIcon.classList.add("fa-check");
        lengthOfCharIcon.classList.remove("fa-minus");
        strength += 25;
    } else {
        lengthOfChar.style.color = "hsl(233, 7%, 23%)";
        lengthOfCharIcon.classList.add("fa-minus");
        lengthOfCharIcon.classList.remove("fa-check");
    }

    if (password.match(/[\!\@\#\$\%\^\&\*\(\_\=\+\>\<\,\.\'\)]/)) {
        specialChar.style.color = "hsl(170, 78%, 26%)";
        specialCharIcon.classList.add("fa-check");
        specialCharIcon.classList.remove("fa-minus");
        strength += 25;
    } else {
        specialChar.style.color = "hsl(233, 7%, 23%)";
        specialCharIcon.classList.add("fa-minus");
        specialCharIcon.classList.remove("fa-check");
    }

    if (password.match(/[A-Z]/)) {
        uppercaseChar.style.color = "hsl(170, 78%, 26%)";
        uppercaseCharIcon.classList.add("fa-check");
        uppercaseCharIcon.classList.remove("fa-minus");
        strength += 25;
    } else {
        uppercaseChar.style.color = "hsl(233, 7%, 23%)";
        uppercaseCharIcon.classList.add("fa-minus");
        uppercaseCharIcon.classList.remove("fa-check");
    }

    strengthMeter.style.setProperty('--strength', strength)
    if (strength >= 0 && strength <= 25) {
        strengthMeter.style.backgroundColor = "hsl(342, 89%, 48%)"
        strengthTxt.innerText = "Bad";
    } else if (strength > 25 && strength <= 50) {
        strengthMeter.style.backgroundColor = "hsl(35, 79%, 66%)"
        strengthTxt.innerText = "Week";
    } else if (strength > 50 && strength <= 75) {
        strengthMeter.style.backgroundColor = "hsl(170, 78%, 36%)"
        strengthTxt.innerText = "Good";
    }
    else if (strength > 75) {
        strengthTxt.innerText = "Strong";
    }
});

passwordinput.addEventListener("blur", function () {
    let password = passwordinput.value;
    if (password.length < 6) {
        lengthOfChar.style.color = "hsl(342, 89%, 48%)";
        lengthOfCharIcon.classList.add("fa-xmark");
    }

    if (password.match(/[\!\@\#\$\%\^\&\*\(\_\=\+\>\<\,\.\'\)]/) === null) {
        specialChar.style.color = "hsl(342, 89%, 48%)";
        specialCharIcon.classList.add("fa-xmark");
    }

    if (password.match(/[A-Z]/) === null) {
        uppercaseChar.style.color = "hsl(342, 89%, 48%)";
        uppercaseCharIcon.classList.add("fa-xmark");
    }
})


// --------------- Product Selection ---------------

let products = document.querySelectorAll(".product-item");
let productIcon = document.querySelectorAll(".product-icon");

products.forEach(product => {
    product.addEventListener("click", function () {
        product.classList.toggle("select");
        product.querySelector('.product-icon').classList.toggle("icon-hide");
    })
})

$(document).ready(function () {
    $("#next-btn").click(function () {
        $("form").find("fieldset.show").next().addClass("show");
        $("form").find("fieldset.show").prev().removeClass("show");
    })
    $("#back-btn").click(function () {
        $("form").find("fieldset.show").prev().addClass("show");
        $("form").find("fieldset.show").next().removeClass("show");
    })
})

// --------------- Contact Selection ---------------

let choiceBtn = document.querySelectorAll(".choice-btn");
let checkboxInput = document.querySelectorAll('.checkbox-input');

choiceBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        btn.classList.toggle('focus');
        let input = btn.querySelector(".checkbox-input");
        input.toggleAttribute("checked")
        input.classList.toggle('checked');
    })
})

// --------------- Footer Section ---------------



$(document).ready(function () {
    $("#next-btn").click(function () {
        $("form").find("fieldset.current").next().addClass("current");
        $("form").find("fieldset.current").prev().removeClass("current");
    })
    $("#back-btn").click(function () {
        $("form").find("fieldset.current").prev().addClass("current");
        $("form").find("fieldset.current").next().removeClass("current");
    })
})


let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");

let fieldOne = document.getElementById("field-1");
let fieldTwo = document.getElementById("field-2");
let fieldThree = document.getElementById("field-3");

let indicatorWidth = document.querySelector(".indicator-width");
let currentStep = document.querySelector(".current-step");

nextBtn.addEventListener("click", function () {
    if (fieldOne.classList.contains("current")) {
        backBtn.style.visibility = "visible";
        currentStep.innerText = "2";
        indicatorWidth.style.width = "67%";
    }
    if (fieldTwo.classList.contains("current")) {
        indicatorWidth.style.width = "100%";
        currentStep.innerText = "3";
        submitBtn.classList.remove("none");
        nextBtn.classList.add("none");
    }
})

backBtn.addEventListener("click", function () {
    if (fieldTwo.classList.contains("current")) {
        backBtn.style.visibility = "hidden";
        indicatorWidth.style.width = "33%";
        currentStep.innerText = "1";
    }
    if (fieldThree.classList.contains("current")) {
        indicatorWidth.style.width = "67%";
        currentStep.innerText = "2";
        submitBtn.classList.add("none");
        nextBtn.classList.remove("none");
    }
})

