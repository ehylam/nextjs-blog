


const Hero = ({title}) => {
    var textArr = title.split("");
    splitText(textArr);

    function splitText(textArray) {
        let i = 0;
        textArray.forEach(letter => {
            if(letter.indexOf(' ') >= 0) {
                textArr[i] = null;
            }
            i++;
        });
    }


    return (
        <section className="hero">
            <h1>{textArr.map((letter, key) => {
                if(letter == null) {
                    return <div className="whitespace" key={key}></div>;
                } else {
                    return <span key={key}>{letter}</span>;
                }
            })}</h1>

        </section>
     );
}

export default Hero;