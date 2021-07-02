import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../../estilos/about.scss'

export class About extends Component {
    render(){
        return (
            <Card className="text-left">
                <Card.Img variant='top' src='' />
                <Card.Body>
                    <Card.Title>Cristina Toshie Iwassaki</Card.Title>
                    <Card.Text>
                        Olá!<br />
                        Meu nome é Cristina e sou aluna da <Link to={{pathname: "https://blueedtech.com.br"}} target='_blank'>BlueEdTech </Link>
                        no curso de Front-End. <br />
                        Curiosa por natureza, sempre quero saber como as coisas funcionam. <br />
                        Interessada em livros, filmes, séries e fotografia.<br />
                    </Card.Text>
                    <Link className='btn btn-info' to={{pathname: "https://github.com/c-Tos1wa"}} target="_blank">Acesse meu Github</Link>
                </Card.Body>
            </Card>
        )
    }
}

