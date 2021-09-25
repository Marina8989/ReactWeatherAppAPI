import React from 'react';

const Button = (props) => {
    return(
      <button onClick={props.handleDelete} style={{color: 'red', height: '20px'}}>X</button>
    )
}

export default Button