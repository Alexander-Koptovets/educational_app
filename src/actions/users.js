const URL = 'https://600d9cedf979dd001745ce20.mockapi.io';

export function asyncGetUsers() {
    return async dispatch => {
            const response = await fetch(URL + '/posts');
            const data = await response.json();
            dispatch({type: 'GET_USERS', payload: data});
        }
}