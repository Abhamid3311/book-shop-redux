import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetSingleBookQuery } from '@/redux/features/books/bookApi';
import { toast } from 'react-toastify';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from "react-icons/hi"

import ReviewDEtails from '@/components/ReviewDEtails';
import { useAppSelector } from '@/redux/hooks';


const BookDetails = () => {
    const { id = '' } = useParams();
    const { data: getBook, error, isLoading } = useGetSingleBookQuery(id);
    const { user }= useAppSelector(state => state.user);
    const [deleteBook, { isLoading: isDeleteing }] = useDeleteBookMutation();
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };


    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }

    //Navigate To Edit Page
    const handleEditPage = (id: number) => {
        navigate(`/edit-book/${id}`)
    }


    //Handle Book Delete
    const handleDeleteBook = (id: number) => {
        deleteBook(id).unwrap()
            .then((response) => {
                console.log('Book added successfully', response);
                toast.success("Deleted Successfully!");
                navigate('/all-books')
            })
            .catch((error) => {
                console.error(error);
                toast.error("Delete Failed!")
            });
    };

    console.log(user)

    return (
        <>

            <div className='max-w-7xl mx-auto px-5 lg:px-0'>
                <div className='max-w-4xl mx-auto bg-gray-200 p-5 m-5'>
                    <h1 className='text-2xl font-bold'>Title: {getBook?.title}</h1>
                    <div>
                        <p>Author: {getBook?.author}</p>
                        <p>Genre: {getBook?.genre}</p>
                        <p>Publication Date: {getBook?.publicationDate}</p>

                        {
                            user.email && <div className="flex items-center gap-2 my-2">
                                <button
                                    onClick={() => handleEditPage(getBook?._id)}
                                    className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-[5px] text-base font-semibold '>Edit</button>

                                <button
                                    onClick={() => {
                                        props.setOpenModal('pop-up')
                                    }}
                                    disabled={isDeleteing}
                                    className='bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-[5px] text-base font-semibold '>    {isDeleteing ? "Deleting..." : "Delete"}</button>
                            </div>
                        }


                    </div>

                    <div className='mt-5'>

                        {/* Comment show section */}
                        <ReviewDEtails bookId={id} user={user} />

                    </div>
                </div>
            </div>


            {/* Delete Book Modal */}

            <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this Book?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => handleDeleteBook(getBook?._id)}>
                                Yes, I'm sure
                            </Button>
                            <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default BookDetails;



