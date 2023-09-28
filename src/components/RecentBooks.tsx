import { bookData } from '@/pages/AllBooks'
import React from 'react'
import BookCard from './BookCard'

export default function RecentBooks() {
    return (
        <div className='bg-gray-200'>
            <div className="max-w-7xl mx-auto px-5 lg:px-5 py-10 ">
                <h1 className="text-2xl lg:text-4xl font-bold text-start mb-10">Our Recent Books</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        bookData.map(book => <BookCard key={book._id} book={book} />).slice(0, 10)
                    }
                </div>

            </div>
        </div>
    )
}
