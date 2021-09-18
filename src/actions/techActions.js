import { GET_TECHS, DELETE_TECH, ADD_TECH, TECHS_ERROR } from './types'

export const getTechs = () => async (dispatch) => {
    try {
        const resJson = await fetch('/techs');
        const res = await resJson.json();
        console.log('res', res);
        dispatch({
            type: GET_TECHS,
            payload: res
        })
    } catch(err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err
        })
    }
  
}