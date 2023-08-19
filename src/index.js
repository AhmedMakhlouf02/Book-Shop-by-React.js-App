import React from "react";
import { createRoot } from 'react-dom/client'
import { books } from "./books";
import Book from "./Book";
import './index.css';

// setup vars



// const names= ['Ahmed','Peter', 'Ali']
// const newNames = names.map((name)=>{
//  return  <h1>{name}</h1>
// })

const BookList = () => {
  return (
    <>
      <Header />
      <section className="booklist">
        {books.map((book)=>{
          return (
            <Book key={book.id} {...book} />
          )
        })}
      </section>  
    </>
  )
}


const Header = () => {
  return (
    <header>
  <div className="logo">
    <h1>Book Shop</h1>
  </div>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/books">Books</a></li>
      <li><a href="/authors">Authors</a></li>
      <li><a href="/cart">Cart</a></li>
    </ul>
  </nav>
</header>
  );
};



createRoot(document.getElementById('root')).render(<BookList/>);


export default BookList