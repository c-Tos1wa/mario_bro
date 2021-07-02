import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import '../../estilos/uniqueCard.scss'

export class UniqueCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      item: this.props.item
    }
  }

  render(){
    const { item } =this.state

    return(
      <Col xs='12' sm='6' md='4' lg='3'>
        <Route
          render={({ history }) => (
            <Card
              className='unique-card'
              onClick={() => {
                history.push(`/view/${item._id}`)
              }}>
                <Card.Img variant='top' src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
          )}
        />
      </Col>
    )
  }
}