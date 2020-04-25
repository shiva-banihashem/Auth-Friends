import { axiosWithAuth } from '../utils/axiosAuth';

export const ERROR = 'ERROR';
export const GETTING_START = 'GETTING_START';
export const GET_SUCCESS = 'GET_SUCCESS';



export const POSTING_START = 'POSTING_START';
export const POST_SUCCESS = 'POST_SUCCESS';

export const UPDATING_START = 'UPDATING_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

export const DELETING_START = 'DELETING_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';


export const getFriends = () => dispatch => {
  dispatch({ type: GETTING_START });
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message })
    })
}

export const addFriend = data => dispatch => {
  
  dispatch({ type: POSTING_START });
  
  axiosWithAuth()
    .post('/friends', data)
    .then(res => {
      
      dispatch({ type: POST_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message })
    })
}



export const updateFriend = (friend) => dispatch => {
  
  dispatch({ type: UPDATING_START });
  axiosWithAuth()
    .put(`/friends/${friend.id}`, friend)
    .then(res => {
      
      dispatch({ type: UPDATE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message })
    })
}

export const deleteFriend = (friend) => dispatch => {
  dispatch({ type: DELETING_START });
  
  axiosWithAuth()
    .delete(`/friends/${friend.id}`, friend)
    .then(res => {
      
      dispatch({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message })
    })
}