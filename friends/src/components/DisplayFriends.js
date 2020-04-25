
import React from 'react';
import { connect } from 'react-redux'

import { getFriends, deleteFriend,updateFriend,addFriend } from '../actions';

const DisplayFriends = props => {
    return (
        
          
         
          <div className="friend-list-cont">
            {props.error && <h4>{props.error}</h4>} 
            {
              props.isFetching 
              ?  <button id="buttonload">
              <i className ="fa fa-circle-o-notch fa-spin"></i>Loading</button>
              :  props.friends.map(friend => 
                  <div className="friend-cont" key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    
                    <button onClick={(e) => props.editMember(e, friend)}>Edit</button>
                    <button onClick={(e) => props.delMember(e, friend)}>Delete</button>
                  </div>
                )   
            }
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
      
      
      export default connect(mapStateToProps,mapDispatchToProps)(DisplayFriends);