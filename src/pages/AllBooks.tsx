import BookCard from "@/components/BookCard";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";

export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: number
    reviews: string[]
}

export const bookData:IBook[] = [
    {
        _id: "1",
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationDate: 1937,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Novel",
        publicationDate: 1960,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "3",
        title: "The Great Gatsby",
        author: "F.Scott Fitzgerald",
        genre: "Novel",
        publicationDate: 1925,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "4",
        title: "The Catcher in the Rye",
        author: "J.D.Salinger",
        genre: "Novel",
        publicationDate: 1951,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "5",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "fantasy",
        publicationDate: 1937,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "1",
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationDate: 1937,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Novel",
        publicationDate: 1960,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "3",
        title: "The Great Gatsby",
        author: "F.Scott Fitzgerald",
        genre: "Novel",
        publicationDate: 1925,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "4",
        title: "The Catcher in the Rye",
        author: "J.D.Salinger",
        genre: "Novel",
        publicationDate: 1951,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "5",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "fantasy",
        publicationDate: 1937,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "1",
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationDate: 1937,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Novel",
        publicationDate: 1960,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "3",
        title: "The Great Gatsby",
        author: "F.Scott Fitzgerald",
        genre: "Novel",
        publicationDate: 1925,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "4",
        title: "The Catcher in the Rye",
        author: "J.D.Salinger",
        genre: "Novel",
        publicationDate: 1951,
        reviews: ["Nice Books", "Best Books"]
    },
    {
        _id: "5",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "fantasy",
        publicationDate: 1937,
        reviews: ["Nice Books", "Best Books"]
    },

];








export default function AllBooks() {
    const {data, error, isLoading } = useGetAllBooksQuery(undefined);


    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
       console.log(error)
    }

    console.log(data.data)
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



