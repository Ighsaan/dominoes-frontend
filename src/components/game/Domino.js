import React from 'react';

export default class Domino extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(event) {
        if(this.props.select){
            this.props.selectSide(this.props.side)
        } else {
            if(!this.props.blunk) {
                this.props.playCard(this.props.left, this.props.right)
            }
        }
    }

    render() {
        let isDouble = this.props.left === this.props.right;
        let isSide = this.props.side === "Left" || this.props.side === "Right";
        
        let className = "Verticle";
        if((this.props.board && !isDouble) || (!this.props.board && isSide)){
            className = "Horizontal"
            if(this.props.board && this.props.face === this.props.left) {
                let direction = "";
                if(this.props.side === "RIGHT"){
                    direction = "Rightway";
                }
                if(this.props.side === "LEFT"){
                    direction = "Leftway";
                }

                className = className + " " + direction
            }
            if(this.props.board && this.props.face === this.props.right) {
                let direction = "";
                
                if(this.props.side === "RIGHT"){
                    direction = "Leftway";
                }
                if(this.props.side === "LEFT"){
                    direction = "Rightway";
                }

                className = className + " " + direction
            }
        }

        let name = isSide ? "blunk90" : "blunk"

        if(!this.props.blunk) {
            name = [this.props.left, this.props.right].sort().join("-");
        }
        
        if(this.props.select) {
            className = className + " Glow"
        }
        let imageName = "./faces/"+name+".svg"
        return <div className={className} onClick={this.onClick}>
            {!this.props.blunk && !this.props.board ? <p>{this.props.right}|{this.props.left}</p>: ""}
            <img alt={name} src={imageName} />
        </div>
    }
}