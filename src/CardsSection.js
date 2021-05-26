import React from 'react';
import Card from 'react-playing-card';
import { connect } from 'react-redux';

const CardsSection = ({ deck }) => {
    return (
        <div className="cards">
            { /* rank & suit are parameterized backwards in the package I used! Odd indeed... */ }
            {deck ? deck.map(card =>
                <Card 
                    key={`${card.value}${card.suit}`}
                    rank={card.suit}
                    suit={card.value}
                    className="card" />
            ) : 'No deck to show...'}
        </div>
    );
}

const mapStateToProps = state => ({
    deck: state.deck.deck
});
  
export default connect(mapStateToProps)(CardsSection);