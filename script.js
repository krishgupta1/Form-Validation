function clearErrors(){
	errors = document.getElementsByClassName('formerror');
	for(let item of errors){
		item.innerHTML = "";
	}
}




function seterror(id, error){
	element = document.getElementById(id);
	element.getElementsByClassName('formerror')[0].innerHTML = error; 
}

function validateForm(){
	var returnval = true;

	var name = document.forms['myForm']["fname"].value;
	if (name.length<5){
		seterror("name", "*Length of name is too short!")
		returnval = false;
	}

	var email = document.forms['myForm']["femail"].value;
	
	if (email.length>30){
		seterror("email", "*Length of email is too long!")
		returnval = false;
	}
	
	var phone = document.forms['myForm']["fphone"].value;
	
	if (phone.length != 10){
		seterror("phone", "*Phone number should be 10 digit!")
		returnval = false;
	}

	// if (phone.length > 10){
	// 	seterror("phone", "*Phone number should be 10 digit!")
	// 	returnval = false;
	// }


	var password = document.forms['myForm']["fpass"].value;
	
	if (password.length < 8){
		seterror("password", "*Password should be 8 digit!.")
		returnval = false;
	}

	


	return returnval;
}