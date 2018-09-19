import React, {Component} from 'react'


class UserCard extends Component {
    render() {
        const {first_name, last_name, username, isAdmin} = this.props.user
        return(
            <div>
                {first_name}
            </div>
        )
    }
}

export default UserCard;