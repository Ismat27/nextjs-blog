import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import utilStyles from '../styles/utils.module.css';

const Hero = () => {
  return (
    <section className='hero-section'>
        <Container>
            <Row>
                <Col lg={6}>
                    <h1 className={utilStyles.heading2Xl}>
                        Nice to meet you! <br />
                        I'm <span className='my-name'>Ismail Adegbite</span>
                    </h1>
                    <p>
                    I am a full-stack developer with a passion for creating dynamic and user-friendly web applications. With profound knowledge of both front-end and back-end tecnologies, I excel at crafting innovative solutions that drive engagement and solve complex business problems.
                    </p>
                    <div>
                        <button className='cta-btn hire-me'>
                            <a href='mailto:adegbiteismail27@gmail.com'>Contact me</a>
                        </button>
                    </div>
                </Col>
                <Col>
                    <Image
                        priority
                        src="/images/developer.webp"
                        className={utilStyles.borderCircle}
                        height={440}
                        width={440}
                        alt="developer"
                    />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero