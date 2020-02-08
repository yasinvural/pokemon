export const initialState = {
  loading: false,
  noMoreRequest: false,
  offset: 0,
  limit: 20,
  pokemonList: [],
  myList: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "set_loading":
      return {
        ...state,
        loading: action.payload
      };
    case "set_noMoreRequest":
      return {
        ...state,
        noMoreRequest: action.payload
      };
    case "set_offset":
      return {
        ...state,
        offset: action.payload
      };
    case "set_pokemonList":
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.payload]
      };
    case "set_myList":
      return {
        ...state,
        myList: [...action.payload]
      };
    default:
      return state;
  }
};
