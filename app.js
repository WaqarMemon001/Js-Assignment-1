/* Chapter no 1*/

// Q = 1
alert("Assalam-o-Alaikum! And Welcome to my website");

// Q = 2
alert("Error! Please Enter a valid password");

//Q = 3

alert("Welcome to JS Land..... \n Happy Coding!");

//Q = 4

alert("Welcome to JS Land.....");
alert("Happy Coding!");

//Q = 5
alert('Hello... I can run JS through my web browsers console');

/* Chapter no 2*/

//Q = 1
var userName;

//Q = 2
var myName = "Waqar Ali Memon";

//Q = 3
var message = "Hello World";
alert(message);

//Q = 4
var studentName = "Waqar Ali Memon";
var age = 20;
var course = "Web And Mobile Application Development";
alert("Student Name:" + studentName);
alert("Age: " + age);
alert("Course:" + course);

//Q = 5
var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(pizza);

//Q = 6
var email = "Itx.vicky.o@gmail.com \n waqaralim321@gmail.com"
alert("My email address is " + email );

//Q = 7
var book = "A smarter way to learn JavaScript";
alert(" I am trying to learn from the book " + book);

//Q = 8

document.write("Yah! I can write HTML content through JavaScript");


//Q = 9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
document.writeln(design);

/* Chapter no 3 */

//Q = 1
var myAge = 20;
alert("I am " + myAge + " years old");

//Q = 2
var visitT = 15;
alert(" You have visited this site " + visitT + " times");

//Q = 3
var birthYear = 2002;
document.write("My birthyear is " + birthYear);
document.write("<br/>DataType of my decleared variable is number");

//Q = 4


var visitorName = prompt("What is your Name?");

var productName = prompt("What type of clothes do u want?");

var quantity = prompt("How many you want to order?");

document.write("<br/>" + visitorName + " ordered " + quantity + "  " + productName + " (s) " + " on xyz clothing store");

/* Chapter no 4*/

//Q = 1
var name, age, email;

//Q = 2

var Myproduct, quality, Type, School, paper;

//var 69p , 2f>g , &kj , id# , 12

//Q = 3

document.write("<h1>Rules for naming JS variables</h1><br/>");
document.write("Variable names can only contain, number, $ and _. For example $my_1stVariable<br/>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br/>");
document.write("Variable names are case sensitive<br/>");
document.write("Variable names should not be JS keywords");










// /* Chapter no 5 */

//Q = 1
var firstNumber = 3;
var secondNumber = 5;
var result = parseInt(firstNumber) + parseInt(secondNumber);
document.write("<br/> Sum of " + firstNumber + " and " + secondNumber + " is " + result);

//Q = 2
var firstNumber = 3 ;
var secondNumber = 5 ;
var result1 = parseInt(firstNumber) - parseInt(secondNumber);
document.write("<br/> Subtraction of " + firstNumber + " and " + secondNumber + " is " + result1);
var result2 = parseInt(firstNumber) * parseInt(secondNumber);
document.write("<br/> Multiplication of " + firstNumber + " and " + secondNumber + " is " + result2);
var result3 = parseInt(firstNumber) / parseInt(secondNumber);
document.write("<br/> Division of " + firstNumber + " and " + secondNumber + " is " + result3);
var result4 = parseInt(firstNumber) % parseInt(secondNumber);
document.write("<br/> Modulus of " + firstNumber + " and " + secondNumber + " is " + result4 + "<br/>" );

//Q = 3
var number;
document.write("<br/>Value after variable declaration is: " + number);
number = 5;
document.write("<br/>Initial Value: " + number);
number++;
document.write("<br/>Value after increment is: " + number);
number += 7;
document.write("<br/>Value after addition is: " + number);
number--;
document.write("<br/>Value decrement declaration is: " + number);
number = number % 3;
document.write("<br/>The remainder is: " + number);


 //Q = 4
var ticketPrice = 600;
var cost = ticketPrice * 5;
document.write("<br/>Total cost to buy 5 tickets of a movie is: " + cost + " pkr ");

//Q = 5
var num = 4;

