import { Container } from "react-bootstrap"
import styled from "styled-components"
import { VscTools } from 'react-icons/vsc'
const skills = ['HTML', 'CSS', 'JavaScript', 'React.Js', 'Next.Js', 'Node', 'Express.js', 'Mongoose', 'Python', 'DRF']


const About = () => {

  return (
    <Wrapper>
      <Container className="section-container">
        <div>
          <article>
              <h2>My humble self</h2>
              <p>
                I am growth oriented fellow who love to mingle and use web technologies to solve diverse business problems
              </p>    
              <p>
                I have the privilege to have been mentored and worked with experienced developers through which I have been evolving as a developer that possesses the  required skill set to build standard web applications
              </p>
              <p>From ideation to production, I enjoy working collaboratively with my team members to deliver a high quality products that exceed expectations and drive results.</p>
          </article>
          <article>
            <h3>My Skills</h3>
            <p>Here are the technologies I have been working with</p>
            <ul className="skills">
              {
                skills.map((skill) => {
                  return (
                    <li key={skill} className="skill">
                      <VscTools /> <strong>{skill}</strong>
                    </li>
                  )
                })
              }
            </ul>
          </article>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 4rem;
.section-container {
  display: block;
}
div {
  display: grid;
}
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem 1rem;
}
.skill {
  display: flex;
  gap: 0.5em;
  align-items: center;
  svg {
    color: green;
  }
}
strong {
  font-weight: 600;
}
@media screen and (min-width: 768px) {
  div {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    justify-content: space-between;
  }
  .skills {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .skills {
    grid-template-columns: repeat(3, 1fr);
  }
}
`

export default About