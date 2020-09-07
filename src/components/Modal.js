import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../css/Modal.css';

const AlertDialog = ({ onClick, onClose, open }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle className='modal-title' id='alert-dialog-title'>
          <p> Delete Comment </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <p> Are you sure you want to delete this comment?</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={onClose}>Cancel</button>
          <button className='btn-delete' onClick={onClick}>
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
