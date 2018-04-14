import Http from '../services/Http';
import { GET_CAMPAIGNS, ADD_CAMPAIGN, LOADING } from './types';

export const getCampaigns = () => dispatch => {
    dispatch({
        type: LOADING,
        payload: {
            isLoading: true
        }
    });

    Http.GET('posts')
    .then(response => {
        dispatch({
            type: GET_CAMPAIGNS,
            payload: {
                campaigns: response.data,
                isLoading: false
            }
        });
    })
    .catch(error => console.error(error));
};
