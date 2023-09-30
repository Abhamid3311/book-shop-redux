import { IBook } from '@/pages/AllBooks';
import { createSlice } from '@reduxjs/toolkit'

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