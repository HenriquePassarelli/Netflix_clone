
function seek() {
    let search = document.getElementById('search').style;

    if (search.display == "none") {
        search.display = "block";
    }
    else {
        search.display = "none";
    }
    console.log(search.display)

}

function Navfunction(x) {
    x.classList.toggle("change");

}









