//Events Module
//NodeJS has a built-in module, called "Events"
//where you can create- , fire- , and listen for- your own events.

//Example1 -> Registering for the event to be fired only one time using once. 
//Example2 -> Create an event emitter instance and register a couple of callback
//Example3 -> Registering for the events with callback parameters


const EventEmitter = require('events')
const event = new EventEmitter()

event.on('sayMyName',()=>{
    console.log('My name is Rohan')
})
event.on('checkPage',(statusCode,msg) => {
    console.log(`status code is ${statusCode} and page response is ${msg}`)
})

event.emit('sayMyName')
event.emit('checkPage',200,'ok')