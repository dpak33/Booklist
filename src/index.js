import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Lucinda Reilly',
  title: 'Atlas: the story',
  img: 'https://m.media-amazon.com/images/I/51dM3mS1wdL._SX328_BO1,204,203,200_.jpg'
};

const secondBook = {
  author: 'Jessie Inchauspé ',
  title: 'The Glucose Goddess Method',
  img: 'https://m.media-amazon.com/images/I/5105MIgJQuL._SX382_BO1,204,203,200_.jpg'
};

const BookList = () => {
  return (<section className="booklist">
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
      <p>Hello text</p>
      <button>Click me!</button>
    </Book>

    <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
  </section>)
}

const Book = (props) => {
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img
        src={img}
        alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
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

