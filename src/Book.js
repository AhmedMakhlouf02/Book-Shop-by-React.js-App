import React from 'react';

const Book = (props) => {
  const { image,title,author } = props;
  const logAuthor =(author)=>{
    console.log(author);
  }
  const logTitle =(title)=>{
    console.log(title);
  }
  return (<>
  <article className="book">
    <img src={image} alt=""/> 
    <h1 onClick={()=> logTitle(title)}>{title}</h1>
    <h4 onClick={()=> logAuthor(author)}>{author}</h4>
  </article>
  </>)
};

export default Book;