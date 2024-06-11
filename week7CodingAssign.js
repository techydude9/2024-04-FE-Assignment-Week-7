/* Bob Ruzga Week 7 Coding Assignment
** Front End 2024 04 24 Cohort
**
** Coding Steps:
    All questions should be printed to your Browser's console using console.log()

    1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
        a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            Do not use numbers to reference the last element, find it programmatically.
            ages[7] - ages[0] is not allowed!
        b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
        c. Use a loop to iterate through the array and calculate the average age.

    2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
        a. Use a loop to iterate through the array and calculate the average number of letters per name.
        b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

    3. How do you access the last element of any array?

    4. How do you access the first element of any array?

    5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
        For example:

            let names = ["Kelly", "Sam", "Kate"];    // starting with this array
            let nameLengths = [5, 3, 4];             // create a new array

    6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

    7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

    8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

    9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

    10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

    11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

    12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

    13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/

console.log("----- Week7 - 1 --------\n");
    let ages = [3, 9, 23, 64, 2, 8, 28, 93]

    let result1 = ages[ages.length-1] - ages[0];  //using the length method to get length of array and subtract 1 to get the proper idx value
    console.log("Answer for Q1a is " + result1 + "\n Ages array contains: " + ages);

    ages.push (56);   //pushed a new value to the existing array
    result1 = ages[ages.length -1] - ages[0];
    console.log("Answer for Q1b is " + result1 + "\n New Ages array contains: " + ages);

    let avgAge = 0;
    for (let x = 0; x < ages.length; x++) {
        avgAge += ages[x];
    };
    avgAge = avgAge / ages.length;

    console.log("Answer for Q1c is " + avgAge + "\n\n");

// Question 2
console.log("----- Week7 - 2 --------\n" );
    let array2 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    let avgLetters = 0;

    for (let i = 0; i < array2.length; i++) {         // Using string to get element length value
        avgLetters += array2[i].length; // then using the length value, adding it to accumulator (avgLetter)
    };

    avgLetters = avgLetters / array2.length;  // calulates the average name length
    console.log('2a - Average number of letters in the names within this array is ' + avgLetters + '\n\n');

// Q2b:
    let array2String = "";

    for (i = 0; i < array2.length; i++) {
        array2String += array2[i];
        if (i < array2.length -1 ) {
            array2String += " ";  // This if prevents the last element from adding a space after it
        }
    };

    console.log('2b - Here is the array in string format separated by a space:-' + array2String + "-\n\n" );

// Question 3
console.log("----- Week7 - 3 --------\n" );
    console.log('You access the last element of any array by using 1 less than the actual array length since position 1 is zero index.\n\n');

// Question 4
console.log("----- Week7 - 4 --------\n" );
    console.log('You access the first element of any array by using 0 because arrays use zero based indexing.\n\n');

// Question 5
console.log("----- Week7 - 5 --------\n" );
    let namesLengths = [];

    for (let i = 0; i < array2.length; i++) {
        namesLengths.push(array2[i].length);
        };

    console.log('5 - Here is the new array showing the name lengths: ' + namesLengths + '\n  Using ' + array2 + ' array \n' );

// Question 6
console.log("----- Week7 - 6 --------\n" );
    let sumOfNamesLengths = 0;

    for (let i = 0; i < namesLengths.length; i++){
        sumOfNamesLengths += namesLengths[i];
    }

    console.log('6 - Sum of all the elements in the namesLengths arrays = ' + sumOfNamesLengths + "\n\n");

// Question 7
console.log("----- Week7 - 7 --------\n" );
    let joinedWord = " ";    //variable to hold resulting output
    let inputWord = "Ditto"; //input word to repeat
    let repeatN = 5;         //time to concatenate the word to itself

    function joinTheWords(word, n){
            for (x = 1; x <= n; x++) {
                joinedWord += word;
            }
            return joinedWord;  //return the resulting string after looping required num times
    }
    joinTheWords(inputWord, repeatN);  //calling the function with the input values

    console.log('7 - Answer: ' + joinedWord + " resulted from " + inputWord + " joined " + repeatN +" times \n\n");


// Question 8
console.log("----- Week7 - 8 --------\n" );
    let fullName = " ";
    let inFirstName = "Bob";
    let inLastName = "Ruzga";

    function makeFullName (firstName, lastName){
        fullName = firstName + " " + lastName;
        console.log('8 - Answer: ' + fullName + " which came from " + firstName + " & " + lastName + " variables.\n\n" );
    }

    makeFullName(inFirstName, inLastName);


// Question 9
console.log("----- Week7 - 9 --------\n" );
//    let array9 = [10, 5, 12, 63, 22];   // test case 1
//    let array9 = [0, 1, 2, 3, 4]; // test case 2
      let array9 = [95, 12, 22]; // test case 3
    
    function addUpArray9(fArray9){
        let sumArray9 = 0;                      // sets the accumulator to zero here so function can be reused
        for (i = 0; i < fArray9.length; i++){
            sumArray9 += fArray9[i];
        }
//        console.log(sumArray9);  //debugging code
        if (sumArray9 > 100) {
            return true;
        } else {
            return false;
        }
    }

    console.log('9 - Answer: ' + addUpArray9(array9) + " Array's elements are greater then 100 based on this array values " + array9);


// Question 10
console.log("----- Week7 -10 --------\n" );

// Question 11
console.log("----- Week7 -11 --------\n" );

// Question 12
console.log("----- Week7 -12 --------\n" );

// Question 13
console.log("----- Week7 -13 --------\n" );
