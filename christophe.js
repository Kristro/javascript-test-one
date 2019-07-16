//1-Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".
function cityName(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == "Los")
        || (str.substring(0, 3) == "New"))) {
        return str;
    }
    return "The city name does not begin with Los or New";
}
console.log(cityName("New Orleans"));
console.log(cityName("Los Alamos"));
console.log(cityName("Berlin"));


//2-Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.
function sum(elem) {
    return elem[0] + elem[1] + elem[2];
}
console.log(sum([12, 23, 45]));


//3-Given two strings, firstName and lastName, return a single string in the format "last, first".
function name(firstName, lastName) {
    return `${lastName}, ${firstName}`;
} 
console.log(name("Christophe", "Troudart"));


//5-Write a program that adds a string ending to each item in an array.
let arr = ["Hairdress","Box","Cook"];
let result = arr.map(job => `${job}er`);
console.log(result);


//8-Make a variable with the string value of " maria jane jones". Convert each first letter to uppercase.Make sure your code works for any three names...
function name(str) {
    str = str.split(" ");
    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
console.log(name("maria jane jones"));


//9-Write a program that takes a string and returns the word count. The string will be a sentence.
function wordCount(str) {
    return str.split(" ").length;
}
console.log(wordCount("Today there is a test"));
console.log(wordCount("Monday Tuesday"));
console.log(wordCount("Holiday is coming"));
