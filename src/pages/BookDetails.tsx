import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetSingleBookQuery } from '@/redux/features/books/bookApi';
import { toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const { data: getBook, error, isLoading } = useGetSingleBookQuery(id);
    const [deleteBook, { isLoading: isDeleteing }] = useDeleteBookMutation();
    const navigate = useNavigate();


    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }

    //Navigate To Edit Page
    const handleEditPage = (id) => {
        navigate(`/edit-book/${id}`)
    }


    //Handle Book Delete
    const handleDeleteBook = (id) => {
        deleteBook(id).unwrap()
            .then((response) => {
                console.log('Book added successfully', response);
                toast.success("Delete Successfully!");
                navigate('/all-books')
            })
            .catch((error) => {
                console.error(error);
                toast.error("Delete Failed!")
            });
    };

    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0'>
            <div className='max-w-4xl mx-auto bg-gray-200 p-5 m-5'>
                <h1 className='text-2xl font-bold'>Title: {getBook?.title}</h1>
                <div>
                    <p>Author: {getBook?.author}</p>
                    <p>Genre: {getBook?.genre}</p>
                    <p>Publication Date: {getBook?.publicationDate}</p>

                    <div className="flex items-center gap-2 my-2">
                        <button
                            onClick={() => handleEditPage(getBook?._id)}
                            className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-[5px] text-base font-semibold '>Edit</button>

                        <button
                            onClick={() => handleDeleteBook(getBook?._id)}
                            disabled={isDeleteing}
                            className='bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-[5px] text-base font-semibold '>    {isDeleteing ? "Deleting..." : "Delete"}</button>
                    </div>
                </div>

                <div className='mt-5'>

                    <form>
                        <h1 className='font-bold'>Leave a comment</h1>
                        <div className="w-full" id="textarea">
                            <textarea
                                placeholder="Write Here..." required rows={2} className='w-full' />
                        </div>
                        <button className='bg-primary text-white px-3 py-1 rounded-[5px]  font-semibold '>Submit</button>

                    </form>


                    {/* Comment show section */}
                    <div className='mt-10'>
                        <h3 className='text-lg font-bold text-primary' >Comments:</h3>
                        {
                            getBook?.reviews?.map(rev => <p>
                                {rev}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
