import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Wrapper>
        <Container>
            <article>
                <h1 className="logo">smart<span>Dev</span></h1>
                <div className='links'>
                    <a href='https://github.com/Ismat27'><BsGithub /></a>
                    <a href='https://twitter.com/adegbite_ismail'><BsTwitter /></a>
                    <a href='https://www.linkedin.com/in/ismail-adegbite/'><BsLinkedin /></a>
                </div>
            </article>
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
padding-block: 2rem;
background-color: #000000;
color: white;
article {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
h1 {
    color: white;
}
.links {
    display: flex;
    gap: .8rem;
}
svg {
    color: white;
    font-size: 1.5rem;
}
@media screen and (min-width: 768px) {
    article {
        flex-direction: row;
        justify-content: space-between;
    }
}
`

export default Footer