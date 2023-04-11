const removeFromArray = function(array, ...args) {

    args.forEach(element => {
        for (let item of array){
            if (item === element) array.splice(array.indexOf(item), 1)
        }
    })

    return array;

};

console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))

// Do not edit below this line
module.exports = removeFromArray;