document.write(" <br/> Table of " + num + "<br/>");
for (var i = 1; i <= 10; i++) {
    document.write( num + " x " + i + " = " + num * i + "<br/>");
}

//Q = 6
var celcius = 25;
var fahrenhiet = 70;

var c = (fahrenhiet - 32) * (5 / 9);
var f = (celcius * (9 / 5)) + 32;
document.write("<br/>");
document.write( "<br/>" + celcius + "<sup>o</sup>C is ".concat(f, "<sup>o</sup>F"));
document.write("<br/>" + fahrenhiet + "<sup>o</sup>F is ".concat(c, "<sup>o</sup>C"));

 //Q = 7

document.write("<br/><h1>Shopping Cart</h1>")
var priceItem1 = 650;
var priceItem2 = 100;
var shippingCharges = 100;
var quantity1 = 3;
var quantity2 = 7;
document.write("<br/>Price of item 1 is " + priceItem1);
document.write("<br/>Quantity of item 1 is " + quantity1);
document.write("<br/>Price of item 2 is " + priceItem2);
document.write("<br/>Quantity of item 2 is " + quantity2);
document.write("<br/> Shipping charges: " + shippingCharges);
var totalCost = ((parseInt(quantity1) * parseInt(priceItem1)) + (parseInt(quantity2) * parseInt(priceItem2))) + parseInt(shippingCharges);
document.write("<br/><br/> Total cost of your order is: " + totalCost);

// //Q = 8

document.write("<br/> <h1>Marks Sheet</h1> <br/>");
var totalMarks = 980;
var obtainedMarks = prompt("Enter your marks:");
var percentage = (parseInt(obtainedMarks) / parseInt(totalMarks)) * 100;

document.write("<br/>Total Marks: " + totalMarks);

document.write("<br/>Obtained Marks: " + obtainedMarks);

document.write("<br/>Percentage: " + percentage + "%");

// //Q = 9



document.write("<br/><h3>Currency in PKR</h3><br/>");
var dollars = 10;
var riyals = 25;
PKR = (parseInt(dollars) * 104.80) + (parseInt(riyals) * 28);
document.write("<br/>Total currency in PKR is: " + PKR);

//Q = 10
var numb = 12;
var ans = ((parseInt(numb) + 5) * 10) / 2;
document.write(" <br/><br/> Answer is : " + ans);

// //Q = 11

document.write("<br/><h3>age calculator</h3>" + "<br/>");
var birthYear = prompt("Enter your birth year:");
var currentYear = 2021;
document.write("Current year: " + currentYear + "<br/>");
var currentAge = parseInt(currentYear) - parseInt(birthYear);
document.write("Birth year: " + birthYear + "<br/>");
document.write("Your age is : " + currentAge);


// //Q = 12
document.write("<br/><h1>The Geometrizer</h1>");
var radius = 20;
document.write("<br/> radius of circle : " + radius);

var pi = 3.142;
var cricumference = 2 * parseFloat(pi) * parseFloat(radius);
var area = parseFloat(pi) * (parseFloat(radius) * parseFloat(radius));
document.write("<br/>The circumference of circle is: " + cricumference);
document.write("<br/>The area of circle is: " + area);

// //Q = 13
document.write("<br/><h2>The Lifetime Supply Calculator</h2>");
var favouriteSnack = "Potato chips";
var currentAgeNow = 21;
var maximumAge = 80;
var esteAmmount = 4;
var totalforLife = (parseInt(maximumAge) - parseInt(currentAgeNow)) * 2;
document.write("<br/>Favourite Snack: " + favouriteSnack);
document.write("<br/>Current Age: " + currentAgeNow);
document.write("<br/>Estimated maximum age: " + maximumAge);
document.write("<br/>Amount of snacks per day: " + esteAmmount);
document.write("<br/>You will need " + totalforLife + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge);









/* Chapter no 6-9 */

