import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Projects from '../components/Projects';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='top-container'>
        <Header />
        <Hero />
      </div>
      <section className='posts'>
        <Container>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <Row>
            {allPostsData.map(({ id, date, title, intro }) => (
              <Col md={6} className={utilStyles.listItem} key={id}>
                <Card as={'article'} className='h-100 post-card'>
                  <Card.Body as={Link} href={`/posts/${id}`}>
                    <Card.Title>{title}</Card.Title>
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                    <Card.Text>{intro}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Projects />
    </Layout>
  );
}