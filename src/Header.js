import React, { Component } from 'react'
import { Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
         } from 'reactstrap'
import Form from './Form'


class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleModal = this.handleModal.bind(this)

    this.state = {
      isOpen: false,
      modal: false
    }

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <header className='header'>
        <Navbar color='faded' light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href='/'>MY PERSONAL GOALS</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink onClick={this.handleModal}>
                  Añadir
                </NavLink>
                <Form
                  modal={this.state.modal}
                  handleModal={this.handleModal}
                />
              </NavItem>
              <NavItem>
                <NavLink href='/components/'>
                  Buscar
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header
