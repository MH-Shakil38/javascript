function addition(){

	var number1=document.getElementsByClassName('first')['0'].value;
	var number2=document.getElementsByClassName('Second')['0'].value;
	var result=Number(number1)+Number(number2);
	var output = document.getElementsByClassName('try')[0].innerHTML
	 = '<p>P Tag '+result+'</p> <p>Second P : '+result+' </p>  ';

	console.log(output);


}
function printmyname(){
	
	alert("maynuddin hasan shakil");
}
function popup(){
	alert("pop up is working")
}