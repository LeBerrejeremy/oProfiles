let mainMenu = {
    init: function(){
        
        let openMainMenuElement = document.querySelector(".open-main-menu");
        let closeMainMenuElement = document.querySelector(".close-main-menu");

        openMainMenuElement.addEventListener( "click", mainMenu.open );
        closeMainMenuElement.addEventListener( "click", mainMenu.close );
    },

    open: function() {
        let mainMenuElement = document.querySelector(".main-menu");
        mainMenuElement.classList.add("visible");
        //ou
        // mainMenuElement.style.display = "block";
    },

    close: function(){
        let closemainMenuElement = document.querySelector(".main-menu");
        closemainMenuElement.classList.remove("visible");
    }
        
};

export default mainMenu;