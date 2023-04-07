const reverseString = function(string) {
    reverse = "";
    for (let i = string.length; i > 0; i--){
        reverse += string.charAt(i - 1);
    }
    return reverse;
};

console.log(reverseString("Goat"));

// Do not edit below this line
module.exports = reverseString;
