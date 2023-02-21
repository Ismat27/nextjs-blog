import Head from "next/head"
import Layout from "../../components/layout"
import Date from "../../components/date"
import { getAllPostIds, getPostData } from "../../lib/posts"
import utilStyles from '../../styles/utils.module.css';
// import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import Code from "../../src/components/code";
import { useState, useEffect } from "react";

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
  const [isDark, setIsDark] = useState(true)
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
                <div className="blog">
                    <Markdown
                        options={{
                            overrides: {
                                code: {
                                    component: Code,
                                    props: {
                                        isDark,
                                        setIsDark
                                    }
                                }
                            }
                        }}
                    >
                        {postData.matterResult}
                    </Markdown>
                </div>
            </article>
        </Layout>
    )
}