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
        return <div className="container mt-3">
            <div> <h1>Lobby List:</h1> </div>
            <div className="border border-dark">
            {this.state.lobby.map(x => {
                return <div key={x.name} className="p-3 px-3 ml-3 mr-3">
                    <div className="border border-dark row item" onClick={e => this.addPlayer(x.name)}>
                        <div className="col-6"><h2>{x.name}</h2></div>
                        <div className="col-6"><span className="float-right"><h2>PLAYERS {x.size}/4</h2></span></div>
                    </div>
                </div>
            })}
            </div>
            <div className="text-center mt-3">
                <button onClick={this.createLobby}>Create Lobby</button>
            </div>
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