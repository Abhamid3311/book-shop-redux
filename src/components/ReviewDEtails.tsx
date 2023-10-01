import { useAddCommentMutation, useGetCommentsQuery } from "@/redux/features/books/bookApi";
import { FaUserCircle } from "react-icons/fa";
import { useState } from 'react';
import { toast } from 'react-toastify';

const ReviewDEtails = ({ bookId }) => {
    const [comment, setComment] = useState('')
    const [postComment, { isLoading: isSending, isError, isSuccess }] = useAddCommentMutation();
    const { data } = useGetCommentsQuery(bookId);
    console.log(data);

    console.log(isError, isSuccess);


    //Handle Comment Form
    const handleCommentForm = (e) => {
        e.preventDefault();

        const data = {
            name: "user1",
            comment: comment
        }
        console.log({ bookId, data })

        postComment({ bookId, data })
            .unwrap()
            .then((response) => {
                console.log('Comment added successfully', response);
                toast.success("Comment Added Successfully!");
                e.target.reset()
            })
            .catch((error) => {
                console.error('Error adding Comment', error);
                toast.error("Comment Added Failed!")
            });
    };


    return (
        <div>
            <form onSubmit={handleCommentForm}>
                <h1 className='font-bold'>Leave a comment</h1>
                <div className="w-full" id="textarea">
                    <textarea
                        placeholder="Write Here..."
                        onChange={(e) => setComment(e.target.value)}
                        required rows={2}
                        className='w-full' />
                </div>
                <button disabled={isSending} type='submit' className='bg-primary text-white px-3 py-1 rounded-[5px]  font-semibold '>{isSending ? "Submitting..." : "Submit"}</button>
            </form>

            <div className='mt-10'>
                <h3 className='text-lg font-bold text-primary' >Comments:</h3>
                {
                    data?.length !== 0 && data?.map(rev => <div className='flex items-center gap-2 '>
                        <FaUserCircle className="text-2xl " />
                        <div>
                            <p className="font-bold " >{rev.name}</p>
                            <p className='text-sm lg:text-base '>{rev.comment}</p>
                        </div>
                    </div>)
                }

                {data?.length === 0 && null}
            </div>
        </div>

    )
};


export default ReviewDEtails;