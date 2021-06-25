//1.Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"

//2.Fix the below to alert hello Guvi geek
let f_name=10.5; 
f_name = "Guvi";
l_name = "geek"
let name1 = f_name+l_name;
alert('Hello ' +(name1));

//3.Fix the below to alert sum of two numbers
let a = prompt("First number?");
let a1 = parseInt(a);
let b = prompt("Second number?");
let b1 = parseInt(b)
alert(a1 + b1);


//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

var aa =2>12;
//Don't touch below this
if (aa) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


//How to get the success in console.
let aaa = prompt("Enter a number?");
//Don't modify any code below this
 if(aaa) 
 {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}


