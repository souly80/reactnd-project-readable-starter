import React, {Component} from 'react';

class EditControl extends Component {

  render() {
    const {onEdit, onDelete} = this.props
    return (
     <div>
         <button onClick={() => {onEdit()}}>edit</button>
         <button onClick={() => {onDelete()}}>delete</button>
     </div>
    )
  }
}

export default EditControl
