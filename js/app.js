

$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO|(EE)|(DEE)|(EX)|(DEX)|(ME)|()DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})/i.test(this.value)){
			alert("Invalid Roll No!");
			this.value="";
			$(this).focus();
		}
	});

	$('#sname').on('keypress',function(e){
		if(/[^a-zA-Z ]/.test(e.key)){
			alert("Invalid Name only Alphabets and spaces allowed");
			this.value="";
			$(this).focus();
			return false;
		}
	});
});