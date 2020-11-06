import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Mad at Debbie",
    content: "Do NOT run a job in a job!",
    user: "1",
    date: "2020-11-06T01:27:28.176Z",
  },
  {
    id: "2",
    title: "At the Presentation",
    content:
      "Three months later, it is the Met's annual ball, and we'll rob it.",
    user: "0",
    date: "2020-11-06T02:27:28.176Z",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
    postUpdated: (state, action) => {
      // action: { type: "posts/postUpdated", payload: { id, title, content } }
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
