const Book = (props) => {
    const { img, title, author, index } = props;

    return (
        <article className="book">
            <img
                src={img}
                alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <h4 className="index">{`# ${index + 1}`}</h4>
        </article>
    );
};

export default Book;