import * as React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import './navbar.css'

export default function BasicMenu() {
    return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton component={Link} to="/" size='large' edge='start' color='inherit' aria-label='logo'>
                <SportsSoccerIcon />
            </IconButton>
            <Typography align='left' variant='h6' component='div' sx={{ flexGrow: 1}}>
                <Link className='appTitleLink' to="/">Quiniela Qatar 2022</Link>
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button component={Link} to="/rules" color='inherit'>Rules</Button>
                <Button component={Link} to="/matches" color='inherit'>Matches</Button>
                <Button component={Link} to="/participants" color='inherit'>Participants</Button>
                <Button component={Link} to="/signin" color='inherit'>Sign-in/Login</Button>
            </Stack>
        </Toolbar>
    </AppBar>
    )
}