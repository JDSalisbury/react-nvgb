import React from 'react';
import '../static/layout.css'
function Content(props) {
    return (
        <div className='content'>{props.children}</div>
    );
}

export default Content;