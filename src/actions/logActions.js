import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types';

export const getLogs = () => {
    return async (dispatch) => {

        try{
            dispatch(setLoading());
            const res = await fetch('/logs');
            const data = await res.json();

            dispatch({
                type: GET_LOGS,
                payload: data
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            });
        }
        

    }
}

export const searchLogs = (param) => {
    return async (dispatch) => {
        if (param) {
            try{
                dispatch(setLoading());
                const res = await fetch(`/logs?q=${param}`);
                const data = await res.json();
    
                dispatch({
                    type: SEARCH_LOGS,
                    payload: data
                });
            } catch (err) {
                dispatch({
                    type: LOGS_ERROR,
                    payload: err.response.data
                });
            }
        }
    }
}

export const addLog = (log) => {
    return async (dispatch) => {
        
        console.log('before add log')
        try {
            dispatch(setLoading());
            const data = await fetch('/logs', {
                method: 'POST',
                body: JSON.stringify(log),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('log', data);
    
            dispatch({
                type: ADD_LOG,
                payload: log
            });
        } catch(err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            });
        }
    } 
}

export const deleteLog = (logId) => async (dispatch) => {
    try {
        dispatch(setLoading);

        const data = await fetch(`/logs/${logId}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: logId
        });
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
    
}

export const updateLog = (log) => async (dispatch) => {
    try {
        dispatch(setLoading);
        const res = await fetch(`logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
        dispatch(clearCurrent());
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        });
    }
}

export const setCurrent = (log) => {
    return {
       type: SET_CURRENT,
       payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

