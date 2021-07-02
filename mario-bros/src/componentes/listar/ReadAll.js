import { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { UniqueCard } from './uniqueCard'
import { Api } from '../../api/api'
import LoadingImg from './loadingImg.svg'
import '../../estilos/get.scss'

export class Read extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            items: []
        }
    }

    async componentDidMount () {
        const request = await Api.buildApiGetRequest(Api.readAllUrl());
        const items = await request.json();
        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl))

        this.setState({
            isLoading: false,
            items: itemsWithImageUrl,
            filteredItems: itemsWithImageUrl
        })
    }

    render() {
        const { isLoading, filteredItems } = this.state

        if(isLoading) {
            return (
                <Container>
                    <Row>
                        <img className='loading' src={LoadingImg} alt='' />
                    </Row>
                </Container>
            )
        } else {
            if(filteredItems == false) {
                return(
                   <Container>
                       <Row>
                           <p className='noData'>Não há personagens cadastrados nesta lista</p>
                       </Row>
                   </Container> 
                )
            } else{
                return(
                    <Container>
                        <Row>
                             {filteredItems.map( item => (
                                <UniqueCard item={item} key={item._id} />
                            ))}
                        </Row>
                    </Container>
                )
            }
        }
    }
}


