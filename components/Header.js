import Link from 'next/link'

export default function Nav({title}) {
    return (
        <>
            <header className="header">
                <h3>{title}</h3>
                <div className="theme"></div>

            </header>
            <div className="burger">
                <div className="burger_block">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
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
