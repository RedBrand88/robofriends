import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            //set robots to empty arrayr
            robots: [],
            searchField: ''
        }
    }

    //create method to fetch jsonplaceholder user data
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {this.setState({ robots: users })});
    }

    onSearchFieldChange = (e) => {
        this.setState({ searchField: e.target.value});
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchFieldChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;