import React, { useEffect } from 'react';
import './home.css'
import { Content } from '../../components'

import { connect } from "react-redux";
import { getBlogs } from "../../redux/actions/blogs.action";


function Home({ blogs, getBlogs }) {
    useEffect(() => getBlogs(), [getBlogs])
    return (
        <Content>
            <div>Home Comp</div>
            {blogs.blogs.map(blog => (
                <p key={blog.id}>{blog.title}</p>
            ))}
        </Content>
    );
}

export default connect(
    ({ blogs }) => ({ blogs }),
    { getBlogs }
)(Home);