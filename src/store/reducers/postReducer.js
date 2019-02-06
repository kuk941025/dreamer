const initState = {
    posts: [
        {id: '1', title: 'first asdfasdfasdfsdfsdfsdfsdf dssdsd', content: 'get cape'},
        {id: '2', title: 'second', content: 'wear cape'},
        {id: '3', title: 'third', content: 'fly'},
        {id: '4', title: 'fourth', content: 'fly again'}
    ]
}

const postReducer = (state = initState, action) => {
    console.log(action.type, action.post)
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post)
            return state;
        case 'CREATE_POST_ERROR':
            console.log('create post error', action.error)
            return state;
        default:
            return state;
    }
}

export default postReducer