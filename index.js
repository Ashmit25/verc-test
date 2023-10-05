import "index.html";

window.count = 0
function showInput() {
    var name1 = document.getElementById("name").value;
    result = name1 + " added to cart ";
    document.getElementById("spanResult").textContent = result;
}