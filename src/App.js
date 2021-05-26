import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Deck from './Deck';
import CardsSection from './CardsSection';
import { setDeck } from "./redux/deck/deck-actions";

function App({ dispatch, deck }) {
  // set initial deck state
  useEffect(() => {
    const newDeck = new Deck();
    dispatch(setDeck(newDeck.cards));
  }, []);

  // fisher yates algorithm!
  // loop through array, skipping index 0, gen a random num within the arr each iteration
  // swap the value at the random index with the value at the i index
  const handleShuffle = async (givenDeck) => {
    let i = givenDeck.length;
    while (i--) {
      const randIdx = Math.floor(Math.random() * (i + 1));
      [givenDeck[i], givenDeck[randIdx]] = [givenDeck[randIdx], givenDeck[i]];
    }
    dispatch(setDeck([...givenDeck]));
  };

  return (
    <div className="App">
      <button className="shuffle-btn" onClick={() => handleShuffle(deck)}>SHUFFLE DECK</button>
      <CardsSection />
    </div>
  );
}

const mapStateToProps = state => ({
  deck: state.deck.deck
});

export default connect(mapStateToProps)(App);
