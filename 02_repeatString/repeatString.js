const repeatString = function(string, num) {
    let n = num;
    if (n < 0) {return "ERROR";}
    let output = '';
    for (let i = 0; i < n; i++){
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
