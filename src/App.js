import { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-playing-card';

import './App.css';
import Deck from './Deck';
import { setDeck } from "./redux/deck/deck-actions";

function App(props) {
  const { dispatch, deck } = props;

  // set initial deck state
  useEffect(() => {
    const newDeck = new Deck();
    dispatch(setDeck(newDeck.cards));
  }, []);

  const handleShuffle = async (givenDeck) => {
    // Math.random() - 0.5 can be either (+) or (-), resorting the array
    // semi-naive solution
    const shuffledDeck = givenDeck.sort(() => Math.random() - 0.5);
    dispatch(setDeck(shuffledDeck));
  };

  return (
    <div className="App">
      {deck ? deck.map(card =>
        // rank & suit are parameterized backwards in the lib used!
        <Card 
          key={`${card.value}${card.suit}`} 
          rank={card.suit}
          suit={card.value} />
      ) : 'No deck to show...'}
      <button onClick={() => handleShuffle(deck)}>SHUFFLE</button>
    </div>
  );
}

const mapStateToProps = state => ({
  deck: state.deck.deck
});

export default connect(mapStateToProps)(App);
