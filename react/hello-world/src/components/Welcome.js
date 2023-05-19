import React from "react";
import { Component } from "react";

/*
//components

class Welcome extends Component {
  render() {
    return <h1>Good Evening My guy</h1>;
  }
}

class Welcome2 extends Component {
  render() {
    return (
      <p>
        this is the main body of my paragraph that I would like to displayed at
        this very moment.
      </p>
    );
  }
}

*/

//Passing properties

class Welcome extends Component {
  render() {
    return (
      <h1>
        Hello {this.props.name} aka {this.props.nickname}
      </h1>
    );
  }
}
class Welcome2 extends Component {
  render() {
    const { name, nickname } = this.props;
    return (
      <h1>
        welcome {name} aka {nickname}
      </h1>
    );
  }
}

class Welcome3 extends Component {
  render() {
    return (
      <p>
        this is the main body of my paragraph that I would like to displayed at
        this very moment.
      </p>
    );
  }
}

export { Welcome, Welcome2, Welcome3 };
