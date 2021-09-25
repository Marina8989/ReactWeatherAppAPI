import React from 'react';
import {Link} from 'react-router-dom';

const List = (props) => {
    return(
        <>
          {props.list.map(city => {
              const {id, value} = city;
              return(
                  <div key={id} style={{display: 'flex', padding: '15px'}}>
                    <Link to={`/${value}`}>{value}</Link>
                  </div>
              )
          })}
        </>
    )
}

export default List