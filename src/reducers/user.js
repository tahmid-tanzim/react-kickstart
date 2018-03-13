import {UPDATE_USER, SHOW_ERROR} from '../actions/user';

const user = (state = '', {type, payload}) => {
    switch (type) {
        case UPDATE_USER:
        case SHOW_ERROR:
            return payload.user;
            break;
        default:
            return state;
    }
};

export default user;