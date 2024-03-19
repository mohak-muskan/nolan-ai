import { configureStore } from '@reduxjs/toolkit'
import ResponseSlice from './ResponseSlice';

const Store = configureStore({
    reducer:{
        response:ResponseSlice,
    }
})

export default Store;