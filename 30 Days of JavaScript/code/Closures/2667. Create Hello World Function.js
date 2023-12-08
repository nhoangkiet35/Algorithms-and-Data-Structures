function createHelloWorld() {
    return function () {
        return "Hello World";
    };
}

// Creating a function using createHelloWorld
const helloWorldFunction = createHelloWorld();

// Now helloWorldFunction will always return "Hello World"
console.log(helloWorldFunction()); // Output: "Hello World"
console.log(helloWorldFunction()); // Output: "Hello World"
