import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    username: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_UP:
        case types.SIGN_IN:
            return {auth: true, username: action.payload};
        case types.SIGN_OUT:
            return {auth: false, username: ''};
        default:
            return state;
    }
}