// var PI = 3.14;
// PI = 42;  stop me from doing this!

const PI = 3.14;
// By using const a ES2015 global constant. It stops the variable PI from being reassigned inside the same scope.

// Quiz

// - What is the difference between *var and let?
//      The difference between var and let. Is that var will let you reassign and redeclare. 
//      Var will also let you access a hoisted variable. Where as let won't let you redeclare and creates a block scope.

// - What is the difference between var and const?
//      Var will let you reassing and redeclare but you can't do either with const. Const also creates a block scope and var can access 
//      a hoisted variable.

// - What is the difference between let and const?
//      You can reassign with let but you can't with const.

// - What is hoisting?
//      It's how we explain how the JS compiler behaves. Variables are lifted (hoisted) to the top of the scope they are declared in. 
//      Declarations for functions can also be "hoisted" "before" they are defined. 