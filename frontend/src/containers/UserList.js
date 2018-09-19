import React, {Component} from 'react';
import UserCard from '../components/UserCard';


class UserList extends Component {
    render() {
        return(
            this.props.allUsers.map(user => <UserCard key={user.id} user={user}/>)
        )
    }
}


export default UserList;