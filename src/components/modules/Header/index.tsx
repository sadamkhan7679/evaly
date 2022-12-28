import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-body mt-10 shadow-none">
        <Toolbar className="px-0 flex-col items-start justify-between md:flex-row">
          <Typography
            variant="h6"
            className="text-secondary mb-3 md:mb-0"
            sx={{ flexGrow: 1 }}
          >
            Travel And Tours
          </Typography>
          <Box>
            <TextField
              id="outlined-search"
              type="search"
              variant="outlined"
              size="small"
              className="mb-3 md:mb-0"
            />

            <Button
              color="secondary"
              variant="contained"
              className="h-10 mr-10"
            >
              <SearchIcon />
            </Button>

            <Button color="primary" variant="contained" className="h-10">
              View All
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
