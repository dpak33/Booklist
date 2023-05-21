import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (<section className="booklist">
    <Book />
  </section>)
}

const Book = () => {
  const title = 'Atlas: the story';
  const author = "Lucinda Reilly";
  return (
    <article className="book">
      <img src='./images/book1.jpg' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{2 - 1}</p>
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

