import { COLLAPSE_SIDEBAR } from './types';

export const toggle = isCollapsed => dispatch => {
    console.log('toggle fired: ', isCollapsed);
    dispatch({
        type: COLLAPSE_SIDEBAR,
        payload: {
            isCollapsed: !isCollapsed
        }
    });
};
