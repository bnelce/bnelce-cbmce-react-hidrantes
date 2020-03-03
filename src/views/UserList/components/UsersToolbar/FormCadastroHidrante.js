import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

export default function FormCadastroHidrante(){
  return(
    <Form>
      <Form.Row>
        <Form.Group
          as={Col}
          controlId="formGridEmail"
        >
          <Form.Label>Nome da Vistoria</Form.Label>
          <Form.Control placeholder="Nome vistoria" />
        </Form.Group>
      
        <Form.Group
          as={Col}
          controlId="formGridPassword"
        >
          <Form.Label>tipo</Form.Label>
          <Form.Control placeholder="Tipo" />
        </Form.Group>
      </Form.Row>
      
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Rua</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
      
      <Form.Group controlId="formGridAddress2">
        <Form.Label>Bairro</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      
      <Form.Row>
        <Form.Group
          as={Col}
          controlId="formGridCity"
        >
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>
      
        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Estado</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
      
        <Form.Group
          as={Col}
          controlId="formGridZip"
        >
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      
      <Form.Group id="formGridCheckbox">
        <Form.Check
          label="Check me out"
          type="checkbox"
        />
      </Form.Group>
      
      <Button
        type="submit"
        variant="primary"
      >
          Submit
      </Button>
    </Form>);
}
