import Head from "next/head"
import Layout from "../../components/layout"
import Date from "../../components/date"
import { getAllPostIds, getPostData } from "../../lib/posts"
import utilStyles from '../../styles/utils.module.css';
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import Prism from 'prismjs'
import { Container } from "react-bootstrap";

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({postData}) {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
    Prism.highlightAll()
  }, [hydration]);
  
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Container className="post-detail">
                <article>
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                    </div>
                    <div className="blog">
                        {hydration && <ReactMarkdown children={postData.matterResult}/> }
                    </div>
                </article>
            </Container>
        </Layout>
    )
}