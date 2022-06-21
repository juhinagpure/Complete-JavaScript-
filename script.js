// 1. ways to print in JavaScript
// console.log("hello world")
//alert("me");
// document.write("this is document write")

// 2. JavaScript console API
// console.log("hello world")
// alert("me");
// document.write("this is document write")
// console.warning("this is warning")
// console.error("this is an error")

// 3.JavaScript variables
// what are variables? - containers to store data values.

// var number = 34;
// var number2 = 56;
// console.log(number+number2);

// // 4. Data types in JavaScript
// // Numbers
// var num1 = 455;
// var num2 = 56.76;

// // String
// var str1 = "this is a string";
// var str2 = "this is also a string";

// // objects
// var marks = {
//     Atharv:99.97,
//     Juhi:34,
//     Anushka:78.
// }
// console.log(marks);

// // Booleans
// var a = true;
// var b = false;;
// console.log(a,b);

// var und = undefined;
// var und
// console.log(und);

// var n = null;
// console.log(n);

// /*
// At a very high level , there are two types of data types in JavaScript.
// 1. Primitive data types:undefined,null,number,string,boolean,symbol.
// 2. Reference data types:Arrays and objects.
// */

// // Arrays
// var arr = [1,2,"juhi",4,5]
// console.log(arr);

// // operators in JavaScript
// // Arithmetic operators
// var a = 34;
// var b = 56;
// console.log("The value of a + b is",a+b);
// console.log("The value of a - b is",a-b);
// console.log("The value of a * b is",a*b);
// console.log("The value of a / b is",a/b);

// // Asignment Operators
// var c = b;
// // c += 2;
// // c -= 2;  //c=c-2;
// // c *= 2;
// // c /= 2;
// // console.log(c);

// // comparison operators
// var x = 34;
// var y = 56;
// // console.log(x == y);
// // console.log(x >= y);
// // console.log(x <= y);
// // console.log(x > y);
// // console.log(x < y);

// // logical operators
// // logical and
// //  console.log(true && true)
// //  console.log(true && false)
// //  console.log(false && true)
// //  console.log(false && false)

// // logical or
// //  console.log(true || true)
// //  console.log(true  || false)
// //  console.log(false  || true)
// //  console.log(false || false)

// // logical not
// // console.log(!false);
// // console.log(!true);
// function avg(a, b){
//     c = (a + b)/2;
//     return c;
// }

// c1 = avg(4, 6);
// c2 = avg(14,16);
// console.log(c1,c2);

// conditionals in JavaScript

// var age = 25;
// // single if statement
//  if(age > 8){
//      console.log("you are not a kid"); }

// if - else statement
// if(age > 8){
//     console.log("you are not a kid");
// }
// else{
//     console.log("you are a kid")
// }

// if - else ladder
// if(age > 32){
//     console.log("you are not a kid")
// }
// else if(age > 26){
//     console.log("bacche nhi rahe");
// }
// else if(age > 22){
//     console.log(" yes bacche nhi rahe");
// }
// else if(age > 18){
//     console.log("18 bacche nhi rahe");
// }
// else{
//     console.log("bacche rahe");
// }
// console.log("End of ladder");

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// for(var i = 0; i<arr.length;i++){
// if(i==2){
//     // break
//     continue;
// }


//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;
// ac++;
// ac = ac + 1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
//   }  while(j < arr.length);


//  let myArr = ["fan","camera",34,null,true];
// // Array Methods
// console.log(myArr.length);
// // myArr.pop();
// // myArr.push("harry")
// // myArr.shift()
// myArr.unshift("harry")
// const newlen = myArr.unshift("harry")
// console.log(newlen)
// console.log(myArr);

// string methods in JavaScript 
// let mylovelystring = "Harry is a good boy";
// // console.log(mylovelystring.length)
// // console.log(mylovelystring.indexOf("good"))

// // console.log(mylovelystring.slice(1,4))
// d = mylovelystring.replace("juhi","anushka");
// d = d.replace("good","bad");
// console.log(d,mylovelystring)

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
// let elem = document.getElementById("click");
// console.log(elem)

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = 'yellow';
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName("button");
console.log(tn);
createdElement = document.createElement('p')
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(Element); ---> removes an element


// Selecting using Query
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The document was loaded')
}

// Events in JavaScript
firstContainer.addEventListener('click', function(){
    console.log('clicked on container');
})

firstContainer.addEventListener('mouseover', function(){
    console.log('mouse on container');
})

firstContainer.addEventListener('mouseout', function(){
    console.log('mouse out of container');
})

























