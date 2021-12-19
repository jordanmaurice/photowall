import _posts from '../data/posts';

const postReducer = function posts(state=_posts, action) {
    switch(action.type){
        case 'REMOVE_POST':
            return [...state.slice(0, action.i), ...state.slice(action.i + 1)]
        case 'ADD_POST':
            return [{"id": action.id, "imageLink": action.imageLink, "description": action.description},...state]
        default:
            return state
    }
}

export default postReducer