import Card from './Card';

class Deck {
    constructor() {
        const suits = ["H", "D", "C", "S"],
            values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
            cards = [];
        
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                const newCard = new Card(suits[i], values[j]);
                cards.push(newCard);
            }
        }
        this.cards = cards;
    }

    shuffle() {
        
    }
}

export default Deck;