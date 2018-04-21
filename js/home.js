//Variables----------------------------------------------------------------
//Get Containers for Output
var tokio = document.getElementById('tokio');
var moskau = document.getElementById('moskau');
var invoice = document.getElementById('sum');

//Get Containers for added Classes
var tokio_label = document.getElementById('tokio_label');
var moskau_label = document.getElementById('moskau_label');
var tokio_img = document.getElementById('tokio_img');
var moskau_img = document.getElementById('moskau_img');
var tokio_info = document.getElementById('tokio_info');
var moskau_info = document.getElementById('moskau_info');


//Listen for checkbox cklick, execute function
tokio.addEventListener("click", setState);
moskau.addEventListener("click", setState);

function setState() {
    //Tokio---------------------------------------------------------------

    //if checked set t value, and add classes to containers
    if (tokio.checked == true) {
        t = 2436;
        tokio_label.classList.add("label_checked");
        tokio_img.classList.add("img_checked");
        tokio_info.classList.add("checked");
    }
    //if not checked reset t value, and remove classes from containers
    else {
        t = 0;
        tokio_label.classList.remove("label_checked");
        tokio_img.classList.remove("img_checked");
        tokio_info.classList.remove("checked");
    }


    //Moskau---------------------------------------------------------------

    //if checked set m value, and add classes to containers
    if (moskau.checked == true) {
        m = 2287;
        moskau_label.classList.add("label_checked");
        moskau_img.classList.add("img_checked");
        moskau_info.classList.add("checked");
    }
    //if not checked reset m value, and remove classes from containers
    else {
        m = 0;
        moskau_label.classList.remove("label_checked");
        moskau_img.classList.remove("img_checked");
        moskau_info.classList.remove("checked");
    }

    //Output the sum of both in the header -------------------------------
    invoice.innerHTML = t + m;
}