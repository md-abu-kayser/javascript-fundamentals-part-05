// ================================
// JavaScript String Examples
// File: case.js
// ================================

// Basic String Example
let name = "Kayser";

console.log(name);

// ================================
// Access Characters by Index
// ================================

let text = "JavaScript";

console.log(text[0]); // J
console.log(text[4]); // S

// ================================
// String Length
// ================================

let message = "Hello World";

console.log(message.length); // 11

// ================================
// Uppercase & Lowercase
// ================================

let language = "JavaScript";

console.log(language.toUpperCase()); // JAVASCRIPT
console.log(language.toLowerCase()); // javascript

// ================================
// String Concatenation
// ================================

let firstName = "Muhammad";
let lastName = "Kayser";

let fullName = firstName + " " + lastName;

console.log(fullName);

// ================================
// Template Literal
// ================================

let userName = "Kayser";
let age = 21;

console.log(`My name is ${userName} and I am ${age} years old.`);

// ================================
// split() Example
// ================================

let fruitsText = "apple,banana,mango";

let fruits = fruitsText.split(",");

console.log(fruits);

// ================================
// replace() Example
// ================================

let sentence = "I love Java";

let updatedSentence = sentence.replace("Java", "JavaScript");

console.log(updatedSentence);

// ================================
// slice() Example
// ================================

let framework = "JavaScript";

console.log(framework.slice(0, 4)); // Java

// ================================
// includes() Example
// ================================

let greeting = "Hello World";

console.log(greeting.includes("World")); // true

// ================================
// String is Immutable
// ================================

let immutableText = "hello";

// This will not change the string
immutableText[0] = "H";

console.log(immutableText); // hello

// ================================
// Convert String to Array
// ================================

let word = "frontend";

let letters = word.split("");

console.log(letters);

// ================================
// Convert Array to String
// ================================

let chars = ["N", "o", "d", "e"];

let joinedText = chars.join("");

console.log(joinedText);

// ================================
// Practice Example
// ================================

let practice = "developer";

console.log(practice.length);
console.log(practice.toUpperCase());
console.log(practice[0]);
console.log(practice.slice(0, 4));
