//load fs module
const chalk = require('chalk');
const colorMessage = chalk.green('Hello')
//console.log(colorMessage)

const yargs = require("yargs");
const getNotes = require("./utils");
 
yargs.version("1.1.0")
//console.log(process.argv)

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Remove a note')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Read a note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        console.log('List notes')
    }
})


console.log(yargs.argv)
