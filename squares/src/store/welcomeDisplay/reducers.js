import defaultState from '../store';
import {
    WELCOME_SHOW_MODAL,
    WELCOME_CHANGE_INPUT_VALUE,
    WELCOME_CHANGE_USER_NAME,
    WELCOME_GET_ROOMS_LIST
} from './actions'


export const welcomeWindowReducer = (state = defaultState, action) =>{
    console.log('reduse', state)
    switch (action.type) {
        case WELCOME_CHANGE_USER_NAME:
            console.log('name changed');
            return {
                ...state,
                userName: action.payload
            };
        case WELCOME_SHOW_MODAL:
            console.log('modal changed');
            return {
                ...state,
                modalShown: action.payload
            }
        case WELCOME_CHANGE_INPUT_VALUE:
            console.log('value changed');
            return {
                ...state,
                inputValue: action.payload
            }
        case WELCOME_GET_ROOMS_LIST:
            console.log('rooms loaded');
            return {
                ...state,
                roomsList: action.payload
            }


    }

    return state;
}