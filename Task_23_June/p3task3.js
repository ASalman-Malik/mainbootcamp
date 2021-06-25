//1.Fix the code to get the largest of three.
aa = (f,s,t) => {
    //let f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t)
    {
    console.log(f)
}
    else if(s>f && s>t)
    {
    console.log(s)
}
    else
    {
    console.log(t)
}
   }
   aa(1,2,3);

   //2.Fix the code to Sum of the digits present in the number.
   let n = 123;
   console.log(add(n));
   function add(n)
   {
   let sum = 0, mod;
   while(n>0)
   {
    mod=n%10;
    sum = Math.floor(sum+mod);
    n = n/10;
    }
    return sum;
   }

   //3.Fix the code to Sum of all numbers using IIFE function
    (() => 
      {
       const arr = [9,8,5,6,4,3,2,1];
       let sum = 0;
       for (var i = 0; i < arr.length; i++)
       {
       sum = sum + arr[i];
       }
       console.log(sum);
       return sum;
      })();

    //4.Fix the code to gen Title caps.
    var ano = function(arr)
    {var arr = ["guvi", "geek", "zen", "fullstack"];
        for (var i = 0; i < arr.length; i++)
        {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
        }
     }
       ano();

    //5.Fix the code to return the Prime numbers.
    const newArray=[1,3,2,5,10];
    const myPrime=newArray.filter(num=>
    {

     for(let i=2;i<=num;i++)
     {
     if(num%i===0)
     {
     return true;
     }
     }
     return num===1;
    });
    console.log(myPrime);

    //6.Fix the code to sum the number in that array.
    const num = [10, 20, 30, 40,50,60,70,80,90,100] 
    let sum = (a, b) =>
     a + b
     sum = num.reduce(sum);
    console.log(sum);

    //7.Fix the code to rotate an array by k times and return rotated array using IIFE function.