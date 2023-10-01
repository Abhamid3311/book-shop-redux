import { useAddBookMutation } from "@/redux/features/books/bookApi";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

type FormData = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
}

export default function AddBook() {
    const [postBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();


    console.log(isError, isSuccess);

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        postBook(data).unwrap()
            .then((response) => {
                console.log('Book added successfully', response);
                toast.success("Book Added Successfully!")
                reset();
            })
            .catch((error) => {
                console.error('Error adding book', error);
                toast.error("Book Added Failed!")
            });

    });


    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0'>
            <div className='max-w-4xl mx-auto bg-gray-200 p-5 m-5'>
                <h1 className="text-center font-bold text-xl">ADD NEW BOOK</h1>

                <form onSubmit={onSubmit}>
                    <div className="relative my-3 ">
                        <input
                            type="text"
                            {...register("title")}
                            id="title" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="title" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Title</label>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="text"
                            {...register("author")}
                            id="Author" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="Author" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Author</label>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="text"
                            {...register("genre")}
                            id="Genre" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="Genre" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Genre...</label>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="number"
                            {...register("publicationDate")}
                            id="Date" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="Date" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Publication Date...</label>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className='bg-primary text-white px-3 py-1 rounded-[5px] text-base font-semibold '>{isLoading ? "Adding..." : "Add"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
