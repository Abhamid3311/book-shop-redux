import BookCard from "@/components/BookCard";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";
import { useNavigate } from "react-router-dom";


export default function AllBooks() {
    const { data, error, isLoading } = useGetAllBooksQuery(undefined);
    const navigate = useNavigate();


    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }

    const handleAddBookPage = () => {
        navigate('/add-book')
    };

    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-5 py-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">Our Awesome Book Collections</h1>

            {/* Filtering and Other Things */}
            <div>
                <div className="flex items-center justify-end mb-5">
                    <button onClick={() => handleAddBookPage()} className='bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-[5px] text-lg font-semibold '>Add New Book</button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    data?.data?.map(book => <BookCard key={book._id} book={book} />)
                }
            </div>



        </div>
    )
}



