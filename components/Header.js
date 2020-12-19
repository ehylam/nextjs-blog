import { useState } from 'react'
import Nav from './Nav'

export default function Header({title}) {

    const [eatenBurger, setBurger] = useState(false);

    function eatBurger() {
        eatenBurger ? setBurger(false) : setBurger(true);
    }
    return (
        <>
            <header className="header">
                <a href="https://www.ericlam.dev/">{title}</a>
                <div className="theme"></div>

            </header>
            <div className="burger">
                <div className={"burger__block" + (eatenBurger ? ' active' : '')} onClick={eatBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Nav burgerEaten={eatenBurger}/>
        </>
    )
}
