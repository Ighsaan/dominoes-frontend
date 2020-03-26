import React from 'react';
import Domino from '../../Domino.js';

export default class Player extends React.Component {

    render() {
        return <div className="Hand">
            {
                this.props.playerData.cards.map(card => {
                    return <Domino key={card.left +""+ card.right} playCard={this.props.playCard} left={card.left} right={card.right}/>
                }) 
            }
            {this.props.playerData.turn === true ? <p>Your Turn</p> : ""}
        </div>
    }
}