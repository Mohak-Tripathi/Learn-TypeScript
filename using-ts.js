// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add1(num1:string, num2:number) {
//         return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
function add(num1, num2, showResult, result) {
    var a = num1 + num2;
    console.log(a);
    if (showResult) {
        console.log(result + a);
    }
}
var num1 = 6.8;
var num2 = 3;
var printResult = true;
var resultPhrase = "Result is: ";
add(num1, num2, printResult, resultPhrase);
