import React from 'react';
import Button from './Button';

const List = (props) => {
    return(
        <>
          {props.list.map(item => {
              const {id, value} = item;
              return(
                  <div key={id} style={{display: 'flex'}}>
                    <h4>{value}</h4>
                    <Button handleDelete={props.handleDelete}/>
                  </div>
              )
          })}
        </>
    )
}

export default List