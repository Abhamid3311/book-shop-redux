import { useNavigate } from "react-router-dom";


export interface IBookCards {
    book: {
        _id: string;
        title: string;
        author: string;
        publicationDate: string;
        genre: string;
    };
}



export default function BookCard({ book }: IBookCards) {
    const navigate = useNavigate();

    const { _id, title, author, publicationDate, genre } = book;

    const handleBookDetails = (id: string) => {
        console.log(id);
        navigate(`/book-details/${id}`)
    };

    return (
        <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-[5px] shadow hover:shadow-xl">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
            </a>

            <div className='my-2 text-sm lg:text-base'>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
                <p>Publication Date: {publicationDate}</p>
            </div>

            <button onClick={() => handleBookDetails(_id)} className='bg-primary text-white px-3 py-1 rounded-[5px] text-base font-semibold hover:underline'>View Details</button>

        </div>

    )
}
