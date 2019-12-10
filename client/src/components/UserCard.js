import React from 'react';

class UserCard extends React.Component {
    render(){
        const {
            login,
            name,
            followers,
            following,
            url,
            location,
            avatar_url
        } = this.props.user;
        return (
            <section>

            </section>
        );
    }
}

export default UserCard;