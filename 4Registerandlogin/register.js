window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    let form = document.forms["myRegister"];
    let errorMsg = document.getElementById("errormsg")

    if(form["firstname"].value == ""){
        errorMsg.innerHTML = "First name is REQUIRED!"
        return false;
    }
    if(form["lastname"].value == ""){
        errorMsg.innerHTML = "Last name is REQUIRED!"
        return false;
    }
    if(form["gender"].value == ""){
        errorMsg.innerHTML = "Gender is REQUIRED!"
        return false;
    }
    if(form["bday"].value == ""){
        errorMsg.innerHTML = "Birthday is REQUIRED!"
        return false;
    }
    if(form["email"].value == ""){
        errorMsg.innerHTML = "Email is REQUIRED!"
        return false;
    }
    if(form["username"].value == ""){
        errorMsg.innerHTML = "Username is REQUIRED!"
        return false;
    }
    if(form["password"][0].value == "" || form["password"][1].value == ""){
        errorMsg.innerHTML = "Password is REQUIRED!"
        return false;
    }
    if(form["password"][0].value != form["password"][1].value) {
        errorMsg.innerHTML = "Password is INCORRECT!"
        return false;
    }
}