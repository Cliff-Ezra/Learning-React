import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal'

function NewPost() {

  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/* //React will set up an event listener for the onChange event on the textarea element. Whenever the textarea changes, the changeBodyHandler function will be executed (target for the event listener). */}
          <textarea id="body" name="body" required rows={3} /> 
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  // formData.get("body");
  const postData = Object.fromEntries(formData); // {body: "some text", author: "some name"}
  await fetch("http://localhost:8085/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect('/');
}