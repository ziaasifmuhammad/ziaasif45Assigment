var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var pername = "Asif";
console.log("Hallow", pername, "would you like to learn typescript today");
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
var personName = "Asif";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
//. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
//following, including the quotation marks:
var personCot = "The only thing we have to fear is fear itself. - ";
console.log(personCot);
//5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.//
var famousPerson1 = 'Asif Zia';
var message1 = "The only thing we have to fear is fear itself. -";
console.log(famousPerson1, message1);
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var myName = "/n/t Asif Zia/t/n";
console.log(myName);
var myNameWithoutSpace = myName.trim();
console.log(myNameWithoutSpace);
//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
8.; // You should create four lines that look like this:
console.log(7 + 1);
console.log(11 - 3);
console.log(40 / 5);
console.log(8 * 1);
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var myfavoriteNumber = 5;
var createMessage = "my favorite number is";
console.log(createMessage, myfavoriteNumber);
//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.
//Famous cote of the person,Date(5/3/2024)
var famousPerson = 'Asif Zia';
var message = "The only thing we have to fear is fear itself. -";
//performing addition,subtraction,division,multiplication, Date (4/3/2024)
console.log(7 + 1);
console.log(11 - 3);
console.log(40 / 5);
console.log(8 * 1);
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendName = ["Ali", "Amir", "Arham", "Kiswa", "Arshad"];
console.log(friendName[0]);
console.log(friendName[1]);
console.log(friendName[2]);
console.log(friendName[3]);
console.log(friendName[4]);
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.
var friendName1 = ["Ali", "Amir", "Arham", "Kiswa", "Arshad"];
var message2 = "you are best friend";
console.log(friendName1[0], message2);
console.log(friendName1[1], message2);
console.log(friendName1[2], message2);
console.log(friendName1[3], message2);
console.log(friendName1[4], message2);
//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["Honda Cd 70", "Honda 125", "Suzaki 150", "GD 110"];
var message3 = "I would like to own a";
console.log(message3, favoriteTransportation[0]);
console.log(message3, favoriteTransportation[1]);
console.log(message3, favoriteTransportation[2]);
console.log(message3, favoriteTransportation[3]);
//consol.log("I would like to own a"+" "+favoriteTransportation)
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//let invitefriend = ["asif","Ali","Arshad"];
//invitefriend.map((item)=> console.log('Hallow,${item} your are invite to dinner'))
15.; //Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
var invitefriend = ["Asif", "Ali", "Arshad"];
var canNotAttend = "Asif";
console.log('${canNotAttend} can nt make it for dinner');
var newGest = "kiswa";
invitefriend[invitefriend.indexOf(canNotAttend)] = newGest;
console.log(invitefriend);
invitefriend.map(function (item) { return console.log('Hallow,${item} your are invite to dinner'); });
/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
//New guest
var gestArray = ["Asif", "Ali", "Hussen", "Saad"];
//one person not attend dinner
var canNotCome = "Saad";
//Ask your new friend to join
var newFriendCome = "Arshad";
gestArray[gestArray.indexOf(canNotCome)] = newFriendCome;
console.log(gestArray);
//message(all are invited to join bigger dinner table)
gestArray.unshift("Shahid");
console.log(gestArray);
//new middle guest added
var middleGest = "Sallam";
var middleIndex = gestArray.length / 2;
gestArray.splice(middleIndex, 0, middleGest);
console.log(gestArray);
// Use append() to add one new guest
gestArray.push("Nadir");
console.log(gestArray);
//Print a new set of invitation messages
gestArray.map(function (item) { return console.log('Dear $(item) you are invite for dinner'); });
/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/
var gest_Array = ["Asif", "Ali", "Hussen", "Saad"];
var middle_Gest = "Sallam";
var middle_Index = gest_Array.length / 2;
gest_Array.splice(middle_Index, 0, middle_Gest);
gest_Array.push("Nadir");
console.log(gest_Array);
//Print a new set of invitation messages
console.log("Sorry i am only invite two friend");
while (gestArray.length > 2) {
    var removeGest = gestArray.pop();
    console.log('\nsorry ${removeGest} we can invite only two gest');
}
;
gestArray.map(function (item) { return console.log('\n $(item) you are invite for dinner'); });
/*18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var placeToVesit = ["londen", "spain", "Ittly", "Kashmir"];
console.log(placeToVesit);
console.log(placeToVesit.sort());
console.log(placeToVesit);
console.log(placeToVesit.sort().reverse());
console.log(placeToVesit);
console.log(placeToVesit.reverse());
var sortarray = ["londen", "spain", "Ittly", "Kashmir"];
sortarray.sort();
console.log(sortarray);
sortarray.reverse();
console.log(sortarray);
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.
var $gestArray = ["Asif", "Ali", "Hussen", "Saad"];
console.log($gestArray.length, "people are invite to dinner");
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.
var cities = ["karachi", "kashmir", "Badin", "Dadu", "Sukker"];
cities.map(function (item) { return console.log(item); });
var person1 = {
    name: "Asif",
    age: 24,
    address: 'house 24'
};
var person2 = {
    name: "Ali",
    age: 32,
    address: "A36 Model"
};
console.log('person1 name: ${person1. name}, age: $${person1.age}');
console.log('person2 name: ${person2.name}, age: $${person2.age}');
//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.
var arrays = ["Ali", "Asad", "wally", 3, 6, 9];
console.log(arrays[9]);
//ronge number send in array so undefine error come
console.log(arrays[3]);
/*23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
var age = 18;
var cnic = 18;
//equality comparision
console.log(age == cnic); //true
//most equality comparision
console.log(age === cnic); //true
//unequality copparision
age = 17;
console.log(age != cnic); //true
//strick unequality comparision
console.log(age !== cnic); //true
//less the restraction age
console.log(age < cnic); //true
//grater then age restraction
console.log(age > cnic); //fals
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
var car = "subaru";
var Age = 25;
var Number1 = [1, 3, 4, 6];
//test 1 Equality 
console.log(car == "subaru");
//test 2 most equality
console.log(car === "subaru"); //false
//test 3 unequality
console.log("it car != 'toyta'? i predic true");
console.log(car != "subaru"); //True
//unequality most
console.log("it car !== 'subaru? i predic false");
console.log(car !== "subaru"); //false
//lowercase function test
console.log(car.toLowerCase() == "subaru");
//lower case conversion 
console.log(car === car.toLowerCase());
//numerical test
console.log("it age ==25? i predic true");
console.log(Age == 25); //True
console.log("it age !=30? i predic true");
console.log(Age != 30); //True
console.log("its Age == 25? i predic True");
console.log(Age == 25); //true
console.log("its Age !=30? i predic true");
console.log(Age != 30); //True
console.log('its Age > 20? i predic False');
console.log(Age > 20); //False
console.log("its Age<34? i predic true");
console.log(Age < 34); //Ture
//logical operaters
console.log("its Age > 30 || Age < 18? i predic false");
console.log(Age > 30 || Age < 18); //no condition match False
console.log("its Age > 20 && Age < 30? i pretic true");
console.log(Age > 20 && Age < 30); //both condition true
//Array test
console.log("is 3 number in array? i predic true");
console.log(3 in Number1); // yes it is
console.log("is 12 number i array? i predic false ");
console.log(12 in Number1); //false not present in array
/*25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)*/
var alienColor = "green";
if (alienColor == "green") {
    console.log("The playeer just enter 5 points");
}
;
alienColor = "red";
if (alienColor == "green") {
    console.log("");
}
/*26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
var alienColor1 = "green";
if (alienColor1 == "green") {
    console.log("The playeer just enter 5 points for shooting the alien");
}
else {
    console.log("The player just earned 10 points.");
}
alienColor1 = "red";
if (alienColor1 == "green") {
    console.log("The player just earn 5 points for shooting the alien");
}
else {
    console.log("The player just earn 10 points");
}
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
var alienColor2 = "green";
if (alienColor2 == "green") {
    console.log("The playeer just enter 5 points for shooting the alien");
}
else if (alienColor2 == "yellow") {
    console.log("The player earned 10 points");
}
else if (alienColor2 == "Red") {
    console.log("The player earned 15 points");
}
else {
    console.log("please select the right colour");
}
/*28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
var age1 = 25;
if (age1 < 2) {
    console.log("The person is a baby");
}
else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler");
}
else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid");
}
else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager");
}
else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult");
}
else if (age1 > 65) {
    console.log("The person is an elder");
}
//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!
var Favorit_fruit = ["Apple", "Orange", "Mango"];
if (Favorit_fruit.includes("Apple")) {
    console.log("You really like apple!");
}
if (Favorit_fruit.includes("grapes")) {
    console.log("You really like grapes!");
}
if (Favorit_fruit.includes("mango")) {
    console.log("You really like mango!");
}
if (Favorit_fruit.includes("orange")) {
    console.log("You really like orange!");
}
if (Favorit_fruit.includes("watermallen")) {
    console.log("You really like watermallen");
}
/*30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
// let users:string[] =["Asif","Ali","Arshad","Shadid","Admin"];
// for(let user to users{
// if(users === "Admin"){
// console.log("hallow admin,would you like to see a status report")
// }
// } else{
//     console.log("Hallo ${users},thank you for logging in again")
// }
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var users1 = ["Asif", "Ali", "Arshad", "Shadid", "Admin"];
if (users1.length === 0) {
    console.log("We need to find some users!");
}
//Remove all of the usernames from your array,
else {
    users1 = [];
    console.log("remove all of the usernames" + users1.length);
}
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_User = ["Asif", "Ali", "Arshad", "Shahid", "Rahman"];
var new_users = ["sana", "Asif", "Kiswa", "Ali", "Sadia"];
new_users.forEach(function (new_user) {
    var new_userlower = new_user.toLowerCase();
    //use some() method
    var userNameTaken = current_User.some(function (current_User) { return current_User.toLowerCase() === new_userlower; });
    if (userNameTaken) {
        console.log("".concat(new_user, "this username is available"));
    }
    else {
        console.log("".concat(new_user, " the add member new"));
        current_User.push(new_user);
    }
});
console.log(current_User);
//33. Ordinal Numbers: Ordinal n 
//a  Az umbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Sto 31re the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be on a separate line.
var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinal_number.length; i++) {
    if (ordinal_number[i] == 1) {
        console.log("".concat(ordinal_number[i], "st"));
    }
    else if (ordinal_number[i] == 2) {
        console.log("".concat(ordinal_number[i], "nd"));
    }
    else if (ordinal_number[i] == 3) {
        console.log("".concat(ordinal_number[i], "rd"));
    }
    else if (ordinal_number[i] >= 4 && ordinal_number[i] <= 9) {
        console.log("".concat(ordinal_number[i], "th"));
    }
}
/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!*/
var pizzas = ["Taka flaver", "BBQ flaver", "Mulli boti"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I like ".concat(pizzas, " pizza"));
}
console.log("Pizza is an Italian dish consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.I really love pizza!");
/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!*/
var pet = ["Dog", "Cat", "lion"];
pet.forEach(function (pet) {
    console.log("A ".concat(pet, " would make a great pet"));
});
console.log("Any of these animals would make a great pet!");
/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with a message \"").concat(message, "\" prented on it"));
}
make_shirt("medium", "The grass is greener where you water it. ");
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
function make_shirt1(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with a message \"").concat(message, "\" prented on it"));
}
make_shirt1();
make_shirt1("Medium");
make_shirt1("Small");
/*38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.*/
function describe_city(city_Name, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city_Name, " is in ").concat(country);
}
var city1 = describe_city("Pakista", "Karachi");
var city2 = describe_city("Pakistan", "Hyderabad");
var city3 = describe_city("Pakistan", "Dadu");
console.log(city1),
    console.log(city2);
