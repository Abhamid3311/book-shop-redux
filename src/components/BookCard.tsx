import { IBookCArd, addToWishList } from "@/redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { BsBookmarkCheckFill, BsFillBookmarkHeartFill } from "react-icons/bs"
import { useState } from "react";


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
    const [checked, setChecked] = useState(false)

    const dispatch = useAppDispatch();
    const location = useLocation();

    const { _id, title, author, publicationDate, genre } = book;

    const handleBookDetails = (id: string) => {
        console.log(id);
        navigate(`/book-details/${id}`)
    };

    const handleBookWishList = (book: IBookCArd) => {
        // console.log(book);
        dispatch(addToWishList(book));
        setChecked(!checked)
    };



    return (
        <div className="max-w-sm p-5 bg-white border border-gray-200 rounded-[5px] shadow hover:shadow-xl">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>

            <div className='my-2 text-sm lg:text-base'>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
                <p>Publication Date: {publicationDate}</p>
            </div>

            <div className="flex items-center gap-1">
                <button onClick={() => handleBookDetails(_id)} className='bg-primary text-white px-3 py-1 rounded-[5px] text-base font-semibold hover:underline'>View Details</button>
                {
                    location.pathname !== "/Wishlist" && <button onClick={() => handleBookWishList(book)} className='text-red-700 text-2xl'> {checked ? <BsBookmarkCheckFill /> : <BsFillBookmarkHeartFill />}</button>
                }

            </div>

        </div>

    )
}
