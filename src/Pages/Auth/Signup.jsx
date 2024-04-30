import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const Signup = ({togglePanel}) => {
  const [formData, setFormData] = useState({
      fullname: "",
      email: "",
      phone: "",
      password: "",
      role: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center">Register</h1>
      <form className="space-y-2" action="" onSubmit={handleSubmit}>
      <TextField
          fullWidth
          label="Full Name"
          name="fullname"
          type="text"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter your full name..."
        />

<TextField
          fullWidth
          label="Phone Number"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number..."
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email..."
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            name="role"
            label="Role"
            onChange={handleChange}
            >
                <MenuItem value="ROLE_CUSTOMER">USER</MenuItem>
                <MenuItem value="ROLE_ADMIN">ADMIN</MenuItem>
            </Select>
        </FormControl>

        <Button
          fullWidth
          type="submit"
          className="customButton"
          sx={{ padding: ".9rem" }}
        >
          Signup
        </Button>
      </form>
      <div className="mt-5 flex items-center gap-2 justify-center">
        <span>Already have an account? </span>
        <Button
          onClick={togglePanel}
        >
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Signup;
