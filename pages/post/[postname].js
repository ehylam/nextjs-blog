import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/Layout'

// [postname].js - NextJS will know that this file is dynamic
export default function BlogPost({ siteTitle, frontmatter, markdownBody}) {
    if(!frontmatter) return <></>

    return (
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
            <Link href="/">
                <a>Return to posts</a>
            </Link>
            <article>
                <h1>{frontmatter.title}</h1>
                <p>By {frontmatter.author}</p>
                <div>
                    <ReactMarkdown source={markdownBody}/>
                </div>
            </article>
        </Layout>
    )
}

export async function getStaticProps({...ctx}) {
    const { postname } = ctx.params;
    const content = await import(`../../public/posts/${postname}.md`)
    const config = await import('../../siteconfig.json')
    const data = matter(content.default)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content
        }
    }
}
// If a page has dynamic routes ([postname])
// Get the dynamic routes to be built
export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        // return the keys for each blog post extracted from '../../public/posts
        const keys = context.keys();
        //
        const data = keys.map((key, index) => {
            // Sluggify
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

            return slug
        })

        return data
    })(require.context('../../public/posts', true, /\.md$/))
    // then return the current slug
    const paths = blogSlugs.map((slug) => `/post/${slug}`)

    return {
        paths,
        fallback: false
    }
}