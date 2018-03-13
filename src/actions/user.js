import axios from 'axios';

export const UPDATE_USER = 'users:updateUser';

export const updateUser = newUser => {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    };
};

export const getUsers = () => {
    return dispatch => {
        return axios.get('https://dog.ceo/api/breeds/list/all');
    }
};