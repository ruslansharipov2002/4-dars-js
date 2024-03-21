
// 1. argument sifatida kiritilgan sonning tub yoki tub son emasligi aniqlab
//  beradigan function yarating => arrow function yordamida 



// const findPrimeNumber =(Number)=>{
//     let cound = 0
//     let is_prime = ""
//     if(Number){
//         for(let i = 1; i <= Number; i++){
//             if(Number % i == 0){
//                 cound++
//             }
//         }
//     }else{
//         return"son kiritilmadi"
//     }
//     if( cound === 2){
//         is_prime = "kiritilgan son tub son"
//     }else{
//         is_prime = "kiritilgan son tub son emas"
//     }
//     return is_prime
// }
// findPrimeNumber()


// 2.argument sifatida qabul qilinga sonning mukammal yoki mukammal emasligini 
// aniqlaydigan function yarating function expression yordamida



// const findPrimeNumber = function(number){
//     if(number){
//         let total = 0
//         for(let i = 1; i < number; i++){
//             if(number % i == 0){
//                 total += i
//             }
//         }
//         if(number=== total){
//             return'mukammal son'
//         }else{
//             return'son mukammal emas'
//         }
//     }else{
//         return "son aniqlanmagan"
//     } 
// }
// findPrimeNumber(25)

// 5.Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va
//  perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling


// const findPrimeNumber = function(a, b) {
//     area = a * b
//     perimeter = 2 * (a + b)
//     return area, perimeter

// a = float(input("a ni kiriting; "))
// b = float(input("b ni kiriting; "))

// area, perimeter = rectangle(a, b)

// }