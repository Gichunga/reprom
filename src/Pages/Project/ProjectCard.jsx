import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from "./UserList";
import SubmissionsList from "./SubmissionsList";
import EditProject from "./EditProject";

const ProjectCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const [openUserList, setOpenUserList] = useState(false);
    const handleCloseUserList=() => {
        setOpenUserList(false);
    }
    const handleOpenUserList=()=> {
        setOpenUserList(true);
        handleMenuClose();
    };

    const [openSubmissionsList, setOpenSubmissionsList] = useState(false);
    const handleCloseSubmissionsList=() => {
        setOpenSubmissionsList(false);
    }
    const handleOpenSubmissionList=()=> {
        setOpenSubmissionsList(true);
        handleMenuClose();
    };

    const [openEditProjectModal, setOpenEditProject] = useState(false);
    const handleCloseEditProjectModal=() => {
        setOpenEditProject(false);
    }
    const handleOpenEditProjectModal=()=> {
        setOpenEditProject(true);
        handleMenuClose();
    };
    const handleOpenDeleteProject = ()=> {
        handleMenuClose();
    };

    const role = "ROLE_ADMIN";

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src="https://images.unsplash.com/photo-1580014317999-e9f1936787a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBjYXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                Use latest frameworks and technologies to make this website
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[1, 1, 1, 1, 1].map((item) => (
                <span className="techStack py-1 px-5 rounded-full">
                  Angular
                </span>
              ))}
            </div>
          </div>
        </div>
        <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
        >
            <MoreVertIcon/>
        </IconButton>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        {
            role==="ROLE_ADMIN"?<>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                <MenuItem onClick={handleOpenEditProjectModal}>Edit</MenuItem>
                <MenuItem onClick={handleOpenDeleteProject}>Delete</MenuItem>
            </>
            :
            <></>
        }
      </Menu>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList}/>
      <SubmissionsList open={openSubmissionsList} handleClose={handleCloseSubmissionsList}/>
      <EditProject open={openEditProjectModal} handleClose={handleCloseEditProjectModal}/>
    </div>
  );
};

export default ProjectCard;
