// alert('Hello word');
// console.log('hello console');
function customPow () {
var num = prompt('Введите число, которое будем возводить в степень:');
num = +num;
var exp = prompt('Введите степень, в которою будем возводить число');
exp = +exp;
// var i=1;
// while (i < exp){
//   result = result * num;
//   i++;
// }
// console.log(result)

function power(num, exp) {
    var result = 1;
    for(var i = 0; i <exp; i++)
    {
        result = result * num;
    }
    return(result);
}
console.log(power(num, exp));
}
