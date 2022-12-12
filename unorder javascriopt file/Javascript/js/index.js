/*

try{}
catch{}
finally{}

a==b / a=5; b=5 / a===b
a=b;


kire sound shuna jayna ?

1. how to print a message
2. Mathematics Operators.
3. Console.log()
4. Conditionals program ( if else) 
5. Loop
6. Events
7. Function
8. Form with events 
9. File process
10. Browser storage

onClick 
onChange
onKeyup
onKeypress
onKeydown


*/

function printMyName(){
	var name = "Mynuddin hasan";
	document.write(name);
	console.log(name);
	alert(name);
	
}


function add(){
	var first;
	var second;
	var result;

	first = document.getElementsByClassName('first')[0].value;
	second = document.getElementsByClassName('first')[1].value;
	result= Number(first)+Number(second);

	var marks = [10,20,30,40];
	var output = document.getElementsByClassName('result')[0].innerHTML
	 = '<p>P Tag '+result+'</p> <p>Second P : '+result+' </p>  ';

	console.log(output);
}


function myKeyUp(){
	var data = document.getElementById('keyupId').value.toUpperCase();
	console.log(data);
}


function myKeyPress(){
	var data = document.getElementById('keyPressId').value;
	console.log(data);

}