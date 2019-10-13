import React, { Component } from 'react';

export class Hello extends Component {
  render() {
    return (
      <div data-testid="hello">
        { this.props.hello }
      </div>
    );
  }
}

export default Hello;
