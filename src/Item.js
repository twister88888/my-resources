import React from 'react';
import ReactDOM from 'react-dom';

const Item = props => {
  return (
    <div className='Item'>
        <input className='Item__check' type='checkbox' onClick={props.handleCheckedClick}/>
        <span className='Item__date'>{props.date}</span>
        <a className='Item__source' href={props.link} target='_blank'>{props.name}</a>
    </div>
  )
}

export default Item;
