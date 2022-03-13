const menu = document.querySelector("#menu");
const list = document.querySelector("#links");
const mediaQuery = window.matchMedia("(max-width: 767px)");
list.style.transition = "1s";
if (mediaQuery.matches) {
    list.style.visibility = "hidden";
    list.style.width = "0";
    list.style.height = "0";
    list.style.opacity = "0";
}
menu.onclick = function () {
    if (list.style.visibility != "hidden") {
        list.style.visibility = "hidden";
        list.style.width = "0";
        list.style.height = "0";
        list.style.opacity = "0";
    } else {
        list.style.visibility = "visible";
        list.style.width = "100%";
        list.style.height = "100%";
        list.style.opacity = "1";
    }
};
