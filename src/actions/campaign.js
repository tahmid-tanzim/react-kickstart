import Http from '../services/Http';
import { GET_CAMPAIGNS, GET_CAMPAIGN, ADD_CAMPAIGN, TOGGLE_MODAL, DELETE_CAMPAIGN, LOADING } from './types';

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

export const selectCampaign = userId => dispatch => {
    console.log('select campaign fired: ', userId);

    dispatch({
        type: LOADING,
        payload: {
            isLoading: true
        }
    });

    Http.GET('users', `/${userId}`)
        .then(({data}) => {
            dispatch({
                type: GET_CAMPAIGN,
                payload: {
                    modalIsOpen: true,
                    isLoading: false,
                    user: data
                }
            });
            console.log('Get success users: ', JSON.stringify(data, null, 2));
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

export const toggleModal = flag => dispatch => {
    console.log('TOGGLE_MODAL fired: ');
    dispatch({
        type: TOGGLE_MODAL,
        payload: {
            modalIsOpen: flag
        }
    });
};