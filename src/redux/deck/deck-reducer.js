const INITIAL_STATE = {
    deck: null
};

const deckReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DECK':
            return {
                ...currentState,
                deck: action.payload
            }
        default:
            return currentState;
    }
}

export default deckReducer;