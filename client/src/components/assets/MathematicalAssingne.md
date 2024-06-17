### VARIABLES  
# Mathematical Assignment Operators  
<kbd> 6 min </kbd>   
Let’s consider how we can use variables and math operators to calculate new values and assign them to a variable. Check out the example below:
``` javascript
let w = 4;
w = w + 1;

console.log(w); // Output: 5
```
In the example above, we created the variable <kbd> w </kbd> with the number <kbd> 4 </kbd> assigned to it. The following line,<kbd>  w = w + 1 </kbd> , increases the value of<kbd>  w </kbd> from <kbd> 4 <kbd/> to  <kbd> 5</kbd> .

Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. We could re-write the code above to be:
``` javascript
let w = 4;
w += 1;

console.log(w); // Output: 5
``` 
In the second example, we used the += assignment operator to reassign w. We’re performing the mathematical operation of the first operator + using the number to the right, then reassigning w to the computed value.

We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.
``` javascript
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4
``` 
Let’s practice using these mathematical assignment operators!

1. Use the <kbd>+=</kbd> mathematical assignment operator to increase the value stored in <kbd>levelUp</kbd> by <kbd>5</kbd>.