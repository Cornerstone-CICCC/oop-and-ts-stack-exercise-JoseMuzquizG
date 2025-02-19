// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  let tempStack = new Stack()

  while (!stack.isEmpty()) {
    // let removedElement = stack.pop()
    // let i = 0
    // while (!tempStack.isEmpty && removedElement !== tempStack[i]) {
    //   tempStack.push(removedElement)
    // }
    // let remStack = []
    // remStack.push(removedElement)
    // i++
  }
  while (!tempStack.isEmpty()) {
    stack.add(tempStack.pop())
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [5, 2, 1, 3]