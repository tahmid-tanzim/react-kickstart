import axios from 'axios';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export const updateUser = newUser => {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    };
};

export const showError = (error) => {
    return {
        type: SHOW_ERROR,
        payload: {
            user: error
        }
    };
};

export const getUsers = () => {
    return dispatch => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                console.log('Success API Response', response);
            })
            .catch(error => {
                console.log('Error API Response', error);
                dispatch(showError(error.toString()));
            });
    }
};