import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api', { method: 'POST', body: { query: '{hello}' } }).then(res =>
      console.log(res),
    );
  }

  render() {
    return (
      <div>
        {this.state.username ? (
          <h1>Hello {this.state.username}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
