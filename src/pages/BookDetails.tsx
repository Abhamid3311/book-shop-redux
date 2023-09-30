import { useParams } from 'react-router-dom';
import { useGetSingleBookQuery } from '@/redux/features/books/bookApi';

const BookDetails = () => {
    const { id } = useParams();

    const { data: getBook, error, isLoading } = useGetSingleBookQuery(id);


    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }

    console.log(getBook)

    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0'>
            <div className='max-w-4xl mx-auto bg-gray-200 p-5 m-5'>
                <h1 className='text-2xl font-bold'>Title: {getBook?.title}</h1>
                <div>
                    <p>Author: {getBook?.author}</p>
                    <p>Genre: {getBook?.genre}</p>
                    <p>Publication Date: {getBook?.publicationDate}</p>
                </div>

                <div className='mt-5'>

                    <form>
                        <h1 className='font-bold'>Leave a comment</h1>
                        <div className="w-full" id="textarea">
                            <textarea
                                placeholder="Write Here..." required rows={2} className='w-full' />
                        </div>
                        <button className='bg-primary text-white px-3 py-1 rounded-lg text-lg font-semibold '>Submit</button>

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
