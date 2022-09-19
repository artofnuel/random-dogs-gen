// #### We will be getting our dog images from
// Dog API
// https://dog.ceo/api/breeds/image/random

// #### So a couple things to know
// ####Asynchronous Programming
// This means we have been coding linearly prior to now
// the system takes what it knows (scripts/instructions/code) and runs it
// However with Async, it has to get data that it doesnt have immediate access to.
// But the user cannot be forced to wait for this, so it runs the codes it has access to...
// then runs what it has fetched.

// Promises - .then
// once data has been fetched, perform an action with it
// in this case, transform it into a json.

// #### Call our variables

let dogImage = document.getElementById('dogImage');
let dog1 = document.getElementById('dog1');
let dog2 = document.getElementById('dog2');
let dog3 = document.getElementById('dog3');
let dog4 = document.getElementById('dog4');
let dog5 = document.getElementById('dog5');
let dog6 = document.getElementById('dog6');
let dog7 = document.getElementById('dog7');
let dog8 = document.getElementById('dog8');

// Next we literally fetch from our API link

// Asynchronous Programming - Stuff you have to wait for
let getData = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(content => content.json())
    // .then(json => console.log(json))
    .then(json => {
        console.log(json.message)
        dog1.src = `${json.message}`
    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(content => content.json())
    // .then(json => console.log(json))
    .then(json => {
        console.log(json.message)
        dog2.src = `${json.message}`
    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(content => content.json())
    // .then(json => console.log(json))
    .then(json => {
        console.log(json.message)
        dog3.src = `${json.message}`
    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(content => content.json())
    // .then(json => console.log(json))
    .then(json => {
        console.log(json.message)
        dog4.src = `${json.message}`
    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(content => content.json())
    // .then(json => console.log(json))
    .then(json => {
        console.log(json.message)
        dog5.src = `${json.message}`
    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(content => content.json())
    // .then(json => console.log(json))
    .then(json => {
        console.log(json.message)     
        dog6.src = `${json.message}`
    })
}
getData()

let refresh = document.getElementById('refresh')

refresh.onclick = () => getData()

// Just know when you use a fetch you'll be adding those 2 .then()s
// These are API requests.
// JSON converts the data into an object type. It will have two key values.
// 1 is message: the data received, 2 is status: success.
