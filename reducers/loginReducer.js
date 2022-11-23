import * as types from 'types/loginTypes'

const initialTimerState = {
    login: {
        corre_electronicio: '',
        password: '',
    },
    isLoading: false
}

const loginReducer = (state = initialTimerState, { type, payload }) => {
    switch (type) {
        case types.SET_INPUT_LOGIN:
            state.login[payload.key] = payload.value
            return {
                login: state.login,
                isLoading: state.isLoading
            }
        default:
            return state
    }
}

export default loginReducer
