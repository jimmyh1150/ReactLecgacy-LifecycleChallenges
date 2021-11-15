import React, { Component } from "react";

export default class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "" };
  }

  async componentDidMount() {
    console.log("Component Mounted");
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await response.json();
      this.setState({ data: json.message });
      console.log(json.message);
    } catch (error) {
      console.log(error);
    }
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <h2>Random Dog Photo</h2>
        <DogDisplay url={this.state.data} />
        <button onClick={this.refreshPage}>Random Dog</button>
      </div>
    );
  }
}

const DogDisplay = (props) => {
  return (
    <div>
      <img src={props.url} alt="bitch" />
    </div>
  );
};
