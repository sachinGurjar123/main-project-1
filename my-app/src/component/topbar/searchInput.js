import React from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

const SimpleSearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: "80vw", sm: "300px" },
        borderRadius: 20,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="search">
        {/* <SearchIcon /> */}
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default SimpleSearchBar;
