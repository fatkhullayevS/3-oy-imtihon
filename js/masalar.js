//     // MASALA 1

//   const oneNumber = Number(prompt("son kiriting")) ;
//   const twoNumber = Number(prompt("son kiriting")) ;
//   const threeNumber = Number(prompt("son kiriting")) ;

//   let numArr = [];

//   if(oneNumber == "",  twoNumber == "",  threeNumber == ""){
//     console.log("Ilitmos son kiriting");
//   }else{
//     numArr.push(oneNumber, twoNumber, threeNumber);
//     console.log(numArr);

//     const result = function(numArr){
//       let calc = 0;
//       for(let num of numArr){
//          let calcValue = calc+= num;
//         // console.log(calcValue);
//       }
//       return calc
//     }

//     console.log(result(numArr));
//   }


// // 2-masala


// let arr = ["Jazz", "Blues"]

// console.log(arr);
// arr.push("Rock-n-roll")

// console.log(arr);
// arr[1] = "Classic"

// console.log(arr);
// arr.shift()

// console.log(arr);

// arr.unshift("Reggae")
// arr.unshift("Rap")

// console.log(arr);


// MASALA 3

// var salaries = {
//     "Akmal": 1200,
//     "Salim": 5200,
//     "Salim": 5200,
//     "Karima": 1800
// }
// console.log(salaries);

// function sumSalaries(arr){

//       let sum = 0;
//       for (let element of Object.values(arr)) {
//         sum += element;
//       }
//       return sum;

// }

// console.log(sumSalaries(salaries));

// // 4-MASALA
// const arr = [1,2,3,3,5,6,2,8,9,0,11,12,13,14,15,16,17,18,19,20,21,22,22,87,98]

// function calcSum(arr) {
//     const unevenArr = []
//     const coupleArr =[]
//     for(let i of arr){
//         if(arr[i] % 2 === 0){
//             coupleArr.push(arr[i])
//             // console.log(arr[i]);
//         }else{
//             unevenArr.push(arr[i])
//         }

//     }
//     return `Juft Array ${coupleArr}  Toq array${unevenArr}`
// }
// console.log(calcSum(arr));