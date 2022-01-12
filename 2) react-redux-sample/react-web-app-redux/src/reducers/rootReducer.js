
const initState = {
    posts: [
        { id: 1, title: 'Başlık 1', body: 'body 1' },
        { id: 2, title: 'Başlık 2', body: 'body 2' },
        { id: 3, title: 'Başlık 3', body: 'body 3' },
        { id: 4, title: 'Başlık 4', body: 'body 4' }
    ]
}

const rootRecucer = (state = initState, action) => {
    if (action.type === "DELETE") {
        let yeniPosts = state.posts.filter(post => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts:yeniPosts
        }
    }

    return state;
}

export default rootRecucer;