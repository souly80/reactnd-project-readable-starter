import React, {Component} from 'react';
class VoteScore extends Component {

  render() {

    const {score, onUpvote, onDownvote} = this.props
    return (
        <div className="all">
            <button style={{background: 'red'}} onClick={onDownvote}>-</button>
            <h1 style={{margin: '10px'}}>{score}</h1>
            <button style={{background: 'green'}} onClick={onUpvote}>+</button>
      </div>
    )
  }
}

export default VoteScore
