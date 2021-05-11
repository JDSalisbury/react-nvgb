import Service from "./service"

export const getBlogs = () => dispatch => {
    Service.readList(dispatch, 'https://jsonplaceholder.typicode.com/posts', {
        init: "GET_BLOGS",
        success: "GET_BLOGS_SUCCESS",
        error: "GET_BLOGS_FAILED"
    })
}