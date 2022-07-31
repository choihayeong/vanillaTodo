const body = document.body;

function changeBgColor() {
    if (window.innerWidth >= 1024) {
        body.classList.add("bg--pc");
        body.classList.remove("bg--tablet");
        body.classList.remove("bg--mobile");
    } else if (window.innerWidth >= 640) {
        body.classList.remove("bg--pc");
        body.classList.add("bg--tablet");
        body.classList.remove("bg--mobile");
    } else {
        body.classList.remove("bg--pc");
        body.classList.remove("bg--tablet");
        body.classList.add("bg--mobile");
    }
}

changeBgColor();

window.addEventListener("resize", changeBgColor);