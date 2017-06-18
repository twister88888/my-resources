import React from 'react'

const Aside = () => {
  return (
    <div className='main'>
      <aside className='navbar-wrapper'>
        <div className='sidebar-navbar'>
          <div className='navbar-primary'>
            <span className='navbar-primary__title'>Mi Lista</span>
            <div className='navbar-primary__list'>
              <a className='btn-icon navbar__link' href=''>Favoritos</a>
              <a className='btn-icon navbar__link' href=''>Artículos</a>
              <a className='btn-icon navbar__link' href=''>Videos</a>
              <a className='btn-icon navbar__link' href=''>Imágenes</a>
              <a className='btn-icon navbar__link' href=''>Etiquetas</a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Aside
