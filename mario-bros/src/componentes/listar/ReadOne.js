import { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Api } from '../../api/api'
import '../../estilos/getOne.scss'

export class ReadOne extends Component {
  constructor(props) {
      super(props);

      this.id = this.props.match.params.id;
      this.state = {
          isLoading: true,
          item: {}
      };
  }

  async componentDidMount() {
    const request = await Api.buildApiGetRequest(
      Api.readOneUrl(this.id)
    );

    const item = await request.json();
    
    this.setState({
      isLoading: false,
      item,
    });

  }

  render(){
    const { item } = this.state;

    return(
      <>
        <Container className='info'>
            <Col>
              <h2 className="info-nome">{item.name}</h2>
            </Col>
            <Col>
              <img className="info-img" src={item.imageUrl} alt={item.name} />
            </Col>
            <Row className="actions">
              <Link className='btn btn-info' to={'/update/' + item._id}>Editar</Link>
              <Link className="btn btn-danger" to={'/delete/' + item._id}>Excluir</Link>
            </Row>
        </Container>
      </>
    )
  }
}