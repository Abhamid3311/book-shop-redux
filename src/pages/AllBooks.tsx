import BookCard from "@/components/BookCard";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"
import { Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";

export default function AllBooks() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedBook, setSearchedBook] = useState([]);
    const { data, error, isLoading } = useGetAllBooksQuery(undefined);
    const navigate = useNavigate();

    //Serached Filter Functionality
    useEffect(() => {
        const filteredBooks = data?.data?.filter((book) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            return (
                book.title.toLowerCase().includes(lowerCaseQuery) ||
                book.genre.toLowerCase().includes(lowerCaseQuery) ||
                book.author.toLowerCase().includes(lowerCaseQuery) ||
                String(book.publicationDate).includes(lowerCaseQuery)
            );
        });
        setSearchedBook(filteredBooks)

    }, [data?.data, searchQuery])



    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }

    const handleAddBookPage = () => {
        navigate('/add-book')
    };

    const handleSearchFilter = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };

    console.log(searchedBook)





    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-5 py-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">Our Awesome Book Collections</h1>

            {/* Filtering and Other Things */}
            <div>
                <div className="flex  items-center justify-center lg:justify-end gap-5 mb-5">
                    <form >
                        <div className="w-52 lg:w-[500px]">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary "
                                    placeholder="Search books..." required />

                                <button disabled  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    <AiOutlineSearch className="text-2xl" />
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>


                    <button
                        onClick={() => handleAddBookPage()}
                        className='bg-green-500 hover:bg-green-700 text-white px-3 py-2.5 rounded-[5px] text-base font-semibold '>
                        Add New </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-2 w-full">

                <div className="w-full lg:w-1/5">
                    <h2 className="text-2xl font-bold text-start">Genre</h2>
                    <div className="ml-2">
                        <div className="flex items-center gap-2">
                            <Checkbox id="Novel" value={"Novel"} /> <Label htmlFor="Novel">Novel</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="Fantasy" value={"Fantasy"} /> <Label htmlFor="Fantasy">Fantasy</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="Sci-fi" value={"Sci-fi"} /> <Label htmlFor="Sci-fi">Sci-fi</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="Fiction" value={"Fiction"} /> <Label htmlFor="Fiction">Fiction</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="Drama" value={"Drama"} /> <Label htmlFor="Drama">Drama</Label>
                        </div>
                    </div>
                </div>



                {/* Fetch ALL DATA */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-4/5">
                    {
                        // data?.data?.map(book => <BookCard key={book._id} book={book} />)
                        searchedBook?.map(book => <BookCard key={book._id} book={book} />)
                    }
                </div>
            </div>
        </div>
    )
}



