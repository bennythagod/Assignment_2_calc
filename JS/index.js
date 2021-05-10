function generateFibo(x) {
    let sequence = [];

    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i <= x; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];

    }
    return sequence[x]
}

function fiboRequest(x) {
    let url = "http://localhost:5050/fibonacci/";

    $.get(
        url + x, {},
        function(data) {
            let y = document.getElementById("Y");
            y.innerText = data.result;

        }
    );

}


function calculate() {
    let x = document.getElementById("X").value;
    x = Number(x);

    fiboRequest(x);
}