console.log(city3);
/*39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.*/
function city_country(cityName, Country) {
    console.log("\"".concat(cityName, ",").concat(Country, "\""));
}
city_country("Karachi", "Pakistan");
var my_city = city_country("Karachi", "Pakistan");
console.log(my_city);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Mumbai", "India"));
console.log(city_country("Beijing", "Chain"));
/*40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/
function make_album(artest, Album_title) {
    return { artest: artest, Album_title: Album_title };
}
var album1 = make_album("Ali Zuffer", "Chnno ke ank");
var album2 = make_album("Arif Lohar", "Jugni");
var album3 = make_album("shahzad roy", "laga reh");
console.log(album1);
console.log(album2);
console.log(album3);
//Make at least one newfunction call that includes the number of tracks on an album.
function make_album2(artest, Album_title, numberOfTrack) {
    return { artest: artest, Album_title: Album_title, numberOfTrack: numberOfTrack };
}
var album4 = make_album2("Ali Zuffer", "Chnno ke ank", 4);
var album5 = make_album2("Arif Lohar", "Jugni", 12);
var album6 = make_album2("shahzad roy", "laga reh", 9);
console.log(album4);
console.log(album5);
console.log(album6);
/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
function show_politetion(politics) {
    for (var _i = 0, politics_1 = politics; _i < politics_1.length; _i++) {
        var politetion_1 = politics_1[_i];
        console.log(politetion_1.charAt(0).toUpperCase() + politetion_1.slice(1));
    }
}
var politetion = ["Nawaz Sharif", "Zerdari", "Imran Khan"];
show_politetion(politetion);
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
var magician = ["Ali", "Abbas", "Akram"];
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + "the great to each magician";
    }
}
make_great(magician);
/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
var magicianName = ["Ali", "Arshad", "Abbas", "Asif"];
var magicianNameCopy = [magicianName];
function show_magician(great) {
    var withGreeting = " ";
    for (var _i = 0, magicianName_1 = magicianName; _i < magicianName_1.length; _i++) {
        var item = magicianName_1[_i];
        withGreeting += "".concat(great, " ").concat(item, "\n");
    }
    return withGreeting;
}
;
var myGreatings = show_magician("Hallow");
var makeArray = myGreatings.split('\n');
console.log(makeArray);
//original Array
console.log(magicianName);
/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
function makeSandwiches(item) {
    console.log("\nMaking youer sandwich with:");
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("enjoy your sandwich \n");
}
makeSandwiches(["chachup", "Cheese", "lettuce"]);
makeSandwiches(["Beans", "Mushroom", "Cheese"]);
makeSandwiches(["Jelly", "vegitable", "Olive"]);
/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.*/
function CarDetails(manufacturer, model) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, model: model }, Object.fromEntries(additionalInfo));
    return car;
}
;
var myCarDetail = CarDetails("Toyta", "Corlla", ["colour", "Blue"], ["Year", "2003"]);
console.log(myCarDetail);
