import Link from 'next/link'

export default function Nav({title}) {
    return (
        <>
            <header className="header">
                <div className="theme"></div>
                <h3>{title}</h3>
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <nav className="nav">
                <Link href="/">
                    <a>Home</a>
                </Link>

                <Link href="/projects">
                    <a>Projects</a>
                </Link>

                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </nav>
        </>
    )
}
