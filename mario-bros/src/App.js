import { Switch, Route } from 'react-router-dom'

import logo from './logo.png'

import { Read } from './componentes/listar/ReadAll'
import { ReadOne } from './componentes/listar/ReadOne'
import { DeleteAll } from './componentes/deletar/DeleteAll'
import { DeleteOne } from './componentes/deletar/DeleteOne'
import { Create } from './componentes/criar/Create'
import { Update } from './componentes/editar/Update'
import { About } from './componentes/sobre/About'

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './estilos/app.scss'


function App() {
  return (
    <>
      <div className='logoIcon'>
        <img className='logo-img' src={logo} alt='Logo MarioBros' />
      </div>

      <Navbar className='justify-content-center' expand='sm'>
        <Nav fill variant="tabs">
          <Nav.Link id='style-link' href='/'>Início</Nav.Link>
          <Nav.Link id='style-link' href='/create'>Adicionar Personagens</Nav.Link>
          <Nav.Link id='style-link' href='/delete_all'>Deletar tudo</Nav.Link>
          <Nav.Link id='style-link' href='/about'>Sobre</Nav.Link>
        </Nav>
      </Navbar>

      <Container className='app-container'>
        <Row>
          <Col>
            <Switch>
              <Route path='/' exact={true} component={Read}></Route>
              <Route path='/view/:id' component={ReadOne}></Route>
              <Route path='/create' component={Create}></Route>
              <Route path='/delete/:id' component={DeleteOne}></Route>
              <Route path='/update/:id' component={Update}></Route>
              <Route path='/delete_all' component={DeleteAll}></Route>
              <Route path='/about' component={About}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
