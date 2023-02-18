import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    // Method 2
    // let modalContent;
    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost 
    //                 onBodyChange={bodyChangeHandler} 
    //                 onAuthorChange={authorChangeHandler} 
    //             />
    //         </Modal>
    //     );
    // }

    return (
        <>
        {/* Method 1 */}
        {/* {modalIsVisible ? (
            <Modal onClose={hideModalHandler}>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} 
                />
            </Modal>
        ) : false} */}

        {/* Method 2  continuation*/}
        {/* {modalContent} */}

        {/* Method 3 (truthy & falsy value)*/}
        {isPosting && (
            <Modal onClose={onStopPosting}>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} 
                />
            </Modal>
        )}

        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />  
            <Post author="Manuel" body="I'm learning it as well" />
        </ul>
        </>
    )
}

export default PostsList;

