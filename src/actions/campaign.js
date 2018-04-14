import Http from '../services/Http';
import { GET_CAMPAIGNS, ADD_CAMPAIGN, DELETE_CAMPAIGN, LOADING } from './types';

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

export const deleteCampaign = id => dispatch => {
    dispatch({
        type: LOADING,
        payload: {
            isLoading: true
        }
    });

    Http.DELETE('posts', `/${id}`)
        .then(response => {
            dispatch({
                type: DELETE_CAMPAIGN,
                payload: {
                    id,
                    isLoading: false
                }
            });
            console.log('Delete success campaigns: ', JSON.stringify(response, null, 2));
        })
        .catch(error => console.error(error));
};
