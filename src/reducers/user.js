import {UPDATE_USER} from '../actions/user';

const user = (state = '', {type, payload}) => {
    switch (type) {
        case UPDATE_USER:
            return payload.user;
            break;
        default:
            return state;
    }
};

export default user;