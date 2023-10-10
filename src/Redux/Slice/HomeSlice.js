import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import API from "../../Service/API";

const initialState = {
    galleryList: [],
    loading: true
}

const getGalleryList = createAsyncThunk(
    "home/fetchGallery",
    async () => {
      const response = await API.get('/list');
      return response.data;
    }
);

export const HomeSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getGalleryList.pending, (state) => {
            state.loading = true;
        })
        .addCase(getGalleryList.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(getGalleryList.rejected, (state, action) => {
            state.loading = false;
            state.list = [];
            state.error = action.error.message;
        });
    }
})

export default HomeSlice.reducer
export { getGalleryList }