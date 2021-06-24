import { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Api } from '../../api/api' 

export class Delete extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false
        }
    }

    clicar = async event => {
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

        this.voltarInicio();
    }

    voltarInicio = () => {
        this.props.history.push('/')
    }

    render(){
        return (
            <>
            <h3>Tem certeza de que deseja apagar tudo?</h3>
            <p>Esta ação não poderá ser revertida.</p>

            <Button className='btn' variant="danger" onClick={this.clicar}>
                Excluir tudo
            </Button>

            <Button className='btn' variant='primary' onClick={this.voltarInicio}>
                Cancelar
            </Button>
            </>
        )
    }

}

