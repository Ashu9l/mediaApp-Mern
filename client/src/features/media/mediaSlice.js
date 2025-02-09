import { createSlice } from '@reduxjs/toolkit';

const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    mediaList: [],
  },
  reducers: {
    setMedia: (state, action) => {
      state.mediaList = action.payload;
    },
    addMedia: (state, action) => {
      state.mediaList.push(action.payload);
    },
    removeMedia: (state, action) => {
      state.mediaList = state.mediaList.filter(media => media.id !== action.payload);
    },
  },
});

export const { setMedia, addMedia, removeMedia } = mediaSlice.actions;
export default mediaSlice.reducer; 