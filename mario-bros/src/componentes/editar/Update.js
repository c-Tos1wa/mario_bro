import { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Api } from '../../api/api'	
import '../../estilos/put.scss'

export class Update extends Component {
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;

    this.state = {
      isLoading: true,
      item: {}
    }
  }

    async componentDidMount() {
      const request = await Api.buildApiGetRequest(
        Api.readOneUrl(this.id)
      );

      const item = await request.json();
      console.log(request)

      this.setState({
        isLoading: false,
        item

      });
    }

    editingHandle = async event => {
      event.preventDefault();

      const { name, imageUrl } = event.target;
      const item = {
        name: name.value,
        imageUrl: imageUrl.value
      }

      this.setState({
        isLoading: true
      })

      const request = await Api.buildApiPutRequest(
        Api.updateUrl(this.id),
          item)
            .catch ( e => {
            console.error('Erro ao editar este personagem ', e)
          });

        this.setState({
          isLoading: false
        })

        await request.json()
        this.props.history.push(`/view/${this.id}`)
        
      }

      render() {
        const { item } = this.state;
        

          return (
            <>
              <Form onSubmit={this.editingHandle}>
                <Form.Group controlId='name'>
                  <Form.Label>Nome do Personagem</Form.Label>
                  <Form.Control type='text' placeholder='Digite o nome' defaultValue={item.name} />
                  <Form.Text className='text-muted'>Este será o nome visualizado na lista</Form.Text>
                </Form.Group>

                <Form.Group controlId='imageUrl'>
                  <Form.Label>URL da imagem</Form.Label>
                  <Form.Control type='text' placeholder='Insira o link da imagem aqui' defaultValue={item.imageUrl}></Form.Control>
                  <Form.Text className='text-muted'>A imagem será exibida na lista dos items.
                    Certifique-se de o link é válido.</Form.Text>
                </Form.Group>

                <Button variant='primary' type="submit">Editar</Button>
              </Form>
            </>
        )
      }
    }