//Variables
var sum2 = document.getElementById('sum2');
var price_tokio = document.getElementById('price_tokio');
var price_moskau = document.getElementById('price_moskau');
var table_sum1 = document.getElementById('table_sum1');
var golden_check = document.getElementById('golden_check');
var save = document.getElementById('save');
var tokio = "Tokio";
var moskau = "Moskau";
var tokioPrice = 2436;
var moskauPrice = 2287;
var sum = tokioPrice + moskauPrice;
var golden = sum - sum / 10;
var saveings = sum / 10;

//Change Invoice in header
sum2.innerHTML = sum;
save.innerHTML = saveings + "0 €";

//Info Output with document.write()
document.write(
    "<div id='invoice'><p>If you want to buy a <b>Flight to " + tokio +
    "</b> and a <b>Flight to " + moskau +
    "</b>, it costs:</p><p><b>" + sum + " EUR</b></p></div>"
);

//Output for Booking
price_tokio.innerHTML = tokioPrice + "€";
price_moskau.innerHTML = moskauPrice + "€";
table_sum1.innerHTML = sum + "€";


//Recalculated Output
golden_check.addEventListener("click", changeInvoice);

function changeInvoice() {
    //if checked assign t value
    if (golden_check.checked == true) {
        sum2.innerHTML = golden + "0";
        price_tokio.innerHTML = tokioPrice - tokioPrice / 10 + "0 €";
        price_moskau.innerHTML = moskauPrice - moskauPrice / 10 + "0 €";
        table_sum1.innerHTML = golden + "0 €";
    }
    //if not assign different value
    else {
        sum2.innerHTML = sum;
        price_tokio.innerHTML = tokioPrice + "€";
        price_moskau.innerHTML = moskauPrice + "€";
        table_sum1.innerHTML = sum + "€";
    }
}