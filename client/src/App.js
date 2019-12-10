import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import Loading from './components/Loading';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
        };
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/edreeseg')
            .then(user => this.setState({ user }))
            .catch(err => console.log(err));
    }
    render(){
        return (
            <div className="App">
                {this.state.user ?
                <UserCard user={this.state.user} />
                : <Loading />}
            </div>
        );
    }
}

export default App;
