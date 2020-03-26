import React from 'react';
import './room.css'
class Room extends React.Component {

    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
    }
    render(){
        return <div className="room">
            <h1>{this.props.gameState.id}</h1>
            {this.props.gameState.players.map(x => <h2 key={x.name}>{x.name}</h2>)}
            {this.props.canStart ? <button onClick={this.startGame}> start </button>: ""}
        </div>
    }

    startGame() {
        this.props.client.startGame(this.props.gameState.id)
    }
}
export default Room;