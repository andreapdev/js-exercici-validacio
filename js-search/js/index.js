//1. Validate search form: cannot be empty, requires >3 letters

//Real time validation
window.onload= function(){
    let search = document.getElementById("inputSearch");
    search.oninput= function(){
        let searchValue = search.value;
        if (searchValue.length>=3) {
            search.className="form-control is-valid"; 
        }else{
            search.className="form-control is-invalid"; 
        }  
    };
};

//Onsubmit validation
function validateSearch() {
    let search = document.getElementById("inputSearch");
    let searchValue = search.value;
    if (searchValue.length<3) {
        search.className="form-control is-invalid"; 
        return false;
    }else{
        search.className="form-control is-valid"; 
        return true;
    }   
};
