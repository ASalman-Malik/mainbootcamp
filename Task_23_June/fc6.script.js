//1. How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');

if (Number(value) === 4) 
{
      console.log("You hit a Four");
} 
else if (Number(value) === 6) 
{
      console.log("You hit a Six");
} 
else 
{
      console.log("I couldn't figure out");
}

//2.Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome the Employee':(login == 'Director') ? 'Greetings' :(login == '') ? 'No login' :'';
console.log(message);

//3.Fix the code to welcome the boss
// You cant change the value of the msg
let message;
if(null || 2 || undefined )
{
 let message = "Welcome Boss";
}
else
{
 let message = "Go Away";
}
console.log(message);

//4.Change the code to print
//3
//
//2
//
//1
//You can change only 2 characters
let i = 3;
while (i) 
{
    console.log(i);
    --i;
}

//5.Change the code to print 1 to 10 in 4 lines
let num = 1
//console.log(num)
//num += 3
//console.log(num)
//num += 3
//console.log(num)
//num += 3
//console.log(num)
for(num=1;num<=10;num = num+3)
{
    console.log(num);
}

//6.Change the code to print even numbers
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
}

//7.Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    //console.log('Wrapped ${'gifts[i]'} and added a bow!');
    console.log("Wrapped "+gifts[i]+" and added a bow!");
  }

  //8.Fix the code to disarm the bomb.
  let countdown = 100;while (countdown > 0) {
    countdown--;
    if(countdown == 0)
    {
        break;
     console.log("bomb triggered");
    }
    else{
        console.log("Disarmed")
    }
  }

  //
  
  var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    //print this block because lemein is string and if returns true
 msg += "hi";
 }
 if (lemeout)
  {
 msg += 'Hello';
}
console.log(msg);













