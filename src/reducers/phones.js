const initialState = [];
  
  export function phones(state = initialState, action) {
    if (action.type === 'ADD_PHONE') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR_PHONES') {
      return []
    }
  
    return state;
  }