import BookCard from "@/components/BookCard";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"
import { Checkbox, Label } from "flowbite-react";
import { useEffect, useState, FormEvent, useRef } from "react";
import { IBook } from "@/redux/features/books/bookSlice";


export interface IBookOrginally {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews: string[]
}

export default function AllBooks() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedBook, setSearchedBook] = useState<IBookOrginally[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [yearSliderValue, setYearSliderValue] = useState<number>(2023);



    const { data, error, isLoading } = useGetAllBooksQuery(undefined);
    const navigate = useNavigate();

    //Serached Filter Functionality
    useEffect(() => {
        const filteredBooks = data?.data?.filter((book: IBook) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            return (
                book.title.toLowerCase().includes(lowerCaseQuery) ||
                book.genre.toLowerCase().includes(lowerCaseQuery) ||
                book.author.toLowerCase().includes(lowerCaseQuery) ||
                String(book.publicationDate).includes(lowerCaseQuery)
            );
        });
        setSearchedBook(filteredBooks)

    }, [data?.data, searchQuery]);


    //checkBox Filter Functinality
    /*  useEffect(() => {
         const filteredBooks = data?.data?.filter((book: IBook) => {
             const lowerCaseQuery = searchQuery?.toLowerCase();
             const hasMatchingGenre = selectedGenres.length === 0 || selectedGenres.includes(book?.genre);
             return (
                 hasMatchingGenre &&
                 (book.title.toLowerCase().includes(lowerCaseQuery) ||
                     book.author.toLowerCase().includes(lowerCaseQuery) ||
                     String(book.publicationDate).includes(lowerCaseQuery))
             );
         });
         setSearchedBook(filteredBooks);
     }, [data?.data, searchQuery, selectedGenres]); */


    useEffect(() => {
        const filteredBooks = data?.data?.filter((book: IBook) => {
            const lowerCaseQuery = searchQuery?.toLowerCase();
            const hasMatchingGenre = selectedGenres.length === 0 || selectedGenres.includes(book?.genre);
            const isWithinYearRange = parseInt(book.publicationDate) <= yearSliderValue;
            return (
                hasMatchingGenre &&
                isWithinYearRange &&
                (book.title.toLowerCase().includes(lowerCaseQuery) ||
                    book.author.toLowerCase().includes(lowerCaseQuery) ||
                    String(book.publicationDate).includes(lowerCaseQuery))
            );
        });
        setSearchedBook(filteredBooks);
    }, [data?.data, searchQuery, selectedGenres, yearSliderValue]);







    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }

    const handleAddBookPage = () => {
        navigate('/add-book')
    };


    //Handle Search Bar Filter
    const handleSearchFilter = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            setSearchQuery(inputRef.current.value);
        }
    };




    //Handle CheckBox Filter
    const handleCheckboxChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSelectedGenres((prevSelectedGenres) => {
            if (prevSelectedGenres.includes(value)) {
                return prevSelectedGenres.filter((genre) => genre !== value);
            } else {
                return [...prevSelectedGenres, value];
            }
        });
    };



    //Handle Year Filter Slider
    const handleYearSliderChange = (value: string) => {
        setYearSliderValue(parseInt(value));
    };


    console.log(yearSliderValue);




    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-5 py-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">Our Awesome Book Collections</h1>


            <div>
                <div className="flex  items-center justify-center lg:justify-end gap-5 mb-5">

                    {/*Search Filtering */}
                    <form onSubmit={handleSearchFilter}>
                        <div className="w-52 lg:w-[500px]">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    ref={inputRef}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary "
                                    placeholder="Search books..." required />

                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    <AiOutlineSearch className="text-2xl" />
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/*ADD NEW BOOK BTN */}
                    <button
                        onClick={() => handleAddBookPage()}
                        className='bg-green-500 hover:bg-green-700 text-white px-3 py-2.5 rounded-[5px] text-base font-semibold '>
                        Add New </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-2 w-full">
                {/*CHECK BOX FILTER */}

                <div className="w-full lg:w-1/5 bg-gray-200 px-2 pt-2 pb-10">
                    <h2 className="text-2xl font-bold text-center mb-10">Filter Books</h2>
                    <div>
                        <h2 className="text-lg  text-start">Genre</h2>
                        <div className="ml-2">


                            <div className="flex items-center gap-2">
                                {/* <Checkbox id="Novel" value={"Novel"} />*/}
                                <Checkbox
                                    id="Novel"
                                    value="Novel"
                                    checked={selectedGenres.includes("Novel")}
                                    onChange={handleCheckboxChange}
                                />
                                <Label htmlFor="Novel">Novel</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* <Checkbox id="Fantasy" value={"Fantasy"} /> */}
                                <Checkbox
                                    id="Fantasy"
                                    value="Fantasy"
                                    checked={selectedGenres.includes("Fantasy")}
                                    onChange={handleCheckboxChange}
                                />
                                <Label htmlFor="Fantasy">Fantasy</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="Sci-fi"
                                    value={"Sci-fi"}
                                    checked={selectedGenres.includes("Sci-fi")}
                                    onChange={handleCheckboxChange} />
                                <Label htmlFor="Sci-fi">Sci-fi</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="Fiction"
                                    checked={selectedGenres.includes("Fiction")}
                                    onChange={handleCheckboxChange}
                                    value={"Fiction"} />
                                <Label htmlFor="Fiction">Fiction</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id="Drama"
                                    onChange={handleCheckboxChange}
                                    value={"Drama"} />
                                <Label htmlFor="Drama">Drama</Label>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="mt-8">
                            <label htmlFor="year-slider" className="block text-base font-medium text-gray-700">
                                Publication Year Range
                            </label>
                            <input
                                type="range"
                                id="year-slider"
                                name="year-slider"
                                min="1900"
                                max="2023"
                                step="1"
                                value={yearSliderValue}
                                onChange={(e) => handleYearSliderChange(e.target.value)}
                                className="mt-1 block w-full"
                            />
                            <p className="text-sm mt-2 text-center">{yearSliderValue}</p>
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



