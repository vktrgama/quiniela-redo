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
import { useApp } from '../../contexts/App';
import './sidenavbar.css'

function SideNavbar() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { appState } = useApp();

  return (
    <>
      <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)}>
      <List>
          {appState.navigation.map((nav, idx) => (
              <ListItem key={idx} onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                      <Button component={Link} to={nav.path} color='inherit'>
                          {nav.title}
                      </Button>
                  </ListItemText>
              </ListItem>
          ))}
      </List>
      </Drawer>
      <IconButton className='menuIcon' onClick={() => setOpenDrawer(!openDrawer)} edge='start' color='inherit' aria-label='menu'>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default SideNavbar;