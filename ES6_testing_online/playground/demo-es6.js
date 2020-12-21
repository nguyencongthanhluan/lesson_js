// //1.--------------let,var,const--------------------
// // var num = 1;
// // var num = 2;

// // let num1 = 2;
// // let num1 = 3;

// //block
// // {
// //     let a = 1;
// //     var b = 2;
// // }
// // console.log(a)

// //let không hỗ trợ hoisting
// // console.log(a);
// // let a = 5;

// //2.-----------------FOR----------------------------

// const chars = ["a", "b", "c"];

// // for (let i = 0; i < chars.length; i++) {
// //     console.log(chars[i]);
// //     console.log(i)
// // }

// for (let item of chars) {
//   console.log(item);
// }

// for (let i in chars) {
//   console.log(i);
// }
// //3.------------------String template----------------
// //4.------------------Arrow function-----------------

// const calcSum = (a, b) => a + b;
// const showObject = () => ({ name: "hieu" });

// console.log(this);

// document.getElementById("btnSubmit").addEventListener("click", () => {
//   console.log(this);
// });

// //5.------------------Destructuring (bóc tách phần tử)---------------------
// const studentFromDB = {
//   name: "hieu",
//   age: 12,
//   email: "dangtrunghieu147@gmail.com",
// };

// const { name, age: myAge, email } = studentFromDB;
// // => const name = studentFromDB.name
// // => const age = studentFromDB.age
// // => const email = studentFromDB.email

// console.log(name, myAge, email);

//6.-----------------Default parameters-----------------------
// const calcSum = (a = 5, b = 2) => a + b;

// console.log(calcSum());

//7.-----------------Spread operator--------------------------
//------copy object
// let student1 = { name: "hieu", age: 12 };

// // let student2 = Object.assign({}, student1);
// let student2 = { ...student1, email: "dth@gmail.com", age: 13 };

// student2.name = "dung";
// console.log(student1, student2);

//------copy array
// let arr1 = [1, 2, 3, 4];
// let arr2 = [0, ...arr1, 6];

// // arr2.push(5);

// console.log(arr1, arr2);

//------Nối object, nối array
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let student1 = { name: "hieu" };
// let student2 = { age: 12 };
// let student3 = { ...student1, ...student2 };
// console.log(student3);

//8----------------REST PARAMETERS-------------
// => Công dụng:  gom tất cả tham số thành mảng
// const calcSum = (...nums) => {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   console.log(sum);
// };

// calcSum(1, 2, 3, 4, 5, 5, 6);
// calcSum(1, 2);

//9----------------Object literal---------------
// let student1 = { name: "hieu", age: 12 };

// let keyName = "name";
// let keyAge = "age";

// let student2 = { [keyName]: "hieu", [keyAge]: 12 };
// console.log(student2);

//------------Phần 2: high order function es6--------------------------
//1.------------MAP-----------------------
// let nums = [1, 2, 3, 4, 5];
// [undefined, undefined, 4, 5, 6];

// let newNums = nums.map((num) => num + 1);

// // for (let num of nums) {
// //   newNums.push(num + 1);
// // }

// console.log(newNums);
// //=> [2,3,4,5,6]

//2.---------------FILTER--------------------
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNums = [];
// // => [1,3,5,7,9]
// for(let num of nums){
//   if( num % 2 !== 0){
//     newNums.push(num);
//   }
// }

// let newNums = nums.filter( (num) => num % 2 !== 0 );

// console.log(newNums);

//3,4 --------------- FIND, FINDINDEX--------------

// let students = [
//   { id: 1, name: "hieu" },
//   { id: 2, name: "dung" },
//   { id: 3, name: "tai" },
//   { id: 2, name: "tai" },
// ];

// const foundedStudent = students.find((student) => student.id === 2);
// console.log(foundedStudent);

// const foundedIndex = students.findIndex((student) => student.id === 2);
// console.log(foundedIndex);

//5.-------uniq

// var arr = [4, 2, 3, 3, 3, 3];

// var obj = {};

// for (let item of arr) {
//   if (item in obj) {
//     obj[item] = obj[item] + 1;
//   } else {
//     obj[item] = 1;
//   }
// }

// =>
// var obj = {
//   4: 1,
//   2: 1,
//   3: 4,
// };

// console.log(Object.keys(obj).map((item) => item * 1));

// => [1,2,3]
