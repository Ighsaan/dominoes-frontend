import React from 'react';

import DominoesClient from "./client"

import Game from "./components/game"
import SignUp from "./components/signup"
import Lobby from "./components/lobby"
import Room from "./components/room"
import Post from "./components/post"

//import mockState from './state'

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      canStart: false,
      gameState: {
        gameState: "SIGNUP",
      }, 
      session: {
        username: "",
        hostname: "",
        roomId: ""
      }
    };
    this.setUsername = this.setUsername.bind(this)
    this.updateGameState = this.updateGameState.bind(this)
    this.canStart = this.canStart.bind(this)
    
    this.client = new DominoesClient(this.state.session.hostname)
    this.client.registerEvents(this.updateGameState, this.canStart);
  }

  updateGameState(gameState) {
      this.setState({ gameState });
  }

  canStart(start) {
    this.setState({
      canStart: start
    });
  }

  setUsername(username) {
    let session = this.state.session;
    session.username = username
    this.setState({
      session,
      gameState: {gameState:"LOBBY"}
    });
  }

  render  () {
    let gameState = this.state.gameState.gameState;
    
    const getStateComponent = () => {

      switch(gameState) {
        case "PLAYING": return <Game data={this.state.gameState} client={this.client}/>;
        case "SIGNUP" : return <SignUp setUsername={this.setUsername}/>
        case "LOBBY" : return <Lobby client={this.client} session={this.state.session}/>
        case "WAITING" : return <Room client={this.client} canStart={this.state.canStart} gameState={this.state.gameState}/>
        case "END" : return <Post data={this.state.gameState}/>
        default: return "Error"
      }
    }

    return (
      <div className="App">
        {getStateComponent()}
      </div>
    );
  }
}

export default App;
