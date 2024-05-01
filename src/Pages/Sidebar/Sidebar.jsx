import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";
import CreateProjectForm from "../Project/CreateProject";
import { useLocation, useNavigate } from "react-router-dom";

const menu = [
  { name: "HOME", value: "HOME", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "NOT ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "Create New Project", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("HOME");

  const handleMenuItemChange = (item) => {
    const updatedParams = new URLSearchParams(location.search)
    setActiveMenu(item.name);
    if (item.name === "Create New Project") {
      handleOpenCreateProjectForm();
    } else if (item.name === "HOME") {
      updatedParams.delete("filter"); // delete filter
      const queryString = updatedParams.toString(); // check if there is any other query parameter in the url
      // if present, write the pathname and append the query string. Else, just the pathname
      const updatedPath = queryString?`${location.pathname}?${queryString}`:location.pathname;
      navigate(updatedPath);
    } else{
      updatedParams.set("filter", item.value)
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }
  };

  const handleLogout = () => {
    console.log("message: logout");
  };

  const [openCreateProjectForm, setOpenCreateProjectForm] = useState(false);
  const handleCloseCreateProjectForm = () => {
    setOpenCreateProjectForm(false);
  };
  const handleOpenCreateProjectForm = () => {
    setOpenCreateProjectForm(true);
  };

  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <div className="flex justify-center">
            <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              src="https://pbs.twimg.com/profile_images/1771480466043920384/1ST4qgpV_400x400.jpg"
              className="border-2 border-[#c24dd0]"
            />
          </div>

          {menu
            .filter((item) => item.role.includes(role))
            .map((item) => (
              <p
                className={`py-2 px-4 rounded-full cursor-pointer text-center ${
                  activeMenu === item.name ? "activeMenuItem" : "menuItem"
                }`}
                onClick={() => handleMenuItemChange(item)}
              >
                {item.name}
              </p>
            ))}

          <Button
            sx={{ padding: ".7rem", borderRadius: "2rem" }}
            fullWidth
            className="logoutButton"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </div>
      <CreateProjectForm
        open={openCreateProjectForm}
        handleClose={handleCloseCreateProjectForm}
      />
    </>
  );
};

export default Sidebar;
