import _posts from '../data/posts';
import {combineReducers} from 'redux'

const posts = function posts(state=_posts, action) {
    switch(action.type){
        case 'REMOVE_POST':
            return [...state.slice(0, action.i), ...state.slice(action.i + 1)]
        case 'ADD_POST':
            return [{"id": action.id, "imageLink": action.imageLink, "description": action.description},...state]
        default:
            return state
    }
}

const comments = function comments(state={}, action) {
    switch(action.type){
        case 'ADD_COMMENT':
            console.log(action.postId)
            if (!state[action.postId]){
                return {...state, [action.postId]:[action.comment]}
            } else {
                return {...state, [action.postId]:[...state[action.postId], action.comment]}
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({posts, comments})

export default rootReducer