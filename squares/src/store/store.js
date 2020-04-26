import { loadState } from './loadStore'

const presistedState = loadState()
const defaultState = {
    modalShown: false,
    modalNameValue: '', 
    userName: ''
}
export default presistedState || defaultState;