import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/features/books/bookApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

type FormData = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
}

export default function EditBook() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleBookQuery(id);
    const [updateBook, { isLoading: isUpdating, isError, isSuccess }] = useUpdateBookMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const [formData, setFormData] = useState<FormData>({
        title: '',
        author: '',
        genre: '',
        publicationDate: "",
    });

    useEffect(() => {
        if (data) {
            // Set the initial form data with the old values
            setFormData({
                title: data.title,
                author: data.author,
                genre: data.genre,
                publicationDate: data.publicationDate,
            });
        }
    }, [data])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    //Handle Update Form
    const onSubmit = (data: FormData) => {
        const updatedBookData = {
            ...data,
            ...formData,
        };

        updateBook({ ...updatedBookData, id }).unwrap()
            .then((response) => {
                console.log('Book Updated successfully', response);
                toast.success('Book Updated Successfully!');
            })
            .catch((error) => {
                console.error('Error updating book', error);
                toast.error('Book Update Failed!');
            });
    };





    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0'>
            <div className='max-w-4xl mx-auto bg-gray-200 p-5 m-5'>
                <h1 className="text-center font-bold text-xl">EDIT BOOK</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative my-3 ">
                        <input
                            type="text"
                            {...register("title")}
                            value={formData.title}
                            onChange={handleInputChange}
                            id="title" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="title" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Title</label>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="text"
                            {...register("author")}
                            value={formData.author}
                            onChange={handleInputChange}
                            id="Author" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="Author" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Author</label>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="text"
                            {...register("genre")}
                            value={formData.genre}
                            onChange={handleInputChange}
                            id="Genre" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="Genre" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Genre...</label>
                    </div>

                    <div className="relative my-3">
                        <input
                            type="number"
                            {...register("publicationDate")}
                            value={formData.publicationDate}
                            onChange={handleInputChange}
                            id="Date" required
                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="Date" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Enter Publication Date...</label>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            disabled={isUpdating}
                            className='bg-primary text-white px-3 py-1 rounded-[5px] text-base font-semibold '>{isUpdating ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
