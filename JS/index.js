let loading = document.getElementById("loading");
let y = document.getElementById("Y");
let x = document.getElementById("X");
$("#X").change(
    function() {
        let alertMessage = document.getElementById("alert");
        let button = document.getElementById("button");
        if (Number(x.value) > 50) {
            alertMessage.style.display = "inline";
            button.setAttribute("disabled", "disabled");
        } else {
            alertMessage.style.display = "none";
            button.removeAttribute("disabled");
        }
    }
)

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

    $.get(url + x, {})
        .done(function(data) {
            loading.style.display = "none";

            y.innerText = data.result;

        })
        .fail(
            function(data) {
                loading.style.display = "none";
                y.style.color = "red";
                y.style.fontWeight = "normal";
                y.style.textDecoration = "none";
                y.innerHTML = "Server Error: " + data.responseText;

            }
        )

}


function calculate() {
    y.style.color = "black";
    y.innerText = "";
    y.style.textDecoration = "underline";
    y.style.fontWeight = "bold";

    loading.style.display = "inline";

    fiboRequest(Number(x.value));

}