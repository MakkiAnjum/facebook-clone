import { GetLocalStore } from './LocalStorage';

const curUser = sessionStorage.getItem('curUser');

/* initial state */
export const initialState = {
    user: GetLocalStore(curUser),
};

/* possible action types */
export const actionTypes = {
    SET_USER: "SET_USER",
};

/* reducer */
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;