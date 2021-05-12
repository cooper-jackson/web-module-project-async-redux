import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
    card: {
        imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card",
        name: '',
        manaCost: '',
        originalType: '',
        originalText: '',
    },
    isFetching: false,
    error: ''
}


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
        return({
            ...state, isFetching: true
        })

        case(FETCH_SUCCESS):
        return({
            ...state, 
            card: action.payload,
            isFetching: false
        })

        default:
          return state;
    }
}