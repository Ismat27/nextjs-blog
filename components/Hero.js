import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import utilStyles from '../styles/utils.module.css';

const Hero = () => {
  return (
    <section className='hero-section'>
        <Container>
            <Row>
                <Col lg={6}>
                    <h1 className={utilStyles.heading2Xl}>Ismail Adegbite</h1>
                    <p>My name is Ismail Adegbite, a fullstack engineer</p>
                    <p>
                    I am a full-stack developer with a passion for creating dynamic and user-friendly web applications. With profound knowledge of both front-end and back-end tecnologies, I excel at crafting innovative solutions that drive engagement and solve complex business problems. From ideation to deployment, I work collaboratively with my clients to deliver high-quality products that exceed expectations and drive results.
                    </p>
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