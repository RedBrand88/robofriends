import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            //set robots to empty array
            robots: []
        }
    }

    //create method to fetch jsonplaceholder user data
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {this.setState({ robots: users })});
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

export default connect(mapStateToProps, mapDispatchToProps)(App);