import React from 'react'
import { Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Button,
        Form,
        FormGroup,
        Label,
        Input,
        } from 'reactstrap'

const Formu = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.handleModal}>
      <Form onSubmit={props.handleSubmit}>
        <ModalHeader toggle={props.handleModal}>Add resource</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input type="text" name="name" placeholder="add name" onChange={props.handleName} required/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Link</Label>
            <Input type="text" name="email" placeholder="add link" onChange={props.handleLink} required/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={props.handleModal}>Add</Button>
          <Button color="secondary" onClick={props.handleModal}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default Formu
