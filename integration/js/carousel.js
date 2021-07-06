let carousel = {
    init: function() {
      let carouselElement = document.querySelector(".carousel");
  
      console.log(carouselElement);
  
      // Je recupère les enfants de mon élément contenu dans la variable carouselElement
      let carouselItemList = carouselElement.querySelectorAll(".carousel__content > *");
  
      // Je récupère le conteneur des boutons de navigation
      let carouselNavigationElement = carouselElement.querySelector(".carousel__footer__navigation");
      let carouselContentElement = carouselElement.querySelector(".carousel__content");
  
      // if (carouselItemList.length !== 0) {
      if (carouselItemList.length) {
        for (
          let index = 0;
          index < carouselItemList.length;
          index =  index + 1
        ) {
          let carouselItemElement = carouselItemList.item(index);
  
          // Je crée un élément DOM
          let buttonElement = document.createElement("button");
          // buttonElement.textContent = index;
  
          buttonElement.addEventListener(
            "click",
            function() {
              // J'utilise la variable carouselItemElement qui conserve la valeur au moment de la création de l'écouteur d'événement
              // console.log(carouselItemElement, carouselItemElement.offsetLeft);
  
              // Je récupère le nombre de pixels que je veux scroller dans mon élément de carousel à partir de la position gauche (en pixels) de l'élément que je veux afficher
              let scrollX = carouselItemElement.offsetLeft;
  
              // Je scrolle d'autant de pixels à gauche de la position gauche de l'élément que je veux afficher
              carouselContentElement.scrollTo(
                scrollX,
                0
              );
            }
          );
  
          // On ajoute le bouton dans le conteneur voulu
          carouselNavigationElement.appendChild(buttonElement);
        }
      }
    }
  };
  
  export default carousel;