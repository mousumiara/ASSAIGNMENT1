import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import Userform from "./Userform.js";
import Displaytable from "./Displaytable.js";
import { Route} from 'react-router-dom';
import Edit from './Edit.js';



export default function FormDialog() {
  //use useState hook
  const [open, setOpen] = React.useState(false);
  //Top up Window
  const handleClickOpen = () => {
    setOpen(true);
  };

  //Close Button in Topup Window
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create User
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">User Details</DialogTitle>
            <DialogContent>
              <Userform/>
            </DialogContent>
            
            <DialogActions>
                <Button className="btn" onClick={handleClose} color="primary">
                  Close
                </Button>
            </DialogActions>
        </Dialog>
     <Displaytable/>
     <Route path ={`/edit:id`}  component = {Edit} />
    </div>
  );
}

