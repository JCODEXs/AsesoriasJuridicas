"use client"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React from 'react';
import Link from 'next/link';
import classes from './main-navigation.module.css';
import LogButton from '../logout/userButton';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SignOut from '../logout/logOutButton';
import { SignInButton,useAuth,SignedOut,SignedIn } from "@clerk/nextjs";
export default function FadeMenu() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {!isWideScreen?<div >
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{fontSize:"1.8rem",color:"#395873"}}
        >
          三
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}><Link href='/'>Inicio</Link></MenuItem>
          <MenuItem onClick={handleClose}> <Link href='/contact'>Contacto</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href='/posts'>Sentencias</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href='/admin'>Dashboard</Link></MenuItem>
          <MenuItem onClick={handleClose}> <Link href='/'><SignedIn> <SignOut /> </SignedIn></Link>  <Link href='/admin'><SignedOut className={classes.customButton}><SignInButton className={classes.customButton} afterSignInUrl='/admin' /></SignedOut></Link></MenuItem>
        </Menu>
      </div>:
       <ul>
         <li onClick={handleClose}><Link href='/'>Inicio</Link></li>
         <li onClick={handleClose}> <Link href='/contact'>Contacto</Link></li>
         <li onClick={handleClose}><Link href='/posts'>Sentencias</Link></li>
         <li onClick={handleClose}><Link href='/admin'>Dashboard</Link></li>
         <li onClick={handleClose}> <Link href='/'><SignedIn> <SignOut /> </SignedIn></Link>  <Link href='/admin'><SignedOut className={classes.customButton}><SignInButton className={classes.customButton} afterSignInUrl='/admin' /></SignedOut ></Link></li>
       </ul>}
      {/* <LogButton/> */}
    </div>
  );
}