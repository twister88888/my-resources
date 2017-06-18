import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from './Header'
import Aside from './Aside'
import Item from './Item'
import moment from 'moment'
import firebase from 'firebase'

class App extends Component {
  constructor(props) {
    super(props)

  //  this.handleCheckedClick = this.handleCheckedClick.bind(this)

    this.state = {
      fecha: 0,
      items: []
      /*items: [
        {
          name: 'CSS Grid Layout Terminology, Explained',
          type: 'article',
          link: 'https://bitsofco.de/css-grid-terminology/',
          dateViewed: '',
          viewed: 'no',
          labels: 'css'
        },
        {
          name: '22 free eboks for designer',
          type: 'video',
          link: 'http://www.creativebloq.com/design/free-ebooks-designers-7133700',
          dateViewed: '',
          viewed: 'no',
          labels: 'js'
        },
        {
          name: 'Exploring ES6',
          type: 'podcast',
          link: 'http://exploringjs.com/es6/',
          dateViewed: '01/01/2011',
          viewed: 'no',
          labels: 'html'
        }
      ]*/
    }
  }

  /*handleCheckedClick(event) {
    //this.setState({ event.dateViewed: moment().format('l') })
  }*/

  componentWillMount() {
    this.firebaseRef = firebase.database().ref('resources')
    this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
      var items = []
      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val()
        item['.key'] = childSnapshot.key
        items.push(item)
      })

      this.setState({
        items: items
      })
    }.bind(this))
  }

  componentWillUnmount() {
    this.firebaseRef.off()
  }

  render() {
    return (
      <div className='wrapper'>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col lg='4'>
              <Aside />
            </Col>
            <Col lg='8'>
              {this.state.items.length > 0 && this.state.items.map(items => (
                  <Item
                    key={items.name}
                    name={items.name}
                    date={items.dateViewed}
                    link={items.link}
                    handleCheckedClick={this.handleCheckedClick}
                  />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
