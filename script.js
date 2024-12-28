function getFormvalue() {
    //Write your code here
    const fname=document.getElementById("fname").value;
	const lname=document.getElementById("lname").value; 
	const alertMessage=`${fname} ${lname}`;
	alert(alertMessage);
}
