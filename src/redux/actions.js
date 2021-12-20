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

export function startRemovingPost(index, id) {
    // Specify both the post ID and comments to be removed..
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }

     return (dispatch) => {
        // Remove the comments and post from the database, then call removePost
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref('comments/' + postId).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}

            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })

            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
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