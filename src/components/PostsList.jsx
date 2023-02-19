import { useState, useEffect } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    //UseEffect is a hook that allows you to run code when a component is rendered for the first time or when a component is re-rendered
    // It accepts 2 arguments: a function and an array of dependencies
    // The function returns a cleanup function that runs before the next time the effect runs (it should not return a promise)
    // The array of dependencies is optional. If you pass an empty array, the effect will only run once when the component is rendered for the first time
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8085/posts');
            const resData = await response.json();
            setPosts(resData.posts);
        }
        
        fetchPosts();
    }, []);


    function addPostHandler(postData) {
        //  We configure this request because by default fetch sends a get request 
        fetch('http://localhost:8085/posts', {
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