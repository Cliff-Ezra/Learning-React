import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        //  We configure this request because by default fetch sends a get request 
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData), 
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Rule: Never mutate state directly 
        // Explanation: If you update state and the new state is based on the previous state, use the function form of setState
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
        {/* Method 3 (truthy & falsy value)*/}
        {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost 
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal>
        )}
        {posts.length > 0 && (
            <ul className={classes.posts}>
            {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h2>There are no posts yet.</h2>
                <p>Be the first to post something!</p>
            </div>
        )}
        </>
    )
}

export default PostsList;