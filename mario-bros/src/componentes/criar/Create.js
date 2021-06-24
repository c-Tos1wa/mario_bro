import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Api } from '../../api/api'

export class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    enviar = async event => {
        event.preventDefault();
        const { nome, imgUrl } = event.target;

        const objeto = {
            name: nome.value,
            imageUrl: imgUrl.value
        }

        this.setState({
            isLoading: true
        })

        const request = await Api.buildApiPostRequest(
            Api.createUrl(),
            objeto
        ).catch(e => {
            console.error('Não foi possível adicionar este personagem ', e);
        })

        this.setState({
            isLoading: false
        })

        const resposta = await request.json();
        const id = resposta._id
        this.props.history.push(`/view/${id}`)
    }    

    render(){
        return(
            <>
            <h4> Adicione os personagens aqui</h4>

            <Form onSubmit={this.enviar}>
                <Form.Group controlId ='nome'>
                    <Form.Label>Nome do Personagem</Form.Label>
                    <Form.Control type='text' placeholder="Digite o nome aqui" />
                    <Form.Text className='text-muted'>
                        Este será o nome usado para identificar a imagem. 
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='imgUrl'>
                    <Form.Label>Link da imagem</Form.Label>
                    <Form.Control type='text' placeholder="Coloque aqui o link da imagem" />
                    <Form.Text className='text-muted'>Esta imagem será exibida na página inicial,
                    certifique-se de que o link enviado é válido</Form.Text>
                </Form.Group>

                <Button type='submit'>Criar</Button>
                

            </Form>
            </>
        )
    }
}    












