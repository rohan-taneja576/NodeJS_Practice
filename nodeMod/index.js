    const chalk = require('chalk');
    const validator = require('validator')

    console.log(chalk.blue('Hello World!'))
    console.log(chalk.green.inverse('Hello World!'))

    const res = validator.isEmail('rohan@gmail.com')
    console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))