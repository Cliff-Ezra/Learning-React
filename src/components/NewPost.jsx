import classes from './NewPost.module.css';

function NewPost(props) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* //React will set up an event listener for the onChange event on the textarea element. Whenever the textarea changes, the changeBodyHandler function will be executed (target for the event listener). */}
        <textarea id="body" required rows={3} onChange={props.onBodyChange} /> 
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;