//Q = 1
var a = 10;
document.write("<br/><br/>Result:");
document.write("<br/>The value of a is: " + a);
document.write("<br />....................................<br />");
document.write(" <br/>The Value of ++a is: " + (++a));
document.write("<br/>Now value of a is:" + a);
document.write("<br/><br/>The Value of a++ is: " + (a++));
document.write("<br/>Now value of a is:" + a);
document.write("<br/><br/>The Value of --a is: " + (--a));
document.write("<br/>Now value of a is:" + a);
document.write("<br/><br/>The Value of a-- is: " + (a--));
document.write("<br/>Now value of a is:" + a);

//Q = 2
document.write("<br/><br/>");
var a = 2;
var b = 1;
document.write("<br /><br />--a = ".concat(--a));
document.write("<br />--a - --b = ".concat((--a) - (--b)));
document.write("<br />--a - --b + ++b = ".concat((--a) - (--b) + (++b)));
document.write("<br />--a - --b + ++b + b-- = ".concat((--a) - (--b) + (++b) + (b--)));
document.write("<br/> <br/>a is = ".concat(a));
document.write("<br />b is = ".concat(b));

var result = (--a) - (--b) + (++b) + (b--);
document.write("<br />result is = ".concat(result));

//Q = 3
var nameInp = prompt("Enter your name: ");
document.write("<br/><br/> Assalam-o-Alaikum! " + nameInp  );

//Q = 4


document.write("<br /><br />");
var numForTable = prompt("Enter any number to generate its Table:");
if (numForTable === "") {
    for (var i = 1; i < 11; i++) {
        document.write("5 x ".concat(i, " = ", 5 * i, "<br />"));
    }
} else {
    for (var j = 1; j < 11; j++) {
        document.write(numForTable + " x ".concat(j, " = ", numForTable * j, "<br />"));
    }
}


//Q = 5
var subj1 = prompt("Enter First Subject Name")
var subj2 = prompt("Enter Second Subject Name")
var subj3 = prompt("Enter Third Subject Name")
var subj1Marks = prompt("Enter First Subject Marks")
var a = Number(subj1Marks)
var subj2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2jMarks)
var subj3Marks = prompt("Enter Third Subject Marks")
var c = Number(subj3Marks)
var totalMarks = 100

document.write(
    "<table>" +
    "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>" +
    "<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + a + "</td><td>" + (a / totalMarks * totalMarks) + " %</td></tr>" +
    "<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + a + "</td><td>" + (a / totalMarks * totalMarks) + " %</td></tr>" +
    "<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + a + "</td><td>" + (a / totalMarks * totalMarks) + " %</td></tr>" +
    "<tr><td></td><td>" + (totalMarks * 3) + "</td><td>" + (a + b + c) + "</td><td>" + ((a + b + c) / (totalMarks * 3) * 100) + " %</td></tr>" +
    "</table>"
)













/* Ch3pter No 9-11- */

//Q = 1
var city = prompt("Enter city name:");
if (city === "sehwan" || city === "Hyderabad") {
    alert("Welcome to the city of lights");
} else {
    alert("Sorry write the correct one");
};

//Q = 2
var gender = prompt("Enter Your Gender:");
if (gender === "male" || gender === "Male") {
    alert("good morning sir");
} else if (gender === "female" || gender === "Female") {
    alert("good morning madam");
} else {
    alert(" Please! Enter the correct gender !");
}

 //Q = 3




//Q = 4
var fuel = prompt("Enter Your Remaining Fuel Level")
if (fuel < "0.25 ") {
    alert("Please re fill the fuel in your car")
}

//Q = 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Q = 6
var sub1 = prompt("Enter Marks of subject 1 : ");
var sub2 = prompt("Enter Marks of Subject 2 : ");
var sub3 = prompt("Enter Marks of Subject 3 : ");

sub1 = parseInt(sub1);
sub2 = parseInt(sub2);
sub3 = parseInt(sub3);
var tmarks = (sub1 + sub2 + sub3);
var per = (tmarks / 300) * 100;
document.write("<h1>Marks Sheet</h1>")
if (per >= 80) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is A-one <br/>Remarks : Excellent");
} else if (per >= 70) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is A <br/>Remarks : Good");
} else if (per >= 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is B <br/>Remarks : You need to improve");
} else if (per < 60) {
    document.write("Total Marks : 300 <br/>Marks Obtained : ", tmarks, "<br/>Percentage : ", per, "%<br/>Grade is Fail <br/>Remarks : Sorry");
}

