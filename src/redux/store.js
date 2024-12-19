import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./PostsState";

const reducer = combineReducers({ postsReducer });

const store = configureStore({ reducer });

export default store;
