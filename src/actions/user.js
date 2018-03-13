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
        axios.get('https://randomuser.me/api/')
            .then(({data, status}) => {
                const [first_user] = data.results;
                console.log('Success API Response', JSON.stringify(first_user, null, 2));
                dispatch(updateUser(first_user.name.first + ' ' + first_user.name.last));
            })
            .catch(error => {
                console.log('Error API Response', error);
                dispatch(showError(error.toString()));
            });
    }
};