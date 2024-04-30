import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, IconButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const SubmissionCard = () => {
    const handleAcceptDecline=(status)=>{
        console.log(status);
    }
  return (
    <div className="rounded-md bg-black p-5 flex items-center justify-between">
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <span>Github Link : </span>
          <div className="flex items-center gap-2 text-[#c24dd0]">
            <OpenInNewIcon />
            <a href="/" target="_blank" rel="noopener noreferrer">
              Follow Link
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p>Submission Time</p>
          <p className="text-gray-400">2024-06-28T12:37:38</p>
        </div>
      </div>
      <div>
        {true ? (
          <div className="flex gap-5">
            <div className="text-green-500">
                <IconButton color="success" onClick={() => handleAcceptDecline("ACCEPTED")}>
                    <CheckIcon/>
                </IconButton>
            </div>
            <div className="text-red-500">
                <IconButton color="error" onClick={() => handleAcceptDecline("DECLINED")}>
                    <CloseIcon/>
                </IconButton>
            </div>
          </div>
        ) : (
          <div>
            <Button
              color={true ? "success" : "error"}
              size="small"
              variant="outlined"
            >
              ACCEPTED
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionCard;
