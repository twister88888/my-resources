import React from 'react';

const Item = props => {
  return (
    <div className='Item'>
        <input className='Item__check' type='checkbox' onClick={props.handleCheckedClick}/>
        <span className='Item__date'>{props.date}</span>
        <a className='Item__source' href={props.link} target='_blank' rel='noopener noreferrer'>{props.name}</a>
    </div>
  )
}

export default Item;
