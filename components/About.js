import { Container } from "react-bootstrap";
import styled from "styled-components";
import { VscTools } from "react-icons/vsc";
import { skills } from "../projects_data";
import { AOS } from "./AOS";

const About = () => {
  return (
    <Wrapper>
      <Container className="section-container">
        <div className="content-box">
          <AOS>
            <article>
              <h2>My humble self</h2>
              <p>
                I am growth oriented fellow who love to mingle and use web
                technologies to solve diverse business problems
              </p>
              <p>
                I have the privilege to have been mentored and worked with
                experienced developers through which I have been evolving as a
                developer that possesses the required skill set to build
                standard web applications
              </p>
              <p>
                From ideation to production, I enjoy working collaboratively
                with my team members to deliver a high quality products that
                exceed expectations and drive results.
              </p>
            </article>
          </AOS>
          <AOS xStart={100} delay={0.2}>
            <article>
              <h3>My Skills</h3>
              <p>Here are the technologies I have been working with</p>
              <div className="skills-container">
                <ul className="skills">
                  {skills.map((skill) => {
                    return (
                      <li key={skill} className="skill">
                        <VscTools /> <strong>{skill}</strong>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </AOS>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-block: 4rem;
  .section-container {
    display: block;
  }
  .content-box {
    display: grid;
  }
  .skills-container {
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    padding: 0.2rem;
    border-radius: 0.5rem;
  }
  .skills-container:hover {
    animation: project-hover 3000ms ease 100ms infinite forwards;
  }
  .skills {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem 1rem;
    margin: 0;
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
`;

export default About;
