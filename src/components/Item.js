import React from 'react';

const Item = props => {
  return (
    <div className='Item'>
        <span className='Item__date'>{props.date}</span>
        <a className='Item__name' href={props.link} target='_blank' rel='noopener noreferrer'>{props.name}</a>
        <a className='Item__link' href={props.link} target='_blank' rel='noopener noreferrer'>{props.link}</a>
        <div className='Item__buttons'>
          <a className='Item__favourites'>
            <span className='glyphicon glyphicon-star-empty' aria-hidden='true'></span>
          </a>
          <a className='Item__favourites' onClick={props.handleCheckedClick}>
            <span className='glyphicon glyphicon glyphicon-ok' aria-hidden='true'></span>
          </a>
          {/*<input className='Item__check' type='checkbox' onClick={props.handleCheckedClick}/>*/}
        </div>
    </div>
  )
}

export default Item;
