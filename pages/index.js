import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="top-container">
        <Header />
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <section className='posts'>
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
      </section> */}
    </Layout>
  );
}
