import * as actionTypes from '../actions';

const initialState = {
  friends: [],
  error: '',
  isFetching: false,
  
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GETTING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.GET_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    
    case actionTypes.POSTING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.POST_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case actionTypes.UPDATING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case actionTypes.DELETING_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionTypes.DELETE_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        friends: action.payload
      }
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}