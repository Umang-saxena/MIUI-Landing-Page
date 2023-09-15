import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {  Mail } from "@mui/icons-material";
import BackHandIcon from "@mui/icons-material/BackHand";

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


const Navbar = () => {

  const [toggleOpen, setToggleOpen] = useState(false);
  const [input, setInput] =useState("")

  // Functions Used
  const toggleClick=()=>{
    setToggleOpen(!toggleOpen);
  }

  const handleChange=(e)=>{
    setInput(e.target.value);
  }

  
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          US
        </Typography>
        <BackHandIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase value={input}  onChange={handleChange} placeholder="Search..." />{" "}
        </Search>
        <Icons>
          <Badge badgeContent={0} color="success">
            <Mail />
          </Badge>
          <Badge badgeContent={0} color="success">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={toggleClick}
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://www.dpforwhatsapp.in/img/dpfotwhatsapp/12.webp"
          />
        </Icons>
        <UserIcons onClick={toggleClick} >
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://www.dpforwhatsapp.in/img/dpfotwhatsapp/12.webp"
          />
          <Typography variant="span">Umang</Typography>
        </UserIcons>
      </StyledToolBar>
      {/* Making Menu Button for Small Devices */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={toggleOpen}
        onClose={toggleClick}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  );
};

export default Navbar;
