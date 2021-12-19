export function removePost(i) {
    return {
        type: 'REMOVE_POST',
        i
    }
}

export function addPost(id, imageLink, description) {
    return {
        type: 'ADD_POST',
        id,
        imageLink,
        description
    }
}