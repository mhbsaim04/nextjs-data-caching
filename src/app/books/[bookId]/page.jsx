import React from 'react';


export const generateStaticParams = async()=>{
    const res = await fetch('http://localhost:3000/books');
    const books = await res.json();

    return books.map(book => ({bookId: book.id}))
}

const BookDetailPage = async({params}) => {

    const {bookId} = await params;

    const res = await fetch(`http://localhost:3000/books/${bookId}`)
    const book = await res.json();

    return (
        <div>
            <h2>Book Details</h2>
            <h3>Title: {book.title} </h3>
            <h3>Description: {book.description} </h3>
            <h3>Category: {book.category} </h3>
            <h3>Stock: {book.stock} </h3>
        </div>
    );
};

export default BookDetailPage;