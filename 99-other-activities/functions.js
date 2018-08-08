// #1
//create function, named differrence, takes numeric inputs, output is the difference
function difference(a, b) {
    return a - b;
}
console.log(difference(1, 0));


// #2
//create a function, named wholeName, takes three inputs (first, middle, last), outputs string with all three inputs with space in between each
function wholeName(first, middle, last) {
    return first + " " + middle + " " + last;
}
var result = wholeName("Jorge", "Sebastian", "Hernandez");
console.log(result);

// #3
//create function, takes ine input (string), outputs reverse of the input

//variant 1
function reverse(a) {
    return a;
}
reverse("hello");

//variant 2
function reverse(word) {
    //split word is an array
    var splitWord = word.split("");
    //reversedWord is a reversed array
    var reversedWord = splitWord.reverse();
    var output = reversedWord.join("");
}

// OR

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");