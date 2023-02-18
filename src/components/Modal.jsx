import classes from './Modal.module.css';

//Instead of using pros. you can use object destructuring to get the children prop directly.
//The NewPost component is passed as a child to the Modal component.
function Modal({ children, onClose }) {
    return (
    <>
    <div className={classes.backdrop} onClick={onClose} />
    <dialog open="true" className={classes.modal}>
        {children}
    </dialog>
    </>
    );
}

export default Modal;