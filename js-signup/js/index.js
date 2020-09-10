//3. Validate signup form: standard email and password format, password repetition, province selection

let email = document.querySelector("#inputEmail")
let pass = document.querySelector("#inputPassword");
let pass2 = document.querySelector("#inputPassword-2");
let prov = document.querySelector("#inputProvincia");
let isEmailValid = false;
let isPassValid = false;
let isPass2Valid = false;
let isProvValid = false;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

//Functions

//Email validation

function validateEmail() {
    let emailValue = email.value;
    if (emailValue.match(mailFormat)) {
      email.className = "form-control is-valid";
      isEmailValid = true;
      //console.log("emailok");

    } else {
      email.className = "form-control is-invalid";
      isEmailValid = false;
      //console.log("emailerror");

    }
  };

//Password 1 validation

function validatePassword() {
let passValue = pass.value;
if (passValue.match(passFormat)) {
    pass.className = "form-control is-valid";
    isPassValid = true;
    //console.log("passok");
} else {
    pass.className = "form-control is-invalid";
    isPassValid = false;
    //console.log("passerror");
}
};

//Password 2 validation (has to match password 1)

  function validatePassword2() {
    let pass2Value = pass2.value;
    if (pass2Value.match(pass.value) && isPassValid == true) {
      pass2.className = "form-control is-valid";
      isPass2Valid = true;
      //console.log("pass2ok");
    } else {
      pass2.className = "form-control is-invalid";
      isPass2Valid = false;
      //console.log("pass2error");
    }
};

//Province validation (can't be empty)

function validateProvince() {
let provValue = prov.value;
if (provValue != "") {
    prov.className = "browser-default custom-select is-valid";
    isProvValid = true;
    //console.log("provok");
} else {
    prov.className = "browser-default custom-select is-invalid";
    isProvValid = false;
    //console.log("proverror");
}
};


//EventListeners

email.addEventListener("input", validateEmail);
pass.addEventListener("input", validatePassword);
pass2.addEventListener("input", validatePassword2);
prov.addEventListener("click", validateProvince);

//Onsubmit validation - only if all are valid, if not, show errors

function validateSignup() {
  if (
    isEmailValid == true &&
    isPassValid == true &&
    isPass2Valid == true &&
    isProvValid == true
  ) {
    return true;
  } else {
      validateEmail();
      validatePassword();
      validatePassword2();
      validateProvince();
    return false;
  }
}
