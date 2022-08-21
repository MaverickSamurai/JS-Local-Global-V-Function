// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let k = 42;

// divided(k)
// function divided(d) {
//     if (d %3 == 0 && d % 7 == 0) {
//         console.log("Divided");  
//     }else{
//         console.log("Not Divided");
//     }

// }





// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// let m = 17;

// factorial(m);

// function factorial(a) {
//     let factor = 1;

//     for (let i = 1; i <= a; i++) {
//         factor *= i;

//     }
//     console.log(factor);
// }


// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.


// let nums = [1,3,4,6,7,9,12];

// evenSquareOfNums(nums);

// function evenSquareOfNums(square) {
//     let squ = 0;

//     for (let i = 0; i < square.length; i++) {
//         if (square[i] % 2 == 0) {
//             squ += Math.pow(square[i], 2);
//         }

//     }
//     console.log(squ);

// }



// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

// let email = "mirsamirba@code.edu.az";
// let password = "123456789";

// checkedEmail(email,password);

// function checkedEmail(email, password) {
//     if (email == "mirsamirba@code.edu.az" && password == "123456789") {
//         console.log("Signed in");
//     }
//     else{
//         console.log("Email or password is incorrected");
//     }

// }



// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let nums = [1,5,7,2,4,9,11,12,13];

// oddNumsSum(nums);

// function oddNumsSum(number){
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//        if (nums[i] % 2 == 1) {
//         sum += number[i];
//        }
//     }
//     console.log(sum);
// }


// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let nums = [1, 2, 4, 8, 9, 14, 16, 3, 44, 84, 18];

// evenNumsCount(nums);

// function evenNumsCount(numbers) {
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             count++;

//         }

//     } console.log(count);

// }