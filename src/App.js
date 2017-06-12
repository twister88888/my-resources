import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem} from 'reactstrap';
import Item from './Item.js';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCheckedClick = this.handleCheckedClick.bind(this);

    this.state = {
      fecha: 0,
      items: [
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
      ]
    };
  }

  handleCheckedClick(event) {
    //this.setState({ event.dateViewed: moment().format('l') })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>

            Nombre APP | Buscar | Añadir | Login | Logout </Col>
        </Row>
        <Row>
          <Col lg='4'>
            <ListGroup>
               <ListGroupItem>Cras justo odio</ListGroupItem>
               <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
               <ListGroupItem>Morbi leo risus</ListGroupItem>
               <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
               <ListGroupItem>Vestibulum at eros</ListGroupItem>
             </ListGroup>
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
    );
  }
}

export default App;
