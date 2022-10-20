import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    currentMovie: null,
    currentPage: 1,
    totalPages: null,
    isLoading: false,
    moviesByGenre: []
    
}

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async (page, {rejectWithValue,  dispatch, getState}) => {
        try {
            const {data} = await moviesService.getMovies(page);
            dispatch(getMoviesWithDispatch(data))
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
)

const getGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async (_, {rejectedWithValue, dispatch, getState}) => {
        try {
            const {data} = await moviesService.getGenres();
            dispatch(getGenresWithDispatch(data));
        } catch (e) {
            rejectedWithValue(e.response.data);
        }
});

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        getMoviesWithDispatch: (state, action) => {
            state.movies = action.payload.results;
        },
        getGenresWithDispatch: (state, action) => {
            state.genres = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true;
                console.log(state.isLoading);
            })
            .addCase(getGenres.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
            }).addCase(getGenres.fulfilled, (state, action) => {
                state.isLoading = false;
                state.genres = action.payload;
        })
});

const {reducer: moviesReducer, actions: {getMoviesWithDispatch, getGenresWithDispatch}} = moviesSlice;

const moviesActions = {
    getMovies,
    getGenres
}

export {
    moviesReducer,
    moviesActions
}

