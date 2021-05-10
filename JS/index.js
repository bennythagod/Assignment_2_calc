function generateFibo(x) {
    let sequence = [];

    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < x; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];

    }
    return sequence[x - 1]
}

let x = 5;
let y = generateFibo(x);
let elem = document.getElementById("declaring");
elem.innerText = "The Fibonacci of " + x + " is " + y + ".";