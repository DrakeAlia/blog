import { combineReducers } from 'redux';
import postsReducer from './postsReucer.js';

export default combineReducers({
    posts: postsReducer
});