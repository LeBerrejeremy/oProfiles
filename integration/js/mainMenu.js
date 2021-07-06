let mainMenu = {

    init: function(){
        
        let openMainMenuElement = document.querySelector(".open-main-menu");
        let closeMainMenuElement = document.querySelector(".close-main-menu");

        if(openMainMenuElement || closeMainMenuElement){
            openMainMenuElement.addEventListener( "click", mainMenu.open );
            closeMainMenuElement.addEventListener( "click", mainMenu.close );
        }
    },

    open: function() {
        let mainMenuElement = document.querySelector(".main-menu");
        let containerElement = document.querySelector(".container");
        let bodyElement = document.querySelector("body");
        mainMenuElement.classList.add("visible");
        containerElement.classList.add("blur");
        bodyElement.style.overflow = "hidden";
        //ou
        // mainMenuElement.style.display = "block";
    },

    close: function(){
        let mainMenuElement = document.querySelector(".main-menu");
        let containerElement = document.querySelector(".container");
        let bodyElement = document.querySelector("body");
        mainMenuElement.classList.remove("visible");
        containerElement.classList.remove("blur");
        bodyElement.style.overflow = "auto";
    }
    
};

export default mainMenu;