import axios from 'axios'

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchCard = () => {
    return (dispatch => {
        dispatch({type: FETCH_START})
        dispatch(fetchStart)
        axios.get(`https://api.magicthegathering.io/v1/cards?pageSize=1&random=true`)
            .then(res => {
                console.log(res)
                dispatch({type: FETCH_SUCCESS, payload:res.data.cards[0]})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_FAIL, payload: err})
            })
    })
    
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (card)=> {
    return({type: FETCH_SUCCESS, payload:card});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error})
}