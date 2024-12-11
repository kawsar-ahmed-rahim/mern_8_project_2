//1
function calculateDifference(param1, param2) {
    return param1 - param2;
  }

console.log(calculateDifference(5,1));



//2
function isOdd(number) {
    return number % 2 !== 0;
}

console.log(isOdd(4));



//3
function findMin(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }
    return Math.min(...numbers);
}
console.log(findMin([12, 2, 8, 1, 7])); 


//4
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
console.log(filterEvenNumbers([31, 2, 9, 14, 7, 8])); 


//5
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log(sortArrayDescending([6, 2, 9, 5, 17]));

//6
function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello"));


//7
function findAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array must not be empty");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(findAverage([1, 2, 9, 15, 39]));

//8
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
console.log(isLeapYear(2020));