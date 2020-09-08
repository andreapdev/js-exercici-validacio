
//2. Validate login form: email standard format, email and password required

function validateLogin() {
  let email = document.forms["form-login"]["inputEmail"].value;
  let pass = document.forms["form-login"]["inputPassword"].value;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
 
  if (email.match(mailFormat)&&pass.match(passFormat)) {
    email.className="form-control is-valid"
    pass.className="form-control is-valid"
    return true;
  }else{
    if(email.match(mailFormat)==null){
        email.className="form-control is-invalid"
    }
    if(pass.match(passFormat)==null){
        pass.className="form-control is-invalid"   
    }
    return false;
  }
};


