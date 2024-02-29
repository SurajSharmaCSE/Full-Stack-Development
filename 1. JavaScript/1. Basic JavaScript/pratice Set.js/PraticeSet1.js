/*
Q1.  Print Fizz Buzz.
Description: Write a program that prints the numbers from
 1 to 20 and for multiples of 
'3' print "Fizz"  
'5' print "Buzz"
'3' and '5' both print "FizzBuzz"
else number itself

 */

// for(i=1;i<=20;i++)
// {
//    if(i%3==0)
//      console.log("FRIZ")
//    else if(i%5==0)
//     console.log("BUZZ");
//    else if(i%3==0 && i%5==0)
//     console.log("FizzBuzz");
//    else
//     console.log(i);
// }

/* Q2 - print-all-primes-till-n-official/ojquestion */

// n= 20;
// for(i=2;i<n;i++)
// {
//     isprime = true;
//     for(j=2; j*j<=i;j++)
//     {
//         if(i%j==0)
//         {
//             isprime = false;
//             break;
//         }
//     }
//     if(isprime==true)
//     {
//         console.log(i);
//     }
// }

// Q-3 count-digits
// let n = 109967;
// let ans = 0;
// let div = 10;

// while(n>=1)
// {
//     n = Math.floor(n / div);
//     ans++;
// }
// console.log(ans);

// Q-5 rotate-a-number
let num = [1, 2, 3, 4, 5, 6, 7];
let r = 2;
let ans = [];

// Moving the elements from rth index to the end of the array
for (let i = num.length - r; i < num.length; i++) {
    ans.push(num[i]);
}

// Moving the elements from start to (r-1)th index of the array
for (let i = 0; i < num.length - r; i++) {
    ans.push(num[i]);
}



console.log(ans); 

