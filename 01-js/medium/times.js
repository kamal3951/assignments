/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const date1 = new Date();
    const time1 = date1.getTime();

    let sum = 0
    for(let i=0;i<n;i++){
        sum+=i
    }

    const date2 = new Date();
    const time2 = date2.getTime();

    console.log(time2-time1)
}

calculateTime(10000000000)