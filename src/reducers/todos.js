const initialState = {
    text: '',
    todo: []
}
  
export function todos(state = initialState, action) {
    if (action.type === 'ADD_TODO') {
            let id = action.payload.id;
            
            if (id !== null) { 
                let element = state.todo.filter(el => el.id == id);
                let index = state.todo.indexOf(element[0]);
                state.todo[index].text = state.text; 

                return state = {
                    text: '',
                    todo: [...state.todo]
                }
            } else if (id === null) {
                return state = {
                    text: '',
                    todo: [
                        ...state.todo,
                        {
                            id: Date.now(),
                            text: action.payload.text,
                            finished: false
                        }
                    ]
                }
            }

            return state = {
                text: '',
                todo: [...state.todo]
            }
    } else if (action.type === 'DELETE_TODO') {
        let data = state.todo.filter(el => el.id !== action.payload);
        
        return state = {
            text: '',
            todo: data 
        }
    } else if (action.type === 'TEXT_TODO') {
        return state = {
            text: action.payload,
            todo: state.todo
        }
    } else if (action.type === 'EDIT_TODO') {
        let element = state.todo.filter(el => el.id == action.payload);

        return state = {
            text: element[0].text,
            todo: state.todo 
        }
    } else if (action.type === 'CROSSOUT_TODO') {
        let element = state.todo.filter(el => el.id == action.payload);
        let index = state.todo.indexOf(element[0]);
        state.todo[index].finished = !state.todo[index].finished;
        
        return state = {
            text: '',
            todo: [...state.todo]
        }
    }
  
    return state;
}