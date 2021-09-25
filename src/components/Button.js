import React from 'react';

const Button = (props) => {
    return(
      <button onClick={()=>props.handleDelete(props.item)} style={{color: 'red', height: '20px', marginTop: '1.3rem'}}>X</button>
    )
}

export default Button