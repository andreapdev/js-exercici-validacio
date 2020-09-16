//1. Validate search form: cannot be empty, requires >3 letters

//Real time validation
let search = document.querySelector("#search-input");
search.oninput= function(){
    let searchValue = search.value;
    if (searchValue.length>=3) {
        search.className="form-control is-valid";
        let searchValid=true;
    }else{
        search.className="form-control is-invalid";
        let searchValid=false;
    }  
}