//Q = 7
var guess = 10
var userInput = +prompt("Enter the number")
if (guess == userInput) {
    alert("BINGO! Correct Answer")
} else if (userInput + 1 == guess) {
    alert("Close enough to the correct answer")
} else {
    alert("You lost!")
}

//Q = 8
var checkDivisibility = prompt("Enter any number to check divisibility by 3");
if (parseFloat(checkDivisibility) % 3 === 0) {
    alert("It is divisible by 3");
} else {
    alert("It is not divisible by 3");
}

//Q # 9
var checkEven = prompt("Enter any number to check whether it is even or odd");
if (parseFloat(checkEven) % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

//Q = 10
var temprature = prompt("Enter the temprature:")
var t = Number(temprature)

if (t > 40) {
    alert("It is too hot outside")
}

if (t > 30) {
    alert("The weather today is Normal")
}

if (t > 20) {
    alert("Today's weather is cool")
}

if (t > 10) {
    alert("OMG! Today's weather is so cool")
}

//Q = 11
var number1 = prompt("Enter the first number:");
var number2 = prompt("Enter the second number:");
var operator = prompt("Enter and operator '+', '-', '*', '/', '%'");
var calculatedResult = 0;
if (operator === "+") {
    calculatedResult = parseFloat(number1) + parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "-") {
    calculatedResult = parseFloat(number1) - parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "*") {
    calculatedResult = parseFloat(number1) * parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "/") {
    calculatedResult = parseFloat(number1) / parseFloat(number2);
    alert(calculatedResult);
} else if (operator === "%") {
    calculatedResult = parseFloat(number1) % parseFloat(number2);
    alert(calculatedResult);
}

// Chapter no 12-13  

//Q = 1
var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90) {
    alert("Your input is am uppercase letter")
} else if (ascii >= 97 && ascii <= 122) {
    alert("Your input is a lowercase letter")
} else if (ascii >= 48 && ascii <= 57) {
    alert("Your input is a number")
} else {
    alert("Invalid input detected")
}

//Q = 2
var integer1 = prompt("Enter the first number:");
var integer2 = prompt("Enter the second number:");
if (parseInt(integer1) < parseInt(integer2)) {
    alert("Number 2 is greater than number 1");
}
if (parseInt(integer1) > parseInt(integer2)) {
    alert("Number 1 is greater than number 2");
}
if (parseInt(integer1) === parseInt(integer2)) {
    alert("Number 1 and number 2 are equal");
}

//Q = 3
var numCheck = prompt("Enter a number to check wheteher it is positive, negative or zero");
if (numCheck === 0) {
    alert("The entered number is zero");
}
if (numCheck < 0) {
    alert("The entered number is negative");
}
if (numCheck > 0) {
    alert("The entered number is positive");
}

//Q = 4
var ch = prompt("Enter a character to check whether it's vowel or consonent :");
if ((ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') || (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')) {
    alert("True, entered character is Vowel");
} else {
    alert("False,entered character is not vowel");
}
//Q = 5
var pwd = "js1999";
var inputPassword = prompt("Enter your password");
if (inputPassword == "") {
    alert("Please Enter Your Password");
} else if (inputPassword === pwd) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password")
}

//Q = 6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

//Q = 7

var userTime = prompt("Enter a time in 24 hour clock format. Like: 1900 = 7pm");
if (userTime >= 0000 && userTime < 1200) {
    alert("Good Morning!");
} else if (userTime >= 1200 && userTime < 1700) {
    alert("Good Afternoon!");
} else if (userTime >= 1700 && userTime < 2100) {
    alert("Good Evening!");
} else if (userTime >= 2100 && userTime <= 2359) {
    alert("Good Night!");
} else {
    alert("Enter a valid time.");
}

// Chapter no 14-16 //

//Q = 1
var stdNames = [];

//Q = 2
var studNames = new Array();

