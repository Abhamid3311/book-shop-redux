import BookCard from "@/components/BookCard";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";


export default function AllBooks() {
    const {data, error, isLoading } = useGetAllBooksQuery(undefined);


    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
       console.log(error)
    }

    // console.log(data.data)
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-5 py-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">Our Awesome Book Collections</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    data?.data?.map(book => <BookCard key={book._id} book={book} />)
                }
            </div>

        </div>
    )
}



