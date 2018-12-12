//=============================================

// Part 1: Terms

// 1:
// concatenation: we can join two strings together:
console.log('Hello' + ' World!');

// interpolation: replacing variable that contains values in the result
let name1 = "amin";
console.log("Hello " + name1 + "!");

// 2:
//DRY: do not repeat yourself. Best way to writing a clean code is minimizing repetation.
// to avoid repetation we are using for and while loop


// 3:
// By declaring a variable we are telling the compiler we are going to need that variable in our program

// By assiging a value to a variable we are declaring that variable with default value

// By defining a variable we are clrafying its type, setting a name to it and
// reserving a memory space in a computer for the variabe


// 4:
// we are using const when we have a variable with a fix value which we dont' want 
// to change its vaue in the entire program. 
// using let for a variable when its value will be changed in the program

// 5:
// parent directory is a directory above current directory

// 6:
// using "man" command: man pwd

// 7: 
// it's automatically add the rest of the command or name of file or folder if any exist. 
// It avoids mistyping and save a time 

//===============================================

// Part 2: Boolean expressions and operators

const a = 4; console.log("a = " + a);
const b = 53; console.log("b = " + b);
const c = 57; console.log("c = " + c);
const d = 16; console.log("d = " + d);
const e = 'Kevin'; console.log("e = " + e);

a + b; console.log(a + b);
c - d; console.log(c - d);
'Name' === 'Name'; console.log('Name' === 'Name');
 a + b * c; console.log(a + b * c);
a * a / d; console.log(a * a / d);
e == 'Kevin'; console.log(e == 'Kevin');
48 == '48'; console.log(48 == '48');


//=================================================
// Part 3: While loops

// 1. Infinite loop?
// Yes, it's an infinite loop because the condition is always true and there is no condition 
// or estatment to jump out of loop

// 2. Infinite loop II
// No, because in the second line of the loop the condition is changed,
// therefore in the 2nd iteration program will jump out of the loop since, 
// the condition is no longer "true"
// The epected output is: Do not run this loop


// 3. Reading code

// assigning character "A" to variable letters
let letters = "A";
// assigning 0 to variable i
let i = 0;
// difining a while loop with condition of if i less than 20 
while (i < 20) { // while loop will iterate 20 times till i = 21 then will jump out of the loop
    // letters = letters + "A"; means concatenating what was assigned to letters with charachter "A": letters:AA
    letters += "A";
    // i = i + 1; incrementing variable i by 1: i = 1
	i++;
}
// print final value of letters which is: AAAAAAAAAAAAAAAAAAAAA (21 A)
console.log(letters);

// after running a code I got exactly the answer I wrote above

//============================================

//Part 4: Loops!

// 1. for loops
// in the while loop we set a condition first and in each iteration we check if the condition is true
// in the for loop we are using a counter to reach a condition getting false
// in while loop we don't know how many times loop needs to run
// in for loop we kow exactly number of times loop needs to run
// using both loops to run specific code(s) number of times until a reach a false condition

// 2. Basic for loop
for (let index = 0; index <= 999; index++) {
    console.log(index);    
}

// 3. The mechanics of a for loop
// The first part of the control statement is: i = 0; // starting a variable i by assigning 0 to it
// The second part of the control statement is: i < 100; // check if i is less than 100
// The third part of the control statement is: i++; i = i + 1 // for next iteration increment an i by 1

// 4. for loop in reverse
for (let index = 999; index >= 0; index--) {
    console.log(index);    
}

// 5. More counting
for (let index = 1; index <= 10; index++) {
    console.log("The valie of " + index + " is: " + index + " of 10");
}