//Q = 3
var food = ["Biryani", "Tikka", "Pulao", "Kunna"];

//Q = 4
var nums = [1, 2, 3, 4, 5];

//Q = 5
var boolArray = [true, false];

//Q = 6
var mixedArray = ["Imran Khan", 18, true];

//Q = 7
document.write("<br/><br/>")
var qualificationInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualifications:<br />");
for (var i = 0; i < qualificationInPak.length; i++) {
    document.write((i + 1) + ") " + qualificationInPak[i] + "<br/>");
}

//Q = 8
var studentsName = ["Imran", "Nawaz", "Hassan"];
var studentsScore = [480, 230, 320];
var totalsMarks = 500;
document.write("<br /><br />");
for (var i = 0; i < studentsName.length; i++) {
    document.write("Score of ".concat(studentsName[i], " is ", studentsScore[i], ". Percentage: ", (studentsScore[i] / 500) * 100, "%<br/>"));
}

//Q = 9
document.write("<br/><br/>");
var color = ["Red", "Yellow", "Blue", "Green", "White", "Black"];
document.write(color + "<br/>");
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning)
document.write(color + "<br/>");
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending)
document.write(color + "<br/>");
color.shift()
document.write(color + "<br/>");
color.pop()
document.write(color + "<br/>");
var update = +prompt("At which index do you want to add color?")
var newColor = +prompt(" which color do you want to add on that index?")
color.splice(update, 0, newColor)
document.write(color + "<br/>");
var dlete = +prompt("At which index do you want to delete color?")
var colorDelete = +prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color + "<br/>");

//Q = 10
document.write("<br/><br/>");
var stdScore = [320, 230, 480, 120];
stdScore.sort();
for (i = 0; i < stdScore.length; i++) {
    document.write(stdScore[i] + "<br/>");
}

//Q = 11
document.write("<br/><br/>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List: <br/>" + cities + "<br/>")
var selectedCities = cities.slice(2, 4)
document.write("Selected Cities List: <br/>" + selectedCities);

//Q = 12
document.write("<br/><br/>");
var arr = ["This", "is", "my", "cat"];
document.write("Array: <br/>" + arr + "<br/>")
document.write("<br/>");
var join = arr.join(" ")
document.write("String: <br/>" + join)

//Q = 13
document.write("<br/><br/>");
var animals = ["Elephant", "Lion", "Tiger", "Girrafe"];
document.write("Animals : <br/>" + animals + "<br/>");
var firstAnimal = animals.shift();
document.write("out : <br/>" + firstAnimal + "<br/>");
var secondAnimal = animals.shift();
document.write("Out : <br/>" + secondAnimal + "<br/>");
var thirdAnimal = animals.shift();
document.write("Out : <br/>" + thirdAnimal + "<br/>");
var fourthAnimal = animals.shift();
document.write("Out : <br/>" + fourthAnimal + "<br/>");

//Q = 14
document.write("<br/><br/>");
var animals = ["Elephant", "Lion", "Tiger", "Girrafe"];
document.write("Animals : <br/>" + animals + "<br/>");
var firstAnimal = animals.pop();
document.write("out : <br/>" + firstAnimal + "<br/>");
var secondAnimal = animals.pop();
document.write("Out : <br/>" + secondAnimal + "<br/>");
var thirdAnimal = animals.pop()
document.write("Out : <br/>" + thirdAnimal + "<br/>");
var fourthAnimal = animals.pop();
document.write("Out : <br/>" + fourthAnimal + "<br/>");

//Q = 15

document.write("<br/><br/>");
var phoneBrands = ["Apple", "Samsung", "Motorla", "Nokia", "Sony", "Haier"];
document.write(
    "<select>" +
    "<option>" + phoneBrands[0] + "</option>" +
    "<option>" + phoneBrands[1] + "</option>" +
    "<option>" + phoneBrands[2] + "</option>" +
    "<option>" + phoneBrands[3] + "</option>" +
    "<option>" + phoneBrands[4] + "</option>" +
    "<option>" + phoneBrands[5] + "</option>" +
    "</select>"
);

