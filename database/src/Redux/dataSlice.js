import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    action: false,
    currentItem: null,
    userData: [],
    theme: false,
    error: null,
    id: null,
    spinner: "none",
    // ref : {
    //   current : null
    // }
  },
  reducers: {
    themeFunction: (state, action) => {
      state.theme = !state.theme;
    },
    readLoadFunction: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    readSuccessFunction: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    readFailureFunction: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addFunction: (state, action) => {
      state.action = false;
      state.currentItem = null;
    },
    postDataRequest: (state, action) => {
      state.loading = true;
      state.error = null
      // console.log('postreq', action)
    },
    postDataSuccess: (state, action) => {
      state.loading = false;
      state.userData.push(action.payload)

    },
    postDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    editFunctionData: (state, action) => {
      state.action = true;
      state.currentItem = action.payload;
      // state.ref.current = action.payload
    },
    editDataRequest: (state, action) => {
      state.loading = true;
    },
    editDataSuccess: (state, action) => {
      state.loading = false;
      state.userData = state.userData.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
    editDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteDataRequest: (state, action) => {
      state.loading = true;
    },
    deleteDataSuccess: (state, action) => {
      state.loading = false;
      state.userData = state.userData.filter((e) =>
        e.id !== action.payload
      );
    },
    deleteDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    spinnerFunction: (state, action) => {
      state.spinner = action.payload;
    }
  },
});

export const {
  themeFunction,
  readLoadFunction,
  readSuccessFunction,
  spinnerFunction,
  readFailureFunction,
  addFunction,
  postDataRequest,
  postDataSuccess,
  postDataFailure,
  deleteFunction,
  editFunctionData,
  editDataRequest,
  editDataSuccess,
  editDataFailure,
  deleteDataRequest,
  deleteDataSuccess,
  deleteDataFailure,
  refernce
} = dataSlice.actions;
export default dataSlice.reducer;
