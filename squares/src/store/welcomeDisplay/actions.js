export const WELCOME_SHOW_MODAL = 'WELCOME_SHOW_MODAL';
export const WELCOME_CHANGE_USER_NAME = 'WELCOME_CHANGE_USER_NAME';
export const WELCOME_CHANGE_INPUT_VALUE = 'WELCOME_CHANGE_INPUT_VALUE';
export const WELCOME_GET_ROOMS_LIST = 'WELCOME_GET_ROOMS_LIST';

export const setModalShown = (isOpen) => {
    return {
        type: WELCOME_SHOW_MODAL,
        payload: isOpen,
    }
};

export const setUserNameAction = (userName) => {
    return {
        type: WELCOME_CHANGE_USER_NAME,
        payload: userName,
    }
};

export const setInputValue = (value) => {
    return {
        type: WELCOME_CHANGE_INPUT_VALUE,
        payload: value,
    }
};

export const setRoomsList = (list) => {
    return {
        type: WELCOME_GET_ROOMS_LIST,
        payload: list,
    }
};