import React from 'react';

class Post extends React.Component {

    render() {
        return <h1>Winner {this.props.data.players.find(x => x.winner).name}</h1>
    }
}

export default Post;