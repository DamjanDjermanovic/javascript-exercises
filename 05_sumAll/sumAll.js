const sumAll = function(num1, num2) {
    let sum = 0;
    
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    
    if (num1 > num2){
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    
    for (let i = num1; i <= num2; i++){
        sum += i;
    }
    
    return sum;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
