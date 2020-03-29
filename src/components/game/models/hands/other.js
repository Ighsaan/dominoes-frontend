import React from 'react';
import Domino from '../../Domino.js';

export default class Other extends React.Component {

    render() {
      
        return <div className={this.props.side}>
            <p>{this.props.playerData.name}</p>
            {this.props.playerData.turn ? <p> Turn </p> : ""}
          {
                [...Array(this.props.playerData.count)].map((card, i) => {
                    return <Domino key={i} side={this.props.side} blunk={true}/>
                }) 
            }
      </div>
    }
}