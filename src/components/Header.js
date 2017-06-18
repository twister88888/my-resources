import React, { Component } from 'react'
import firebase from 'firebase'
import { Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
         } from 'reactstrap'
import Formu from './Formu'

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleLink = this.handleLink.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      isOpen: false,
      modal: false,
      name: '',
      link: ''
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
    })
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleLink(event) {
    this.setState({
      link: event.target.value
    })
  }

  writeNewResource(name, link) {
    // A post entry.
    var resourceData = {
      dateViewed: '',
      favourites: false,
      labels: '',
      link: this.state.link,
      name: this.state.name,
      type: '',
      viewed: false
    }

    // Get a key for a new Post.
    var newResourceKey = firebase.database().ref().child('resources').push().key
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {}
    updates['/resources/' + newResourceKey] = resourceData
    return firebase.database().ref().update(updates)
  }

  handleSubmit(event) {
    this.setState({
      modal: !this.state.modal
    })
    event.preventDefault()
    this.writeNewResource()
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
                <Formu
                  modal={this.state.modal}
                  handleName={this.handleName}
                  handleLink={this.handleLink}
                  handleModal={this.handleModal}
                  handleSubmit={this.handleSubmit}
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
