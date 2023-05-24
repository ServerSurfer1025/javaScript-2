import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
    console.log(this);
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onclick={this.clickHandler}>Bind Event</button>
      </>
    );
  }
}

export default EventBind;
