//1)studentlərin ortalama score'nu yeni bir arrayda yığın

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//   ];

// let average = []

// for (let i = 0; i < students.length; i++) {

//     let sumScore = students[i].scores.reduce(function(sum, score){
//         return sum+score
//     },0)

//     let averageScore = sumScore/students[i].scores.length

//     average.push({ name: students[i].name, averageScore })
// }

// console.log(average);





//2)webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];
  
// function find(){

//     let biggerThanFour = []

//     for (let i = 0; i < webTechs.length; i++) {
//         if(webTechs[i].length>4){
//             biggerThanFour.push(webTechs[i])
//         }
//     }

//     return biggerThanFour
// }

// let biggerThanFour = find(webTechs)

// console.log(biggerThanFour);





//3)product arrayindəki productların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];

// let sum = products.reduce(function(acc, number){
//     return acc+number.price
// },0)

// console.log(`Məhsulların qiymətləri cəmi: ${sum}`);

// let average = sum/products.length

// console.log(`Məhsulların qiymətlərinin ortalamas;: ${average}`);





//4)countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// let acountries = []

// for (let i = 0; i < countries.length; i++) {

//     let firstLetter = countries[i].charAt(0).toLowerCase();

//     let lastLetter = countries[i].charAt(countries[i].length - 1).toLowerCase();
    
//     if (firstLetter === 'a' && lastLetter === 'a') {
//         acountries.push(countries[i]);
//     }
// }

// console.log(acountries);





//5)Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// let eded = parseInt(prompt("Ədədi daxil edin:"))

// function bolenlerinSayiniTap(number){

//     let bolenlerinSayi = 0

//     for (let i = 0; i <= number; i++) {
//         if (number % i === 0){
//             bolenlerinSayi++
//         }
//     }

//     return bolenlerinSayi
// }

// let bolenlerinSayi = bolenlerinSayiniTap(eded)

// alert(`Ədədin bölənlərinin sayi: ${bolenlerinSayi}`);





//6)daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// let sentence = "My name is Lamia."

// function findSpaceCounts(str){

//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if(str[i]===" "){
//             count++
//         }
//     }

//     return count
// }

// console.log(findSpaceCounts(sentence));