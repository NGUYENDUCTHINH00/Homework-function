// B1 :
// function tong(){
//     let a = Number(prompt(" Hãy nhập số thứ nhất"));
//     let b = Number(prompt(" Hãy nhập số thứ 2"));
//     let cong = a + b;
//     console.log(cong); 
//     return;
// }
// tong();

// B2 :
// function tong() {
//     let array = [1, 2, 3, 4, 5, 6, 7]
//     let a = 0
//     for (i = 0; i <= array.length - 1; i++) {
//         if (array[i] % 2 === 1) {
//             a = a + array[i]
//         }
//     } 
//     console.log(a);
//     return;
// } 
// tong();

// B2.1 :
// function binh(){
//     let a = Number(prompt("Hãy nhập số tính bình phương"));
//     let b = a ** 2;
//     console.log(b);
//     return;
// }
// binh();

// B2.2 :
// function hinhtron(){
//     let a = Number(prompt("Nhập bán kính của hình tròn:"));
//     let c = 2 * a * Math.PI;
//     let s = a ** 2 * Math.PI;
//     console.log(` Chu vi hình tròn là: ${c} 
//     Diện tích hình tròn là: ${s}`);
//     return;
// }
// hinhtron();

// B2.3 :
function giaithua(){
    let a = Number(prompt("Nhập số tính giai thừa"));
    let b = 1;
    for (let i = 1 ; i <= a ; i++){
        b = b * i;
    }
    console.log(b);
    return;
}
giaithua();

// B2.4 :
// function check(){
//     let userInput = 100;
//     if (typeof userInput == 'number'){
//         alert(`${userInput} is a number`);
//     }
//     else {alert("False")};
//     return;
// };
// check(userInput)

//B2.5 :
// function min (){
//     let a = Number(prompt("nhập số nguyên a"));
//     let b = Number(prompt("nhập số nguyên b"));
//     let c = Number(prompt("nhập số nguyên c"));
//     condition=Number.isInteger(a) && Number.isInteger && Number.isInteger(c)
//     if (a <= b && a <= c && condition ) {
//         alert(" a là số nhỏ nhất")
//     }
//     else if (b<= a && b<= c && condition){
//         alert("b là số nhỏ nhất")
//     }
//     else if (c <= a && c <= b &&condition) {
//         alert("c là số nhỏ nhất")
//     }
//     else{
//         alert("số nhập ko hợp lệ")
//     };
//     return;
// };
// min();

// B2.6 :
// function check (){
//     let a = prompt(" Nhập số ");
//     if (Number(a) > 0 && Number.isInteger(Number(a))){
//         alert ("a là số nguyên dương");
//     }else{
//         alert (" False ");
//     };
//     return;
// };
// check ();

// B2.7 :
// let a = 9 , b = 8 ;
// function swap(a,b){
//     temp = a;
//     a = b;
//     b = temp;
//     alert(`a = ${a} b = ${b}`);
//     return;
// } 
// swap(a,b);

// B2.8 :
// function songuyen(){
//     let arr = prompt("Nhập vào các số nguyên cách nhau bởi dấu cách").split(" ");
//     let newarr = [];
//     for (i = arr.length -1 ; i >= 0; i--){
//         newarr.push(arr[i]);
//     };
//     console.log(newarr);
//     return;
// };
// songuyen();

// B2.9:
// function kytu (){
//     let a = 0;
//     let arr = prompt("Nhập vào mảng kí tự ").split("");
//     let array = prompt("Nhập vào kí tự cần kiểm tra");
//     if ( arr.indexOf(array) == -1){
//         alert("từ này chưa có");
//     }
//     else {
//         for (let i=0; i<arr.length; i++){
//             if((arr[i] == array)){
//                 a = a +1
//             }
//         };
//     }; 
//     console.log(`Từ này xuất hiện ${a} lần `);
//     return;
// };
// kytu();