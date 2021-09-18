import { GET_TECHS, DELETE_TECH, ADD_TECH, TECHS_ERROR } from '../actions/types'

const initialState = {
    techList: null,
    error: null
}

 const techReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_TECHS:
            return {
                ...state,
                techList: action.payload
            }
        default:
            return state
    }
}

export default techReducer;