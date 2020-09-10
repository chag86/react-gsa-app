import React from "react";
import { Button, Col, Form, FormControl, InputGroup, Spinner } from "react-bootstrap";

 


const Formulario = ({ children }) => {
    return (
        <Form id="formulario">
            <Form.Row>
                <Form.Group as={Col} controlId="formInputBusca">
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text className="btn btn-primary">Digite o termo para a busca</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Texto para a busca" />
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formTipoDecisao">
                    <Form.Label>Tipo de Decisão</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formInstancia">
                    <Form.Label>Instancia</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formOrgaoJulgador">
                    <Form.Label>Orgão Julgador</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formReladorRedator">
                    <Form.Label>Relator/Redator</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formClasseCNJ">
                    <Form.Label>Classe CNJ</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formAssuntoCNJ">
                    <Form.Label>Assunto CNJ</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formComarcaOrigem">
                    <Form.Label>Comarca de origem</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formSessao">
                    <Form.Label>Sessão</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formBotaoBuscar">
                <Button>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"/>

                    Buscando...
                </Button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default Formulario;