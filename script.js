"use script";
console.log(`Frontend Agorithms Task\n\n`);


// 1. Write a function named "ConvertFahrToCelcius" that takes a single parameter and converts it to celcius


function convertFarhToCelcius(fara) {



  this.fara = fara;
  if (typeof fara === "string" || typeof fara === "number") {
    const celcius = (5 / 9) * (Number(fara)-32);
    console.log(celcius.toFixed(4) + "deg C");
  } else {
    console.log(`${fara} is not a valid number but a/an ${Array.isArray(fara)? 'Array':typeof fara}`);
  }
}

//calling function convertFarhToCelcius() with 32 as an argument
convertFarhToCelcius(0);
/*console reponse:
  -17.7778deg C

*/
//calling function convertFarhToCelcius() with 32 as an argument
convertFarhToCelcius([1,2,3]);
/*console reponse:
  1,2,3 is not a valid number but a/an Array

*/
convertFarhToCelcius({temp:0});
/*console reponse:
 1,2,3 is not a valid number but a/an object

*/







/*2. Write a function named
 "checkYuGiOh" that takes a number, n, as an
argument, creates and array of numbers from
from 1 to n and replaces multiple of 2, 3, and 5 with "yu","gi","oh",
logs the resulting array to the console then returns the resulting array*/

let output= [3,5,6,7];



// definition of function checkYuGiOh()

function checkYuGiOh(n) {

    // check if argument passed into function checkYuGiOh() is a typeof number
  if (typeof n !== "number") {
    
    //   log Invalid parameter:... to the console if argument is not a number
    console.log(`"Invalid parameter: ${n}"`);
  } 
  else { 
       // create an empty array with length of arguments, n passed into the fuction checkYuGiOh()
  
    this.n = n;
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
   
    // log the new items in the originally empty array, arr to the console
    console.log(arr);
    

    /*loop throup Array, arr and determine the multiples of 2,3, and 5 respectively 
    & if condition is satisfactory it returns true in each case */
    for (let k= 0; k <= arr.length-1; k++) {
         if(arr[k]%2==0 && arr[k]%3==0)
        {
            arr[k]='yu-gi'
        }
        else if(arr[k]%2==0 && arr[k]%5==0)
        {
            arr[k]='yu-oh'
        }
        else if(arr[k]%3==0 && arr[k]%5==0)
        {
            arr[k]='gi-oh'
        }
        else if(arr[k]%2==0)
        {
            arr[k]='yu'
        }
        else if(arr[k]%3==0)
        {
            arr[k]='gi'
        }
        
        else if(arr[k]%5==0)
        {
            arr[k]='oh'
        } 
      
    }// end of nested for loop
    console.log(arr);
  }//end of outter for loop
  
}// end of function 


// calling function checkYuGiOh() with parameter, 10
checkYuGiOh(10);

/*console response:
(10) [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
*/
// calling function checkYuGiOh() with parameter, "fizzbuzz is meh"
checkYuGiOh("fizzbuzz is meh");

/*console response:
"Invalid parameter: fizzbuzz is meh"
*/
