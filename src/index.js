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

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81iw2hmh35L._AC_UL900_SR900,600_.jpg" />
const Title = () => <h2>Atlas</h2>
const Author = () => <h2>Lucinda Riley</h2>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BookList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

