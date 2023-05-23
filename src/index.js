import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Lucinda Reilly',
    title: 'Atlas: the story',
    img: 'https://m.media-amazon.com/images/I/51dM3mS1wdL._SX328_BO1,204,203,200_.jpg',
    id: 1,
  },
  {
    author: 'Jessie Inchauspé ',
    title: 'The Glucose Goddess Method',
    img: 'https://m.media-amazon.com/images/I/5105MIgJQuL._SX382_BO1,204,203,200_.jpg',
    id: 2,
  },
];


const BookList = () => {
  return (<section className="booklist">
    {books.map((book) => {
      return (
        <Book {...book} key={book.id} />
      )
    })}
  </section>)
};


const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  }
  return (
    <article className="book">
      <img
        src={img}
        alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BookList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

