import { GET_CAMPAIGNS, ADD_CAMPAIGN } from '../actions/types';

const initialState = {
    // campaign_list: {
    campaigns: [],
    user: {},
    modalIsOpen: false,
    isLoading: false,
    showForm: false,
    resetForm: false,
    alert: null
    // },
    // new_campaign: {
    //     title: "",
    //     category: 0,
    //     body: "",
    //     isFacebookShare: true,
    //     error: {
    //         title: false,
    //         category: false
    //     }
    // },
    // sidebar: {
    //     isCollapsed: false
    // }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPAIGNS:
            let newState = {...state};
            newState.campaigns = newState.campaigns.concat(action.payload);
            return newState;
        default:
            return state;
    }
}