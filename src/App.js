import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Deck from './Deck';
import CardsSection from './Cards';
import { setDeck } from "./redux/deck/deck-actions";

function App({ dispatch, deck }) {
  // set initial deck state
  useEffect(() => {
    const newDeck = new Deck();
    dispatch(setDeck(newDeck.cards));
  }, []);

  const handleShuffle = async (givenDeck) => {
    // Math.random() - 0.5 can be either (+) or (-), resorting the array
    // semi-naive solution
    const shuffledDeck = givenDeck.sort(() => Math.random() - 0.5);
    dispatch(setDeck([...shuffledDeck]));
  };

  return (
    <div className="App">
      <CardsSection />
      <button onClick={() => handleShuffle(deck)}>SHUFFLE</button>
    </div>
  );
}

const mapStateToProps = state => ({
  deck: state.deck.deck
});

export default connect(mapStateToProps)(App);
