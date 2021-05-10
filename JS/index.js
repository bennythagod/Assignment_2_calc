function generateFibo(x) {
    let sequence = [];

    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i <= x; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];

    }
    return sequence[x]
}

function calculate() {
    let x = document.getElementById("X").value;
    x = Number(x);
    let y = document.getElementById("Y");
    y.innerText = generateFibo(x);
}

function genetorFibRecursive(x) {
    if (x < 2) {
        return 1;
    } else {
        return genetorFibRecursive(x - 2) + genetorFibRecursive(x - 1);
    }
}