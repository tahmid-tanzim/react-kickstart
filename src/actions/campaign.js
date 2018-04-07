import Http from '../services/Http';
import {GET_CAMPAIGNS, ADD_CAMPAIGN} from './types';

export const getCampaigns = () => dispatch => {
    Http.GET('posts')
        .then(response => {
            dispatch({
                type: GET_CAMPAIGNS,
                payload: response.data
            });
        })
        .catch(error => console.error(error));
};
