export const WELCOME_SHOW_MODAL_USER = 'WELCOME_SHOW_MODAL';
export const WELCOME_CHANGE_USER_NAME = 'WELCOME_CHANGE_USER_NAME';
export const WELCOME_CHANGE_INPUT_VALUE = 'WELCOME_CHANGE_INPUT_VALUE';
export const WELCOME_GET_ROOMS_LIST = 'WELCOME_GET_ROOMS_LIST';
export const WELCOME_SHOW_MODAL_ROOM = 'WELCOME_SHOW_MODAL_ROOM';
export const WELCOME_SET_ROOM_NAME = 'WELCOME_SET_ROOM_NAME';

export const setModalShownUser= (isOpen) => {
    return {
        type: WELCOME_SHOW_MODAL_USER,
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


export const setModalShownRoom = (isOpen) => {
    return {
        type: WELCOME_SHOW_MODAL_ROOM,
        payload: isOpen,
    }
};

export const setRoomNameAction = (roomName) => {
    return {
        type: WELCOME_SET_ROOM_NAME,
        payload: roomName,
    }
};