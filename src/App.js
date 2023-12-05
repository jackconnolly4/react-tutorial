import React, { Component } from "react";
import Table from "./Table";
import ReactPlayer from "react-player";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=0cVlTeIATBs" />
      </div>
    );
  }
}

export default App;
