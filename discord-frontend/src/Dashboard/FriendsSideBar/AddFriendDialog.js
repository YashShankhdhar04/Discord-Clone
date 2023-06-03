import React, { useEffect, useState } from "react";
import { validateMail } from "../../shared/utils/validators";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import InputWithLabel from "../../shared/Components/InputWithLabel";
import CustomPrimaryButton from "../../shared/Components/CustomPrimayButton";

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {},
  }) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");
  
    const handleSendInvitation = () => {
      // send friend request to server
    };
  
    const handleCloseDialog = () => {
      closeDialogHandler();
      setMail("");
    };
  
    useEffect(() => {
      setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);
  
    return (
      <div>
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>
            <Typography>Invite a Friend</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography>
                Enter e-mail address of friend which you would like to invite
              </Typography>
            </DialogContentText>
            <InputWithLabel
              label="Mail"
              type="text"
              value={mail}
              setValue={setMail}
              placeholder="Enter mail address"
            />
          </DialogContent>
          <DialogActions>
            <CustomPrimaryButton
              onClick={handleSendInvitation}
              disabled={!isFormValid}
              label="Send"
              additionalStyles={{
                marginLeft: "15px",
                marginRight: "15px",
                marginBottom: "10px",
              }}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  
  export default AddFriendDialog;