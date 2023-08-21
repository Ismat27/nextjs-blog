import { Container, Card } from "react-bootstrap";
import { projects_data } from "../projects_data";
import { AOS2 } from "./AOS";

const Tools = ({ tools }) => {
  return (
    <div className="project-tools">
      {tools.map((tool) => (
        <span className="project-tool" key={tool}>
          {tool}
        </span>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-2">
      <Container>
        <h2 className="mb-5">Some of the projects I have been working on</h2>
      </Container>
      <Container className="projects-container">
        <div className="projects-grid">
          {projects_data.map((item, index) => {
            return (
              <AOS2 key={index}>
                <article className="project h-100">
                  <Card className="h-100 project-card" border="light">
                    <Card.Img alt={item.title} src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.intro}</Card.Text>
                      <Tools tools={item.tools} />
                    </Card.Body>
                    <Card.Footer>
                      <Card.Text
                        className="project-link"
                        href={item.link}
                        as="a"
                      >
                        View
                      </Card.Text>
                    </Card.Footer>
                  </Card>
                </article>
              </AOS2>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
