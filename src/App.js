import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Resultado from './componente/Resultado';
import Formulario from './componente/Formulario';
import Cabecalho from './componente/Cabecalho';

const App = () => (
  <Container fluid key="containerApp">
    <Cabecalho />
    <Formulario />
    <Resultado />
  </Container>
);
export default App;
