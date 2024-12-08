function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Modify the function to handle an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}
console.log(greeterArray(user)); // Expected output: Hello, Jane Doe

//Solution 2: Modify to pass only a single string
console.log(greeter(user[0])); // Expected output: Hello, Jane