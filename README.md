# Unexpected Output When Passing Array to Function Expecting String

This code demonstrates a type mismatch error in TypeScript. The `greeter` function expects a string argument, but an array is passed, resulting in unexpected behavior.

## Bug
The bug is in the way the `user` variable is handled. It is an array of strings, but the `greeter` function expects a single string.

## Solution
The solution involves either modifying the `greeter` function to accept an array or modifying the way the `user` variable is handled to pass only a single string to the function.

## How to Reproduce
1. Save the code in a file named `bug.ts`.
2. Compile the code using the TypeScript compiler.
3. Run the compiled JavaScript file.
4. Observe the unexpected output.