let menuButton = document.body.getElementsByClassName("menuButton")[0];

let count = 0;

menuButton.onclick = function openMenu() {
    let opening = (++count) % (2);
    if (opening == 0) {
        document.body.querySelector("nav").style.display = "none";
    } else if (opening == 1) {
        document.body.querySelector("nav").style.display = "block";
    }
};