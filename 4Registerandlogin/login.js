window.onload = loginLoad;
function loginLoad() {
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin() {
	var form = document.getElementById("myLogin");
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let Username = urlParams.get('username')
	let Password = urlParams.get('password')
	let newuser = form["username"].value
	let newpassword = form["password"].value

	console.log(Username,newuser);
	console.log(Password,newpassword);
	
	
	if (newuser != Username || newpassword != Password) {
		alert("Username Or Password Is Incorrect! Please try again.")
		return false;
	}

	var x = document.forms["myLogin"]["username"];
	alert("WELCOME! :) " + x.value);
	return false;
}