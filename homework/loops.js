//1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let eded = parseInt(prompt("Üçrəqəmli ədədi daxil edin:"))
// let reqemlerininCemi = 0
// let reqemlerininHasili = 1
// let count = 0
// let qaliq = 0

// while (eded > 0) {
//     count++
//     qaliq = eded % 10
//     reqemlerininCemi += qaliq
//     reqemlerininHasili*=qaliq
//     eded -= qaliq
//     eded /= 10
// }

// let reqemlerininEdediOrtasi = reqemlerininCemi / count

// alert(`Ədədin rəqəmlərinin cəmi: ${reqemlerininCemi}
// Ədədin rəqəmlərinin hasili: ${reqemlerininHasili}
// Ədədin rəqəmlərinin ədədi ortası: ${reqemlerininEdediOrtasi}`)





//2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let eded = parseInt(prompt("Ədədi daxil edin:"))

// function bolenleriTap(number){

//     let bolenler = []

//     for (let i = 0; i <= number; i++) {
//         if (number % i === 0){
//             bolenler.push(i)
//         }
//     }

//     return bolenler
// }

// let bolenler = bolenleriTap(eded)

// alert(`Ədədin bölənləri: ${bolenler}`);





//3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

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





//4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i**2}`);
// }





//5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// console.log(`i i^2 i^3`);
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} ${i**2} ${i**3}`);
// }





//6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin

// function isPrime(num) {

//     if (num <= 1) return false;

//     if (num === 2) return true;

//     for (var i = 2; i <= num / 2; i++) {
//         if (num % i === 0) return false;
//     }

//     return true;
// }

// for (var i = 0; i <= 100; i++) {

//     if (isPrime(i)) {
//         console.log(i);
//     }
// }






//7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let tekEdedlerinCemi = 0
// let cutEdedlerinCemi = 0

// for (let i = 0; i <= 100; i++) {

//     if(i%2===0){
//         cutEdedlerinCemi+=i
//     }
//     else{
//         tekEdedlerinCemi+=i
//     }
// }

// console.log(`Tək ədədlərin cəmi: ${tekEdedlerinCemi}`);
// console.log(`Cüt ədədlərin cəmi: ${cutEdedlerinCemi}`);