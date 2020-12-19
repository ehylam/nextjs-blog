const TextBlock = ({title,content}) => {
    return (
        <div className="text__block section">
            <div className="text__content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
     );
}

export default TextBlock;