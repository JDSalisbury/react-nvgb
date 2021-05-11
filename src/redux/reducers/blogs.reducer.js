const initialState = {
    blogs: [],
    isLoading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_BLOGS":
            return {
                ...state,
                isLoading: true
            }
        case "GET_BLOGS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                blogs: action.data
            }
        case 'GET_BLOGS_FAILED':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}