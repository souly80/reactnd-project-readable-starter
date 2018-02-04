import { combineReducers } from 'redux'
import {posts} from "./posts";
import {comments} from "./comments";
import {categories} from "./categories";
import {prefrences} from "./settings";

export default combineReducers({posts, comments, categories, prefrences});
