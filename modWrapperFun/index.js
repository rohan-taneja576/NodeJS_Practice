// Module Wrapper Function: 
// Under the hood, NodeJS does not run our code directly, it wraps the entire code inside a function before execution. This function is termed as Module Wrapper Function. 

// Before a module’s code is executed, NodeJS wraps it with a function wrapper that has the following structure:

(function (exports, require, module, __filename, __dirname) {
    //module code
  });