import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Face, Mail } from "@mui/icons-material";
import BackHandIcon from "@mui/icons-material/BackHand";

const Navbar = () => {
  // Styling for our custom toolbar
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  // Search Box
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  // Icons bar
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  }));

  const UserIcons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "10px",
    [theme.breakpoints.down("sm")]:{
      display:"flex"
    }

  }));

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          US
        </Typography>
        <BackHandIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />{" "}
        </Search>
        <Icons>
          <Badge badgeContent={0} color="success">
            <Mail />
          </Badge>
          <Badge badgeContent={0} color="success">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://www.dpforwhatsapp.in/img/dpfotwhatsapp/12.webp"
          />
        </Icons>
        <UserIcons>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://www.dpforwhatsapp.in/img/dpfotwhatsapp/12.webp"
          />
          <Typography variant="span">Umang</Typography>
        </UserIcons>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
