function customPow () {
var num = prompt('Введите число, которое будем возводить в степень:');
num = +num;
var exp = prompt('Введите степень, в которою будем возводить число');
exp = +exp;

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
