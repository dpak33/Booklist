import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (<section className="booklist">
    <Book />
  </section>)
}

const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />

  </article>
}

const Image = () => <img src="/images/book1.jpg" />
const Title = () => <h2>Atlas</h2>
const Author = () => <h2>Lucinda Riley</h2>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BookList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

