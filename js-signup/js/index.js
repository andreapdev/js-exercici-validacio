//3. Validate signup form: standard email and password format, password repetition, province selection

let email = document.getElementById("inputEmail");
let pass = document.getElementById("inputPassword");
let pass2 = document.getElementById("inputPassword-2");
let prov = document.getElementById("inputProvincia");
let emailValid=false;
let passValid=false;
let pass2Valid=false;
let provValid=false;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


//Email validation
email.oninput= function validateEmail(){
    let emailValue = email.value;
    if (emailValue.match(mailFormat)) {
        email.className="form-control is-valid";
        emailValid=true;
    }else{
        email.className="form-control is-invalid";
        emailValid=false; 
    }
}

//Password 1 validation
pass.oninput= function validatePassword(){
    let passValue = pass.value;
    if (passValue.match(passFormat)) {
        pass.className="form-control is-valid";
        passValid=true;
    }else{
        pass.className="form-control is-invalid";
        passValid=false; 
    }
}
//Password 2 validation (has to match password 1)
pass2.oninput= function validatePassword2(){
    let pass2Value = pass2.value;
    if (pass2Value.match(pass.value)&&passValid==true) {
        pass2.className="form-control is-valid";
        pass2Valid=true;
    }else{
        pass2.className="form-control is-invalid";
        pass2Valid=false; 
    }
}

//Province validation (can't be empty)
prov.onchange= function validateProvince(){
    let provValue = prov.value;
    if (provValue!="") {
        prov.className="browser-default custom-select is-valid";
        provValid=true;
    }else{
        prov.className="browser-default custom-select is-invalid";
        provValid=false; 
    }
}



//Onsubmit validation - only if email and password are valid!
function validateSignup() {
    if(emailValid==true&&passValid==true&&pass2Valid==true&&provValid==true){
        return true;
    }else{
        // validateEmail();
        // validatePassword();
        // validatePassword2();
        // validateProvince();
        return false;
    }
 };