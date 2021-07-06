let carousel = {
    init: function(){

        let carouselElement = document.querySelector(".carousel");
        let carouselItemList = carouselElement.querySelectorAll(".carousel__content > *");
        let carouselNavigationElement = carouselElement.querySelector(".carousel__footer__navigation");
        let carouselContentElement = carouselElement.querySelector(".carousel__content");
        
        if (carouselItemList.length){
            for(let index=0; index<carouselItemList.length; index++){

                let carouselItemElement = carouselItemList.item(index);
                let buttonElement = document.createElement("button");

                buttonElement.addEventListener("click", function(){
                    let scrollX = carouselItemElement.offsetLeft;
                    carouselContentElement.scrollTo(scrollX, 0);
                });

                buttonElement.textContent = "commentaire n°" + (index+1);
                carouselNavigationElement.appendChild(buttonElement);
            }
        }
    }
}

export default carousel;