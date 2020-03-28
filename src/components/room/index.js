import React from 'react';
import './room.css'
class Room extends React.Component {

    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
    }
    render(){
        return <div className="container mt-10">
        <br />
            <div className="container border border-dark">
                <div className="row">
                    <div className="col-md-6"><h1 className="ml-1">{this.props.gameState.id}</h1></div>
                    <div className="col-md-6 align-self-center">{this.props.canStart ? <span className="float-right"><button onClick={this.startGame}> start </button></span>: ""}</div>
                </div>
            </div>
            <br />
            <div className="container border border-dark">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">{this.props.gameState.players[2] ? this.props.gameState.players[2].name : "Waiting..."}</div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-4 pt-3 text-right align-self-center">{this.props.gameState.players[3] ? this.props.gameState.players[3].name : "Waiting..."}</div>
                    <div className="col-md-4"><img className="tafel" src="./tafel.png" alt="table" /></div>
                    <div className="col-md-4 text-left align-self-center">{this.props.gameState.players[1] ? this.props.gameState.players[1].name : "Waiting..."}</div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">{this.props.gameState.players[0].name}</div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    }

    startGame() {
        this.props.client.startGame(this.props.gameState.id)
    }
}
export default Room;