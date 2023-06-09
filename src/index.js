import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {

  return (
    <>
      <h1>Amazon best sellers!</h1>
      <section className="booklist">

        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} index={index} />
          )
        })}

      </section>
    </>)
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BookList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

