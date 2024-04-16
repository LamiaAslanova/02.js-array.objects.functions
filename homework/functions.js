//1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir

// function printFullName(firstName, lastName) {
//     return "I am " + firstName + " " + lastName;
// }

// console.log(printFullName("Jhon", "Doe"));





// 2) daxil edilən ədədin kvadratını return edən funksiya yazın

// function square (number){
//     return number**2
// }

// console.log(square(10));





//3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function sum(a, b){
//     return a+b
// }

// function multiply(a, b){
//     return a*b
// }

// function subtruct(a, b){
//     return a-b
// }

// function divide(a, b){
//     return a/b
// }

// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// console.log(subtruct(2, 3));
// console.log(divide(2, 3));





//4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculator(a, b, operator){
//     switch(operator){
//         case "+":
//             return a+b
//         case "*":
//             return a*b
//         case "/":
//             return a/b
//         case "-":
//             return a-b
//         default:
//             return "Düzgün operator daxil edin."
//     }
// }

// console.log(calculator(2, 5, "+"));
// console.log(calculator(2, 5, "*"));
// console.log(calculator(2, 5, "/"));
// console.log(calculator(2, 5, "-"));





// 5) arrayın ilk və son elementinin cəmini return edən function yazın

// function getSum (array){
    
//     if (array.length === 0) {
//         return "Array boşdur"
//       }

//     return (array[0]+array[array.length-1])
// }

// console.log(getSum([1, 2, 3]));





//6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// function sum (array){
//     let sum = 0

//     if (array.length === 0) {
//         return "Array boşdur"
//       }

//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i]
//     }

//     return sum
// }

// console.log(sum([1, 2, 3]));





//7) arrayin daxilindəki max elementi return edən funksiya yazın

// function max (array){
//     let maxElement=array[0]

//     if (array.length === 0) {
//         return "Array boşdur"
//       }

//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>maxElement){
//             maxElement=array[i]
//         }
//     }

//     return maxElement
// }

// console.log(max([1, 2, 3]));





// 8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin

// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

// function filterEmployees (array){

//     let highSalary=[]

//     for (let i = 0; i < array.length; i++) {
//         if(array[i].salary>60000){
//             highSalary.push(array[i])
//         }
//     }

//     return highSalary
// }

// console.log(filterEmployees(employees));





// 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// function findElement(arr, number){  

//     if (arr.length === 0) {
//         return "Array boşdur"
//       }

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===number){
//             return "Ədəd array elementlərindən biridir"
//         }
//     }

//     return "Ədəd array elementlərindən biri deyildir"
// }

// console.log(findElement([1, 2, 3], 1));
// console.log(findElement([1, 2, 3], 5));





//10) sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function findSpaceCounts(str){

//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if(str[i]===" "){
//             count++
//         }
//     }

//     return count
// }

// console.log(findSpaceCounts(sampleNews));





// 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.

// function concatArray(arr1, arr2){
//     return arr1.concat(arr2)
// }

// console.log(concatArray([1,2,3,4,5],[6,7,8,9]));





// 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.

// function array_filled(parameter1, parameter2){

//     let array = []
    
//     for (var i = 0; i < parameter1; i++) {
//         array.push(parameter2);
//     }
    
//     return array
// }

// console.log(array_filled(6, 0));





//13. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// function move(array, fromIndex, toIndex) {

//     let elementForMove = array.splice(fromIndex, 1)[0];
//     array.splice(toIndex, 0, elementForMove);

//     return array;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));





//14. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.

// function range(first, last) {

//     let array = [];

//     for (var i = first; i <= last; i++) {
//         array.push(i);
//     }
    
//     return array;
// }

// console.log(range(1, 4));