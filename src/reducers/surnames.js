const initialState = [];
  
export function surnames(state = initialState, action) {
    if (action.type === 'ADD_SURNAME') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR_SURNAMES') {
        return [] 
    }
  
    return state;
}