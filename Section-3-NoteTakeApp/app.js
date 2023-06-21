//load fs module
const validator = require('validator')
var validate = require("validate-npm-package-name")

const {add, getNotes} = require("./utils")
const sum = add(2,3)
console.log(sum)
const notes = getNotes("Busra")
console.log(notes)


console.log(validator.isEmail('andrewexample.com'))
console.log(validator.isURL('andrewexample.m'))
console.log(validate('excited!'))

