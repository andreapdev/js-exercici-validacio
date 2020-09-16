//2. Validate login form: standard email format, email and password required
//3. Validate signup form: standard email and password format, password repetition, province selection

let loginCol=document.querySelector("#col-login");
let signupCol=document.querySelector("#col-signup");

let loginEmail = document.querySelector("#login-inputEmail");
let loginPass = document.querySelector("#login-inputPassword");
let loginEmailValid = false;
let loginPassValid = false;

let signupEmail = document.querySelector("#signup-inputEmail");
let signupPass = document.querySelector("#signup-inputPassword");
let signupPass2 = document.querySelector("#signup-inputPassword-2");
let signupProv = document.querySelector("#signup-inputProvincia");
let signupEmailValid = false;
let signupPassValid = false;
let signupPass2Valid = false;
let signupProvValid = false;

let signupBtn=document.querySelector("#btn-goToSignup");
let loginBtn=document.querySelector("#btn-goToLogin");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


//EventListeners
signupBtn.addEventListener("click", profileToggle);
loginBtn.addEventListener("click", profileToggle);

loginEmail.addEventListener("input", loginValidateEmail);
loginPass.addEventListener("input", loginValidatePassword);

signupEmail.addEventListener("input", signupValidateEmail);
signupPass.addEventListener("input", signupValidatePassword);
signupPass2.addEventListener("input", signupValidatePassword2);
signupProv.addEventListener("click", signupValidateProvince);

//Functions

//Go to Signup
function profileToggle(){
    loginCol.classList.toggle("d-none");
    signupCol.classList.toggle("d-none");
    signupEmail.value=loginEmail.value;
}

//Email validation

function signupValidateEmail() {
  let signupEmailValue = signupEmail.value;
  if (signupEmailValue.match(mailFormat)) {
    signupEmail.className = "form-control is-valid";
    signupEmailValid = true;
    // console.log("emailok");
  } else {
    signupEmail.className = "form-control is-invalid";
    signupEmailValid = false;
    // console.log("emailerror");
  }
}

//Password 1 validation

function signupValidatePassword() {
  let signupPassValue = signupPass.value;
  if (signupPassValue.match(passFormat)) {
    signupPass.className = "form-control is-valid";
    signupPassValid = true;
    // console.log("passok");
  } else {
    signupPass.className = "form-control is-invalid";
    signupPassValid = false;
    // console.log("passerror");
  }
}

//Password 2 validation (has to match password 1)

function signupValidatePassword2() {
  let signupPass2Value = signupPass2.value;
  if (signupPass2Value.match(signupPass.value) && signupPassValid === true) {
    signupPass2.className = "form-control is-valid";
    signupPass2Valid = true;
    //console.log("pass2ok");
  } else {
    signupPass2.className = "form-control is-invalid";
    signupPass2Valid = false;
    //console.log("pass2error");
  }
}

//Province validation (can't be empty)

function signupValidateProvince() {
  let signupProvValue = signupProv.value;
  if (signupProvValue !== "") {
    signupProv.className = "browser-default custom-select is-valid";
    signupProvValid = true;
    //console.log("provok");
  } else {
    signupProv.className = "browser-default custom-select is-invalid";
    signupProvValid = false;
    //console.log("proverror");
  }
}
//Email validation
function loginValidateEmail() {
  let loginEmailValue = loginEmail.value;
  if (loginEmailValue.match(mailFormat)) {
    loginEmail.className = "form-control is-valid";
    loginEmailValid = true;
  } else {
    loginEmail.className = "form-control is-invalid";
    loginEmailValid = false;
  }
};

//Password validation
function loginValidatePassword() {
  let loginPassValue = loginPass.value;
  if (loginPassValue.match(passFormat)) {
    loginPass.className = "form-control is-valid";
    loginPassValid = true;
  } else {
    loginPass.className = "form-control is-invalid";
    loginPassValid = false;
  }
};

//Onsubmit validation - only if email and password are valid!
function validateLogin() {
  if (loginEmailValid === true && loginPassValid === true) {
    return true;
  } else {
      loginValidateEmail();
      loginValidatePassword();
    return false;
  }
}



//Onsubmit validation - only if all are valid, if not, show errors

function validateSignup() {
  if (
    signupEmailValid === true &&
    signupPassValid === true &&
    signupPass2Valid === true &&
    signupProvValid === true
  ) {
    return true;
  } else {
    signupValidateEmail();
    signupValidatePassword();
    signupValidatePassword2();
    signupValidateProvince();
    return false;
  }
}
