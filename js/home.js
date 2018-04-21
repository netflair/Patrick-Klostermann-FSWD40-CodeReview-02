//Change Invoice in header
var tokio = document.getElementById('tokio');
var moskau = document.getElementById('moskau');
var invoice = document.getElementById('sum');

//Listen for click, execute function
tokio.addEventListener("click", changeInvoice);
moskau.addEventListener("click", changeInvoice);

function changeInvoice() {
    //if checked assign t value
    if (tokio.checked == true) {
        t = 2436;
    }
    //if not assign different value
    else {
        t = 0;
    }
    //if checked assign m value
    if (moskau.checked == true) {
        m = 2287;
    }
    //if not assign different value
    else {
        m = 0;
    }
    //Output the sum of both in the header
    invoice.innerHTML = t + m;
}