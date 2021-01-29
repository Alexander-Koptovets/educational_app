const initialState = [];
  
export function user(state = initialState, action) {
    if (action.type === 'GET_USERS') {
        return action.payload
    };
  
    return state;
}