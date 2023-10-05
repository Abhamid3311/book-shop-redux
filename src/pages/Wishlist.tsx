import BookCard from "@/components/BookCard";
import { useAppSelector } from "@/redux/hooks";

const Wishlist = () => {
    const { books } = useAppSelector(state => state.wishlist);
    // console.log(books)
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-5 py-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">My Wishlist books:</h2>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full ">
                {
                    books?.length !== 0 ? books.map(book => <BookCard key={book._id} book={book} />) : <p>No Wishlist Avaiable</p>
                }
            </div>



        </div>
    );
};

export default Wishlist;