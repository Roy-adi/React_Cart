import { createSlice  ,createAsyncThunk  } from "@reduxjs/toolkit"
import axios from 'axios'

export const STATUS =Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const ProductSlice = createSlice({

    name: 'product',
    initialState: {
        data:[],
        status:STATUS.IDLE
    },
   
    extraReducers:(builder)=>{
          builder.addCase(fetchProducts.pending, (state,action)=>{
            state.status = STATUS.LOADING;
        })
            
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.status=STATUS.IDLE
            })
        builder .addCase(fetchProducts.rejected,(state, action)=>{
                state.status=STATUS.ERROR;
            })
    }
    
})

export default ProductSlice.reducer;


export const fetchProducts = createAsyncThunk ('fetch', async()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
} )