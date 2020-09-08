//1. Validate search form: cannot be empty, requires >3 letters

//Real time validation + onsumbit!
let search = document.getElementById("inputSearch");
search.oninput= function(){
    let searchValue = search.value;
    if (searchValue.length>=3) {
        search.className="form-control is-valid";
        searchValid=true;
    }else{
        search.className="form-control is-invalid";
        searchValid=false; 
    }  
}