import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class FormCadastroHidrante extends Component {

  state = {
    file: null,
    numero: null,
    tipo: null,
    cor: null,
    latitude: null,
    longitude: null,
    cidade: null,
    estado: null,
    cep: null
  }

  numeroInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  tipoInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  corInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  latitudeInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  longitudeInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  cidadeInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  cepInputChange = e => {
    this.setState({newRepo: e.target.value});
  }

  onChange = event => {
    this.setState({file: event.target.files[0]});
  }

  onFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        const config = {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
          
      };
      axios.post('http://localhost:3223/file',formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");

          }).catch((error) => {
            console.log(error);
      });



  }

  render() {

    const { numero, tipo, cor, latitude, longitude, cidade, cep } = this.state;

    return(
     <Form onSubmit={this.onFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label >Número</Form.Label>
            <Form.Control  value= {numero} 
            onChange= {this.numeroInputChange}
            placeholder="Número do hidrante" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tipo</Form.Label>
            <Form.Control as="select"
            value= {tipo} 
            onChange= {this.tipoInputChange}>
              <option>Coluna</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      
        <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Cor</Form.Label>
            <Form.Control 
            value= {cor} 
            onChange= {this.corInputChange}
            as="select">
              <option>Vermelho</option>
              <option>Amarelo</option>
              <option>Azul</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
            value= {latitude} 
            onChange= {this.latitudeInputChange}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Longitude</Form.Label>
            <Form.Control 
            value= {longitude} 
            onChange= {this.longitudeInputChange} />
          </Form.Group>
        </Form.Row>
      
        <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Cidade</Form.Label>
            <Form.Control as="select"
            value= {cidade} 
            onChange= {this.cidadeInputChange}>
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
            <Form.Control 
            value= {cep} 
            onChange= {this.cepInputChange}/>
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