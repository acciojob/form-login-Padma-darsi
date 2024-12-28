function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
    const fname=document.getElementById("fname").value;
	const lname=document.getElementById("lname").value; 
	const alertMessage=`${fname} ${lname}`;
	alert(alertMessage);
}
