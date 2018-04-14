import { GET_CAMPAIGNS, ADD_CAMPAIGN, DELETE_CAMPAIGN, LOADING } from '../actions/types';

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
    let newState = {...state};
    switch (action.type) {
        case GET_CAMPAIGNS:
            newState.campaigns = newState.campaigns.concat(action.payload.campaigns);
            newState.isLoading = action.payload.isLoading;
            return newState;
        case LOADING:
            return {
                ...newState,
                isLoading: action.payload.isLoading
            };
        case DELETE_CAMPAIGN:
            newState.campaigns = newState.campaigns.filter(x => x.id !== action.payload.id);
            newState.isLoading = action.payload.isLoading;
            return newState;
        default:
            return newState;
    }
}