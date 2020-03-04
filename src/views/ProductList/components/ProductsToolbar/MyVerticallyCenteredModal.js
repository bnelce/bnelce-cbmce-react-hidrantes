import React, { useState } from 'react';
import { Modal,  ModalHeader, Button} from 'react-bootstrap';
import FormCadastroHidrante from './FormCadastroHidrante';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{zIndex: '99999'}} 
              >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastro Novo Hidrante
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormCadastroHidrante/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;