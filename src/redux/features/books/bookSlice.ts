import { createSlice } from '@reduxjs/toolkit'


export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: number
    reviews: string[]
}

interface IBooks {
    books: IBook[];
    total: number;
}

const initialState: IBooks = {
    books: [],
    total: 0
};


const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        
    }

});


export default bookSlice.reducer;