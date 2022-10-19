var counter = 0;
function count() {
    counter += 1;
    document.getElementById("click").innerHTML = counter;
}

function reset() {
    counter = 0;
    document.getElementById("click").innerHTML = counter;
}