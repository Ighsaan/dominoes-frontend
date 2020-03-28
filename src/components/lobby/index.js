import React from 'react';
import axios from 'axios';
import './lobby.css';
class Lobby extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lobby: []
        }
        this.createLobby = this.createLobby.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    componentDidMount() {
        axios.get(this.props.session.hostname+"/lobby")
          .then(res => {
            this.setState({
                lobby: res.data.lobby
            })
          })
    }

    render () {
        return <div className="lobby">
            <h1>Lobby List:</h1>
            {this.state.lobby.map(x => {
                return <h1 key={x.name} onClick={e => this.addPlayer(x.name)}>{x.name}</h1>
            })}
            <button onClick={this.createLobby}>Create Lobby</button>
        </div>
    }

    createLobby () {
        this.props.client.createGame(this.props.session.username);
    }

    addPlayer (roomId) {
        this.props.client.addPlayer(this.props.session.username, roomId);
    }
}

export default Lobby;