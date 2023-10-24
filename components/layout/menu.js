"use client"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React from 'react';
import Link from 'next/link';
import LogButton from '../logout/userButton';
import SignOut from '../logout/logOutButton';
import { SignInButton,useAuth,SignedOut,SignedIn } from "@clerk/nextjs";
export default function FadeMenu() {

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
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{fontSize:"1.8rem"}}
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
        <MenuItem onClick={handleClose}> <Link href='/'><SignedIn> <SignOut /> </SignedIn></Link>  <Link href='/admin'><SignedOut><SignInButton afterSignInUrl='/admin' /></SignedOut></Link></MenuItem>
      </Menu>
      {/* <LogButton/> */}
    </div>
  );
}