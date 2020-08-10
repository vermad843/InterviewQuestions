function getUnique(array){
    var uniqueArray = [];
    
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames);//["John", "Peter", "Clark", "Harry", "Alice"]