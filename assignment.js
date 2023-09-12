//.................1-MAXIMUM NUMBER.....................
const array = [1,3,65,8,9,34,6,32];
console.log(array);
array.sort(function(a, b){return b-a});
console.log("maximum element in array is " + array[0]);

//.................2-REVERSE STRING.....................
const a="HELLO WORLD";
a.reverse()
console.log(a);

//...............3-SORTING ARRAY.....................
const array1=[4,23,5,77,64,78,8];
array1.sort(function (a,b){return a-b})
console.log("acsenting sort of array1 is "+ array1);

//..............4-SUM OF EVEN..........................
 function sumOfEven(){
    var n = prompt("number","1")
    var sum = 0;
    for (let i =1 ; i <= n ; i++){
       if (i%2==0){
           sum+=i;
       }
       else{
           continue;
       }
    }
   document.getElementById("sumOfEven").innerHTML=sum;
 }
 
//..............5-PRIME NUMBER...........................

function isPrime(){
    let prime = 0;
    let num = prompt("number :","");
    for ( let i = 2 ; i < num; i++){
        if(num % i==0){
            prime=1;
            break;
        }
        else;
        continue;
    }
    if (prime==0){
        document.getElementById("isPrime").innerHTML=num + " is a prime number";
    }
    else{
        document.getElementById("isPrime").innerHTML=num + " is not a prime number";

    }
}

//...................6- SECOND LARGEST NUMBER..................

function secondLarge(){
    var limit = prompt("Limit of array","");
    const array = [];
    for (i=0 ; i < limit ; i++){
        array.push(prompt("array element",""));
    }
    array.sort(function(a,b) {return a-b});
    document.getElementById("secondLarge").innerHTML="The sorted array is [" + array + "]  <br> Second largest value in array is " + array.at(-2);

} 

//................7-DUPLICATE VALUES............................

function duplicate(){
    var limit = prompt("Limit of array","");
    let array = [];
     for (i=0 ; i < limit ; i++){
         array.push(prompt("array element",""));
    }
    let newArray =[];
    for (let i = 0; i < array.length;i++) {
        newArray.push(array[i])
        for (let j = i+1 ; j<array.length ; j++)
            if (newArray[i]==array[j]){
                delete array[j];
            }else{
                continue;
            }
    }
    var value = undefined;
    newArray = newArray.filter(function(item) {
        return item !== value
    })
    document.getElementById("duplicate").innerHTML=" New array after deleting duplicate values : ["+ newArray + "]";
    console.log(newArray);
}

//...................8-SUM OF ELEMENETS...........................

function sumOfEle(){
    var limit = prompt("Limit of array","");
    let array = [];
    for (i=0 ; i < limit ; i++){
        array.push(prompt("array element",""));
    }
    var sum = 0;
    for (i=0 ; i < array.length ; i++){
        sum+=Number(array[i]);
    }
    document.getElementById("sumOfEle").innerHTML="The sum of all elements in given array is : " + sum;
}

//....................9-GENERATE PRIME NUMBERS IN LIMIT................

function generatePrime(){


let limit = parseInt(prompt('Enter the limit'));
            let index;
            let arr=[];
           for (index = 2; index <= limit; index++) {
                let notPrime = false;
                for (let j = 2; j <= index; j++) {
                    if (index % j === 0 && j !==index) {
                        notPrime = true;
                    } 
                }
                if(notPrime == false){
                    arr.push(index);
                
                }

            }
            document.getElementById('generatePrime').innerHTML="prime numbers in array are : " + arr;
            return index
}

//.......................10-MAXIMUM AND MINIMUM........................

function getMaxMin() {
    const size = prompt(`Enter the size of array`);
    const numbers = [];
    let pos = 1;
    for (let index = 0; index < size; index++) {
        numbers[index] = parseInt(prompt(`${pos} elements`));
        pos++;
    }
    numbers.sort(function(a,b){return a-b});
    let maxNum = numbers.at(-1);
    let text = `maximum number in array is : ${maxNum}`
    
    let minNum = numbers.at(0);
    text += `minimum number in array is : ${minNum}`
    document.getElementById("getMaxMin").innerHTML=text;
}

//.......................11-FACTORIAL..................................

