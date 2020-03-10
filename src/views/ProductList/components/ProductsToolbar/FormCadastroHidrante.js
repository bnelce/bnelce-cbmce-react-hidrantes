import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class FormCadastroHidrante extends Component {

  state = {
    file: null
  }

  onChange = event => {
    this.setState({file: event.target.files[0]});
  }

  onFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        console.log(formData);
        const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("/upload",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });
  }

  render() {
    return(
     <Form onSubmit={this.onFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Número</Form.Label>
            <Form.Control placeholder="Número do hidrante" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tipo</Form.Label>
            <Form.Control as="select">
              <option>Coluna</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      
        <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Cor</Form.Label>
            <Form.Control as="select">
              <option>Vermelho</option>
              <option>Amarelo</option>
              <option>Azul</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Latitude</Form.Label>
            <Form.Control/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Longitude</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      
        <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Cidade</Form.Label>
            <Form.Control as="select">
              <option>Fortaleza</option>
              <option>Caucaia</option>
              <option>Maracanaú</option>
              <option>Maranguape</option>
              <option>Marco</option>
              <option>Sobral</option>         
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Estado</Form.Label>
            <Form.Control placeholder="Ceará" readOnly="true"/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control />
          </Form.Group>
          
        </Form.Row>

        <Form.Row>
          <input type="file" name="myImage" onChange={this.onChange} />
        </Form.Row>
      
        <br></br>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
        
      </Form>
      );
    }
}