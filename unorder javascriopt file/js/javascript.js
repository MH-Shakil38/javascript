/*
function remStyle(){

}*/
/*
class Book{

	constructor(group,intValue){
		console.log("Here is a group : "+group);
	}


	programmming(){
		return "You may select NodeJs as a  Software development Tools";
	}

	bookName(name){
		console.log("Getting value from : "+name);
	}
	result(name,roll,result,group){
		document.write('<br>'+name+'<br>'+roll+'<br>'+result+'<br>'+group);
	}
	//Address(name,nationality)

}

var access = new Book("CSE",10);
access.bookName("PHP BOOK");
console.log(access.programmming());
access.result('maunuddin hasan','173002322E',3.50,'CSE');

function name(name,age,mobile){
			this.name	=name;
			this.age	=age;
			this.mobile	=mobile;
			this.display= function(){
				document.write('<br>')
				document.write(this.name);
				document.write('<br>')
				document.write(this.age);
				document.write('<br>')
				document.write(this.mobile);
			}
		}
		var name1= new name('maynuddin',24,234567890);
		name1.display();


			function input_value(){
			var input=prompt('Please Enter a Number');
			while(!input){
				var input=prompt('fillup this file');
				/*if (input) {
					document.getElementById('output').innerHTML=('<br>'+input);
				}else{
				var input=parseInt(prompt('Please Enter a Number'));
			}
				if (input) {
					document.getElementById('output').innerHTML=('<br>'+input);
				}else{
				var input=parseInt(prompt('Please Enter a Number'));
				
			}*/
				
			/*}
			if (input) {
					squert=Math.sqrt(input);
					document.getElementById('output').innerHTML=('<br>'+squert);

			}

			}*/
				








				//document.getElementById('output').innerHTML=('<br>'+input);
				
/*var photos= ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'];


var len=photos.length;
var time=1000;
var count=0;	
function next_img(){
	count++;
	if (count>photos.length) {
		count=0;
	}
	document.img_slide.src=photos[count];
	

}
function prev_img(){

}*/






/*function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace("Microsoft","W3Schools");
  document.getElementById("demo").innerHTML = txt;
}*/





function thisobject(){
	this.a=2000;
	this.b=5000;
	this.c=4000;
	this.d=3000;
	this.func=function(){
		//this.x=this.a+this.b;
		return this.a+this.b;
	}
}
var y = new thisobject();
document.write(y.func()); 







