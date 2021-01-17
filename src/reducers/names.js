import { act } from "react-dom/test-utils";

const initialState = [];
  
  export function names(state = initialState, action) {
    if (action.type === 'ADD_NAME') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR_NAMES') {
      return []
    }
  
    return state;
  }