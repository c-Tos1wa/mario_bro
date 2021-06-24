import logo from './logo.png'

import {Delete} from './componentes/deletar/DeleteAll'
import {Read} from './componentes/listar/ReadAll'
import {ReadOne} from './componentes/listar/ReadOne'
import {About} from './componentes/sobre/About'
import {Create} from './componentes/criar/Create'


import './estilos/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <div className='logoIcon'>
        <img className='logo-img' src={logo} alt='Logo MarioBros' />
      </div>

      <Navbar className='justify-content-center' expand='sm'>
        <Nav>
          <Nav.Link id='style-link' href='/'>Início</Nav.Link>
          <Nav.Link id='style-link' href='/criar'>Adicionar Personagens</Nav.Link>
          <Nav.Link id='style-link' href='/deletar'>Deletar todos</Nav.Link>
          <Nav.Link id='style-link' href='/sobre'>Sobre</Nav.Link>
        </Nav>
      </Navbar>

      <Container className='app-container'>
        <Row>
          <Col>
            <Switch>
              <Route path='/' exact={true} component={Read}></Route>
              <Route path='/criar' component={Create}></Route>
              <Route path='/view/:id' component={ReadOne}></Route>
              <Route path='/deletar' component={Delete}></Route>
              <Route path='/sobre' component={About}></Route>
            </Switch>
          </Col>
        </Row>

      </Container>

    </>
  );
}

export default App;
