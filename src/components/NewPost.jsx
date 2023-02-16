import classes from './NewPost.module.css';

function NewPost() {
    // The event parameter holds information about the event that triggered the function. In this case, the event is the change event on the textarea element.
    function changeBodyHandler(event) {
        console.log(event.target.value);
    }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* //React will set up an event listener for the onChange event on the textarea element. Whenever the textarea changes, the changeBodyHandler function will be executed (target for the event listener). */}
        <textarea id="body" required rows={3} onChange={changeBodyHandler} /> 
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;