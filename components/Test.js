import { useState } from 'react';

const Test = ({title}) => {

    const [isToggled, setToggled] = useState(false);
    var content = <p></p>;
    const toggleButton = (e) => {
        e.preventDefault();
        isToggled ? setToggled(false) : setToggled(true);
        console.log(isToggled);
    }

    if(isToggled) {
        content = <p>Hello world, this is true</p>;
    } else {
        content = <p>Good bye world, this is false</p>
    }
    return (
    <>
        <h4>{title}</h4>
        <a href="" onClick={toggleButton}>Test</a>
        {content}

        {/* Probably better to have all javascript conditionals/event listener functions outside */}
        {isToggled ? (<p>Inside return - True</p>) : (<p>Inside return - False</p>)}

        {isToggled && <span>Hidden message</span>}
    </>
     );
}

export default Test;