This is the example app from [Redux Essentials Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) on [redux.js.org](https://redux.js.org). For more information, please click the links.

## My Notes Here:

In the files `postsSlice.js` and `AddPostForm.js`, there're two different approaches for dealing with data (async login). One is put the logics in the `extraReducers` (in the `postsSlice.js`), the other is in the `AddPostForm.js`.

## Key Functions:

- use memoized selectors by calling `createSelector`;
- use async/await by calling `createAsyncThunk`;
- "normalization" - normalized state structure;

## TO-Dos:

- [ ] How `createEntityAdapter` works?
