import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost() {
    // This is a React Hook. It allows you to use state in functional components. useState() returns an array with two elements. The first element is the current state, the second element is a function that allows you to update the state. The argument you pass to useState() is the initial state. In this case, the initial state is an empty string.

    // The 2 values being destructured: [currentValue, setCurrentValue]
    // The first Value is the current state, the second is the function that allows you to update the state 
    const [enteredBody, setEnteredBody] = useState(''); 

    // The event parameter holds information about the event that triggered the function. In this case, the event is the change event on the textarea element.
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* //React will set up an event listener for the onChange event on the textarea element. Whenever the textarea changes, the changeBodyHandler function will be executed (target for the event listener). */}
        <textarea id="body" required rows={3} onChange={changeBodyHandler} /> 
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;