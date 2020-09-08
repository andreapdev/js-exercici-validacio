
//2. Validate login form: email standard format, email and password required

let email = document.getElementById("inputEmail");
let pass = document.getElementById("inputPassword");
let emailValid=false;
let passValid=false;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

//Email validation
email.oninput= function(){
    let emailValue = email.value;
    if (emailValue.match(mailFormat)) {
        email.className="form-control is-valid";
        emailValid=true;
    }else{
        email.className="form-control is-invalid";
        emailValid=false; 
    }
}

//Password validation
pass.oninput= function(){
    let passValue = pass.value;
    if (passValue.match(passFormat)) {
        pass.className="form-control is-valid";
        passValid=true;
    }else{
        pass.className="form-control is-invalid";
        passValid=false; 
    }
}

//Onsubmit validation - only if email and password are valid!
function validateLogin() {
    if(emailValid==true&&passValid==true){
        return true;
    }else{
        return false;
    }
 };
