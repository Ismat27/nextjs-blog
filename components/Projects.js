import { Container, Card, Col } from 'react-bootstrap'
import {projects_data} from '../projects_data'

const Tools = ({tools}) => {
    return (
        <div className='project-tools'>
            {
                tools.map((tool) => <span key={tool}>{tool}</span>)
            }
        </div>
    )
}

const Projects = () => {
  return (
    <section className='projects-section py-2'>
        <Container>
            <h2 className='mb-5'>
                Some of the projects I have been working on
            </h2>
        </Container>
        <Container className='projects-container'>
            <div className='projects-grid'>
            {
                projects_data.map((item, index) => {
                    return ( 
                        <article className='' key={index}>
                            <Card className='h-100 project-card' border='light'>
                                <Card.Img alt={item.title} src={item.image}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.intro}</Card.Text>
                                    <Tools tools={item.tools} />
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Text>Read more</Card.Text>
                                </Card.Footer>
                            </Card>
                        </article>
                    )
                })
            }
            </div>
        </Container>
    </section>
  )
}

export default Projects