import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      >
      
      <List >
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#market" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile" >
              <ListItemIcon>
              <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  );
};

export default SideBar;
