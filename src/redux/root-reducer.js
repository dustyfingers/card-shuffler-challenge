import { combineReducers } from "redux";

import deckReducer from "./deck/deck-reducer";

export default combineReducers({
    deck: deckReducer
});