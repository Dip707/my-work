let total = document.getElementById("total").innerText;

function Increase() {
    total++;
    document.getElementById("total").innerText = total;
    document.getElementById("total").style.fontSize = "1em";

}

document.getElementById('inc').onclick = Increase;

function Decrease() {
    total -= 1;
    document.getElementById("total").innerText = total;
    document.getElementById("total").style.fontSize = "1em";

}
document.getElementById('dec').onclick = Decrease;

document.getElementById('reset').onclick = Reset;


function Reset() {
    total = 0;
    document.getElementById("total").innerText = total;
    document.getElementById("total").style.fontSize = "1em";

}

document.getElementById('time').onclick = displayTime;

function displayTime() {

    document.getElementById("total").innerText = Date();
    document.getElementById("total").style.fontSize = "0.25em";
}