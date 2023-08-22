import React from 'react'; 
import ReactDom from "react-dom";
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} ></div>
};

const Modaloverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = (props) =>  {
    return <React.Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement )}
        {ReactDom.createPortal(<Modaloverlay>{props.children}</Modaloverlay>, portalElement )}
    </React.Fragment>
};

export default Modal;