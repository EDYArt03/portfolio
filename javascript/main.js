addEventListener("DOMContentLoaded", listening);

function listening() {
    const menu = document.getElementById("menuContainer");
    menu.style.left = "-200px";
    const button = document.getElementById("menuButton");
    button.addEventListener("click", revealDrop);
}

function revealDrop() {
    const image = document.getElementById('buttonImg');
    const menu = document.getElementById("menuContainer");
    if(menu.style.left === "-200px") {
        menu.style.left = "0px";
        image.src = "icons/arrow-left.png";
    }
    else {
        menu.style.left = "-200px";
        image.src = "icons/arrow-right.png";
    }
}