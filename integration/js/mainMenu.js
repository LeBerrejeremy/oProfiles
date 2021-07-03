let mainMenu = {

    init: function(){
        
        let openMainMenuElement = document.querySelector(".open-main-menu");
        let closeMainMenuElement = document.querySelector(".close-main-menu");

        openMainMenuElement.addEventListener( "click", mainMenu.open );
        closeMainMenuElement.addEventListener( "click", mainMenu.close );
    },

    open: function() {
        let mainMenuElement = document.querySelector(".main-menu");
        let containerElement = document.querySelector(".container");
        mainMenuElement.classList.add("visible");
        containerElement.classList.add("blur");
        //ou
        // mainMenuElement.style.display = "block";
    },

    close: function(){
        let mainMenuElement = document.querySelector(".main-menu");
        let containerElement = document.querySelector(".container");
        mainMenuElement.classList.remove("visible");
        containerElement.classList.remove("blur");
    }
        
};

export default mainMenu;