import React,{ useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import DisplayFriends from './DisplayFriends'
import { getFriends, deleteFriend,updateFriend,addFriend } from '../actions';
const AddFriend = props => {

  const initialState = {
    id:null,
    name: "",
    age: "",
    email: ""
  }
  const [memberToEdit, setMemberToEdit] =useState(initialState)
    
  const [newFriend, setNewFriend] = useState(initialState)
  
    useEffect(() => {
         
        if (memberToEdit.name){
                       
            setNewFriend(memberToEdit);
        }  
        
        },[memberToEdit]);

        
    const handleChange = (e) => {
      if (!memberToEdit.name){
      setNewFriend({
          ...newFriend,
          [e.target.name]: e.target.value,id:props.friends.length+1
      })}
      else {
      setNewFriend({
        ...newFriend,
        [e.target.name]: e.target.value
      })
        }
      }
    const editMember = (e,friend )=> {
      e.preventDefault();
        
        const newArray = props.friends.filter(member => {
          return member.id === friend.id;
        });
        
        setMemberToEdit(newArray[0]);
    }
    
    
    const delMember = (e, friend) => {
           e.preventDefault();
          
            props.deleteFriend(friend);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        
        if (memberToEdit.name) {
          
            props.updateFriend(newFriend)
            
            setMemberToEdit({name:"",age:"",email:""});
      
          }
          else {
               props.addFriend(newFriend)
         
          }
          // clears out the input values
          setNewFriend({name:"",age:"",email:"", id:null});
    }

    
   
  return (
    <div className="friendForm">
             
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="name..."
        />
        <input 
          type="age"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="age..."
        />
        <input 
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="email..."
        />
        
        <button type="submit">Add Friend</button>
      </form>
      <DisplayFriends delMember={delMember} editMember={editMember}/> 
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

export default connect(mapStateToProps,mapDispatchToProps )(AddFriend);