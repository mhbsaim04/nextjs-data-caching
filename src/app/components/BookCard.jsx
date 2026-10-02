'use client';

import Link from 'next/link';
import React, { use } from 'react';
import { UserContext } from '../contexts/UserContext';

const BookCard = ({ book }) => {

    const {id, title, author, price, category, description} = book;

    const user = use(UserContext);
    console.log('From Context In BookCard', user);
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-title">{author}</h3>
                <p>{category}</p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>

                    <Link href={`/books/${id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;