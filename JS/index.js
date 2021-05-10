// function fibo() {
//     let x = document.getElementById("X").value;
//     document.getElementById("Y").innerHTML = x;
//     console.log(x);
// }

// function calc(albert) {
//     let result = 0;
//     let current = 0;
//     let prev = 1;
//     let preprev = 0;
//     for (i = 0; i < 50; i++) {
//         current = prev + preprev;
//         preprev = prev;
//         prev = current;

//     }

// }

let x = 5;
let y = 3;
let elem = document.getElementById("declaring");
elem.innerText = "The Fibonacci of " + x + " is " + y + ".";

function generateFibo(x) {
    let sequence = [];

    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < x; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];

    }
    return sequence[x - 1]
}