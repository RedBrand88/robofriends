import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';

import { setSearchField, fetchRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.fetchRobots.robots,
        isPending: state.fetchRobots.isPending,
        error: state.fetchRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value)),
        onFetchRobots: () => dispatch(fetchRobots())
    }
}

class App extends Component {

    //create method to fetch jsonplaceholder user data
    componentDidMount() {
        this.props.onFetchRobots();
    }

    render() {
        const { searchField, onSearchFieldChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <Searchbox searchChange={onSearchFieldChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);