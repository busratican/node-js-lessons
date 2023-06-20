//usefull utilities

console.log('utils.js')

const name = 'Büşra'

const add = function(a,b){
    return a+b
}

const getNotes = function(note){
    return "Your notes: " + note
}

module.exports = {add, getNotes}