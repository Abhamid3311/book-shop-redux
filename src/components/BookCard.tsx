import { IBook } from '@/pages/AllBooks';
import React from 'react'

export default function BookCard({ book }) {

    const { _id, title, author, publicationDate, genre } = book;

    const handleBookDetails = (id) => {
        console.log(id)
    };

    return (
        <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>

            <div className='my-2 text-sm lg:text-base'>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
                <p>Publication Date: {publicationDate}</p>
            </div>

            <button onClick={() => handleBookDetails(_id)} className='bg-primary text-white px-3 py-1 rounded-lg text-lg font-semibold hover:underline'>View Details</button>






        </div>

    )
}
