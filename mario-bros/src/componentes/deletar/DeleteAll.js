import { Component } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { Api } from '../../api/api'
import '../../estilos/delete.scss'


export class DeleteAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false
        }
    }

    deleteHandle = async event => {
        event.preventDefault();

        this.setState({
            isLoading: true
        })

        await Api.buildApiDeleteRequest(Api.deleteAllUrl()
            ).catch(e => 
                {console.error('Erro ao deletar todo o banco ', e)
            })
        
        this.setState({
            isLoading: false
        })

        this.goHome()
    }

    goHome = () => {
        this.props.history.push('/')
    }

    render(){
        return (
            <Alert variant="danger">
                <Alert.Heading>
                    Tem certeza de que deseja apagar tudo? Esta ação não poderá ser revertida.
                </Alert.Heading>
                <Button 
                    className='btn' 
                    variant="danger" 
                    onClick={this.deleteHandle}>Excluir tudo</Button>

                <Button 
                    className='btn' 
                    variant='primary' 
                    onClick={this.goHome}>Cancelar</Button>
            </Alert>
        )
    }
}

