const menu = document.querySelector("#menu");
const list = document.querySelector("#links");
list.style.transition = "1s";
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
