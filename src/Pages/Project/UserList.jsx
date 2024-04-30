import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

export default function UserList({ handleClose, open }) {
  const users = [1,1,1,1];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {users.map((item,index) => (
            <>
              <div className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://pbs.twimg.com/profile_images/1771480466043920384/1ST4qgpV_400x400.jpg"></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      secondary="code_with_steve"
                      primary={"Code with Steve"}
                    ></ListItemText>
                  </ListItem>
                </div>
                <div>
                  <Button className="customButton">select</Button>
                </div>
              </div>
              {index!==users.length-1 && <Divider variant="inset" />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
