import React from 'react';

import Player from './models/hands/player';
import Other from './models/hands/other';
import Domino from './Domino';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            select: false
        }
        this.currentCard = {
          left: -1,
          right: -1
        }
        this.playCard = this.playCard.bind(this);
        this.selectSide = this.selectSide.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.data });  
    }

    playCard(left, right, side) {
      this.setState({ select: false });
      this.currentCard = {left: left, right: right};
      let board = this.state.data.board.state;
      let initialPlay = board.length === 0 
        && this.state.data.players[0].turn
      if(initialPlay) {
        side = "";
      } else {
        let boardLeft = board[0];
        let boardRight = board[board.length-1];

        boardLeft = boardLeft.initialCard ? boardLeft.card.left : boardLeft.face
        boardRight = boardRight.initialCard ? boardRight.card.left : boardRight.face
        
        if((left === boardLeft && right === boardRight) ||
        (left === boardRight && right === boardLeft)) {
          this.setState({ select: true });
        } else if(left === boardLeft || right === boardLeft) {
          side = "LEFT"
        } else if(left === boardRight || right === boardRight){
          side = "RIGHT"
        }
      }

      if(side || initialPlay) {
        this.setState({ select: false });
        this.props.client.playCard(
          this.props.data.id,
          {
          left: left,
          right: right
        }, side);
      }
    }

    selectSide(side) {
      this.playCard(this.currentCard.left, this.currentCard.right, side);
    }

    render  () {
        return (
          <div className="App">
              {/* Make Component for laaken */}
            <div className="Laaken">
              {this.state.data.board.state.map((card, i) => {
                let select = this.state.select && (i === 0 || i === this.state.data.board.state.length-1);
                let side = "";
                if(i === 0) {
                  side = "LEFT"
                } else if(i === this.state.data.board.state.length){
                  side = "RIGHT"
                }
                return <Domino 
                  key={card.card.left+ " " + card.card.right} 
                  select={select} 
                  side={side}
                  selectSide = {this.selectSide}
                  board={true}
                  left={card.card.left} 
                  right={card.card.right}/>
              })}
            </div>
      
            <Player playerData={this.state.data.players[0]} playCard={this.playCard}/>
            <Other playerData={this.state.data.players[1]} side="Right"/>
            <Other playerData={this.state.data.players[2]} side="Upper"/> 
            <Other playerData={this.state.data.players[3]} side="Left"/>
      
          </div>
        );
      }
}

export default Game;