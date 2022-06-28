
let cardPosition = 0;
const cards = document.getElementsByClassName('card');
const totalCards = cards.length;
console.log(totalCards);

document.
getElementById("carousel_button--next").addEventListener("click", function() {
    getTheNextCard();
});
    


document.
getElementById("carousel_button--prev").addEventListener("click", function() {
    getThePrevCard();
});


function updateCards(){
    for(let card of cards){
        card.classList.remove("card--active");
        card.classList.add("card");
    }
    cards[cardPosition].classList.add("card--active");
}
        

function getTheNextCard(){
        if(cardPosition == totalCards - 1){
        cardPosition = 0;
    }else{
        cardPosition++;
    }
    updateCards();
}

function getThePrevCard(){
      if(cardPosition == totalCards - 1){
        cardPosition = 0;
    }else{
        cardPosition--;
    }
    updateCards();
}

