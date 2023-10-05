import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export interface IBookCArd {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
}

interface IWishListBook {
    books: IBookCArd[];
    total: number;
}
const initialState: IWishListBook = {
    books: [],
    total: 0,
};


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<IBookCArd>) => {
            const existings = state.books.find(book => book._id === action.payload._id);
            if (existings) {
                toast.error("This Book is already Exist!");
                return
            } else {
                state.books.push({ ...action.payload });
                state.total += 1;
                toast.success("Added to Wishlist")
            }
        }
    }
});


export const { addToWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;