
let openMainMenuElement = document.querySelector(".open-main-menu");

openMainMenuElement.addEventListener(
    "click",
    openMainMenu
);

function openMainMenu(){
    console.log("click");
    let mainMenuElement = document.querySelector(".main-menu");
    mainMenuElement.classList.add("visible");
    //ou
    // mainMenuElement.style.display = "block";
}

let closeMainMenuElement = document.querySelector(".close-main-menu");

closeMainMenuElement.addEventListener(
    "click",
    closeMainMenu
);

function closeMainMenu(){
    console.log("click");
    let closemainMenuElement = document.querySelector(".main-menu");
    closemainMenuElement.classList.remove("visible");
    //ou
    // mainMenuElement.style.display = "block";
}