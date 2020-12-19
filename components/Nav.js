import { useEffect } from 'react'
import Link from 'next/link'

const Nav = ({burgerEaten}) => {
    var navHidden = false;
    useEffect(() => {
        if(!burgerEaten) {
            setTimeout(() => {
                document.querySelector('nav').classList.toggle('hidden');
            },200)
        }
    },[burgerEaten])
    return (
        <nav className={(burgerEaten ? 'active' : '')}>
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
     );
}

export default Nav;