function factorial(){
    var number = prompt("enter number :","");
    let fac = 1;
    for ( i = number ; i>0 ; i--){
        fac*=Number(i);
    }
    document.getElementById("factorial").innerHTML="Factorial of : " + number + " is " + fac;
}

//......................12-PALINDROME OR NOT..........................
function isPalindrome(){
    var string = prompt("string : ",'');
    var reverse= string.split("").reverse().join("");
    if (string == reverse){
        document.getElementById('isPalindrome').innerHTML="ITS PALINDROME";
    }
    else{
        document.getElementById("isPalindrome").innerHTML="its not a palindrome";
    } 
}
//.....................13-ARMSTRONG NUMBER.............................

function armstrong(){
    let number = prompt("Number to check : ",'');
    let arm = 0;
    let a=number;
    while (a != 0){
        let sum = a%10;
        arm += sum*sum*sum;
        a=Math.floor(a/10);
    }
    if (number == arm){
        document.getElementById("armstrong").innerHTML="its an armstrong number";
    }
    else{
        document.getElementById("armstrong").innerHTML="its not an armstrong number";
    }
}

//.....................14-FIBNACCI SERIES...........................

function fib(){
    let number = prompt("enter lenght : ","")
    const fibArray=[0,1];
    for ( i=1 ; i < number ; i++){
        let ele = fibArray[i]+fibArray[i-1];
        fibArray.push(ele);
    }
    document.getElementById("fib").innerHTML="fibnocci serier is " + fibArray;
}

//......................15-SUM OF PRIME NUMBERS.....................

function primeSum(){
let limit = parseInt(prompt('Enter the limit'));
            let index;
            let arr=[];
           for (index = 2; index <= limit; index++) {
                let notPrime = false;
                for (let j = 2; j <= index; j++) {
                    if (index % j === 0 && j !==index) {
                        notPrime = true;
                    } 
                }
                if(notPrime == false){
                    arr.push(index);
                
                }

            }
            let sum = 0 ;
            for (i=0 ; i<arr.length ; i++){
                sum+=arr[i]
            }
            document.getElementById("primeSum").innerHTML=`sum of prime numbers is ${sum}`;
}

//......................16-MULTIPLES OF 3 OR 5......................

function sumOfNumber() {
    const limit = parseInt(prompt("numbers",''));
    let sum = 0;
    let index;
    for (index = 1; index <= limit; index++) {
        if (index%3 == 0 || index%5 == 0) {
            sum += index;
            console.log(index);
        }
    }
    document.getElementById("sumOfNumber").innerHTML = `The sum of multiple of 3 or 5 number is ${sum}`;
    return sum;
}
//......................17-SUM OF ADD AND EVEN.......................

function result(){
    let number = prompt ("The number is : ",'');
    let sumEve = 0;
    let sumOdd = 0;
    for ( i = 1 ; i < number ; i++ ){
        if(i%2==0){

            sumEve+=i;

        }
        else{
            sumOdd+=i;
        }
    }
    document.getElementById("result").innerHTML="sum fo even numbers is : " + sumEve + " and sum of odd numbers is : " + sumOdd;
}

//...................18-UNION OF TWO ARRAY............................

function union(){
    let arr1=[1,3,5,7,9];
    let arr2=[2,4,6,8,10];
    let newArray=arr1.concat(arr2);
    newArray.sort(function(a,b){return a-b});
    unionArr=newArray.filter((element,index)=>newArray.indexOf(element)===index);
    document.getElementById("union").innerHTML=unionArr;
    

}

//...................19-SUM OF DIGITS.................................

function sumOfDig() {
    let number = parseInt(prompt("number",''));
    let sum = 0;
    while(number!=0){
        sum += number%10;
        number=Math.floor(number/10);
    }
    document.getElementById("sumOfDig").innerHTML=`The sum of digit is ${sum}`;
}

//...................20-NUMBER OF VOWELS IN STRING.....................
function noOfStr() {
    const str = prompt("string",'');
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        str.toLowerCase();
        if(str.charAt(index) ==  'a' || str.charAt(index) ==  'e' || str.charAt(index) ==  'i' || str.charAt(index) ==  'o' || str.charAt(index) ==  'u'){
            count++;
        }
    }
    document.getElementById("noOfStr").innerHTML =`The number of vowels in" ${str}" is ${count}`;
}

//#######################################################################################################################################################

