import {database} from '../database/config'

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
} 

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []

            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
            
            
        }).catch((error) => {
            console.log(error)
        })
    }
} 

export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}
export function removePost(i) {
    return {
        type: 'REMOVE_POST',
        i
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post,
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}