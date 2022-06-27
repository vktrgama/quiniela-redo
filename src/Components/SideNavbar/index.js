import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";
import './sidenavbar.css'

function SideNavbar() {
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)}>
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Button component={Link} to="/" color='inherit'>Home</Button>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Button component={Link} to="/rules" color='inherit'>Rules</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Button component={Link} to="/matches" color='inherit'>Matches</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Button component={Link} to="/participants" color='inherit'>Participants</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
                <Button component={Link} to="/signin" color='inherit'>Sign-in/Login</Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton className='menuIcon' onClick={() => setOpenDrawer(!openDrawer)} edge='start' color='inherit' aria-label='menu'>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default SideNavbar;