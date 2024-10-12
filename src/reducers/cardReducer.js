const initialState = {
  cardData: [],
}

function cardReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CARD': {
      return {
        ...state,
        cardData: [...state.cardData, action.movie],
      }
    }
    case 'REMOVE_FROM_CARD': {
      return {
        ...state,
        cardData: state.cardData.filter((data) => data.id !== action.id),
      }
    }
  }
}

export { cardReducer, initialState }
