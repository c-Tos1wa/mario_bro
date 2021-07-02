import {Component} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Api } from '../../api/api'
import '../../estilos/deleteOne.scss'

export class DeleteOne extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      isLoading: false
    };
  }
    deleteOneHandler = async event => {
      event.preventDefault();

      this.setState({
        isLoading: true
      })

      await Api.buildApiDeleteRequest(Api.deleteOneUrl(this.id)
        ).catch (e => {console.error('Erro ao deletar ', e)})

      this.setState({
        isLoading: false
      })

      this.goHome()
    }

    goHome = () => {
      this.props.history.push('/')
    }

    view = () => {
      this.props.history.push(`/view/${this.id}`)
    }

    render() {
      return(
            <Alert variant="warning">
              <Alert.Heading> Tem certeza de que deseja excluir este personagem?</Alert.Heading>
              <Button className='btn' variant='danger' onClick={this.deleteOneHandler}>Excluir Item</Button>
              <Button className='btn' variant='primary' onClick={this.view}>Cancelar</Button>
            </Alert>  
      )
    }
}