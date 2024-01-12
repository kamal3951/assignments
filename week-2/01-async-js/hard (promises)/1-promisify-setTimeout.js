/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000)
    })
}

//npm install runs with a very specific version of node ie 14.0.0
//the tests run with a very specific version of node 16.14.2
//weird

//tho the fn works, voila!

module.exports = wait;
