import Head from 'next/head'
import Nav from './Nav'

export default function Layout({ children, pageTitle, ...props}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <section className="layout">
                <Nav title={pageTitle}/>
                <div className="content">{children}</div>
            </section>
            <footer>
                A site.
            </footer>
        </>
    )
}