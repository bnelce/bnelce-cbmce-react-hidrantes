import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FormGroup } from '@material-ui/core';

export default class FormCadastroHidrante extends Component {
  render() {

    
    var acesso = ['Acesso bloqueado', 'Hidrante subterrâneo coberto por asfalto ou concreto',
  'Tampa da válvula coberta por asfalto ou concreto'];
  var problema = ['Instalação muito próximo da guia', 'Expedições não estão na posição correta para uso',
  'Roscas de expedição incompatíveis com os equipamentos do CBMGO', 'Instalação muito fundo no solo',
'Instalação com muita inclinação', 'Falta de sinalização no trânsito'];


  return(
    <Form>
      <Form.Row>
        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Tipo</Form.Label>
          <Form.Control as="select">
            <option>Inspenção</option>
            <option>Manutenção</option>
          </Form.Control>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Tipo Hidrante</Form.Label>
          <Form.Control as="select">
            <option>Coluna</option>
            <option>Subterraneo</option>
          </Form.Control>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Pressão</Form.Label>
          <Form.Control as="select">
            <option>Ruim</option>
            <option>Regular</option>
            <option>Satisfatória</option>
            <option>Ótima</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Vazão</Form.Label>
          <Form.Control as="select">
            <option>Ruim</option>
            <option>Regular</option>
            <option>Satisfatória</option>
            <option>Ótima</option>
          </Form.Control>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Condições</Form.Label>
          <Form.Control as="select">
            <option>Perfeitas</option>
            <option>Dificuldades</option>
            <option>Sem Condições de Uso</option>
          </Form.Control>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridState"
        >
          <Form.Label>Cor</Form.Label>
          <Form.Control as="select">
            <option>Vermelha</option>
            <option>Amarela</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
       
      <Row>
      
      {
    
      acesso.map((valor, indice) => ( 
        <div key={indice} className="mb-3">
          <Form.Check 
            type={'checkbox'}
            id={`default-checkbox`}
            value={valor}
            label={valor} 
          />
        </div>
      ))
      }
      </Row>
      
      <Row>
      {
      problema.map((valor, indice) => ( 
        <div key={indice} className="mb-3">
          <Form.Check 
            inline
            type={'checkbox'}
            id={`default-checkbox`}
            value={valor}
            label={valor} 
          />
        </div>
      ))}
      
      </Row>

      <Row>
      {
      problema.map((valor, indice) => ( 
        <div key={indice} className="mb-3">
          <Form.Check
            inline  
            type={'checkbox'}
            id={`default-checkbox`}
            value={valor}
            label={valor}
          />
        </div>
      ))}
       </Row>
     
      

  
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
}
