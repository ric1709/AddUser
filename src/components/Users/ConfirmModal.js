import React, { Fragment } from 'react';
import Card from '../UI/Card';
import classes from './ConfirmModal.module.css'
import Button from '../UI/Button';

function ConfirmModal(props) {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onCancel} />
            <Card className={classes.modal} >
            <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onCancel}>Cancel</Button>
                    <Button onClick={props.onConfirm}>Confirm</Button>
                </footer>
            </Card>
            
        </Fragment>
    );
}

export default ConfirmModal;