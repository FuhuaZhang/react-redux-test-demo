import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hello from '../components/Hello';
import { sayHello } from '../actions/homeActions';

@connect(
  ({ homeReducer }) => ({
    helloMessage: homeReducer.helloMessage
  }),
  dispatch => ({
    sayHello: () => dispatch(sayHello())
  })
)
class Home extends Component {

  componentDidMount() {
    this.props.sayHello();
  }

  render() {
    return (
      <div id="home">
        <h1>Home</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <Hello hello={this.props.helloMessage} />
      </div>
    );
  }
}

export default Home;
