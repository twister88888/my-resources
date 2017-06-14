import React from 'react'
import { Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Button,
        FormGroup,
        Label,
        Input,
        } from 'reactstrap'

const Form = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.handleModal}>
      <ModalHeader toggle={props.handleModal}>Add resource</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="text" name="name" placeholder="add name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Link</Label>
          <Input type="text" name="email" placeholder="add link" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.handleModal}>Add</Button>{' '}
        <Button color="secondary" onClick={props.handleModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default Form
