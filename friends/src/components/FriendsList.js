import React, { useState ,useEffect} from 'react';
import { connect } from 'react-redux'
import AddFriend from './AddFriend';

import { getFriends, deleteFriend,updateFriend,addFriend } from '../actions';


function FriendsList (props) {
  
      
    useEffect(() => {
      props.getFriends()
      if (props.isFetching) {
      
        return <button id="buttonload2">
          <i className ="fa fa-circle-o-notch fa-spin"></i>Loading</button>
      }
      
      
    }, [])
         

  
  return (
    <div>
      
              
              <AddFriend />

      </div>
      
      
    
  )
}
const mapDispatchToProps = {
  getFriends, deleteFriend,updateFriend,addFriend
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
    isFetching: state.isLoading, 
    error: state.error
  }
}


export default connect(mapStateToProps,mapDispatchToProps  )(FriendsList);