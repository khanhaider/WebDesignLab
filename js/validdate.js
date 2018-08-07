function checkEmail(e){
	var element-e.target;
	if(/[^a-zA-Z0-9@_]/.test(element.value)){
		alert("Email is invalid! only charaters a-z A-Z 0-9 @ . _ are allowed.");
		element.value="";
		return false;
	}
}