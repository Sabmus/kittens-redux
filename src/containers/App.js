import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispachToProps = dispach => {
  return {
    onSearchChange: event => dispach(setSearchField(event.target.value)),
    onRequestRobots: () => dispach(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render () {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1 className='tc f1'>Loading kittens</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Kittens</h1>
          <SearchBox searchChange={ onSearchChange }/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={ filteredRobots } />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
    
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);