import React from 'react'
import './Navbar.css'
import TheatersIcon from '@mui/icons-material/Theaters';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button, Tooltip, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to={"/"}>
        <Tooltip title="View All Movies" placement='top' TransitionComponent={Zoom} arrow>
          <Button variant='contained' color='success'><span><TheatersIcon /></span></Button>
        </Tooltip>
      </Link>

      <Link to={"/addmovie"}>
      <Tooltip title="Add Movie" placement='top' TransitionComponent={Zoom} arrow>
        <Button variant='contained' color='success'><span><PostAddIcon /></span></Button>
      </Tooltip>
        
      </Link>

      <Link to={"/about"}>
      <Tooltip title="About Us" placement='top' TransitionComponent={Zoom} arrow>
          <Button variant='contained' color='success'><span><AccountBoxIcon /></span></Button>
      </Tooltip>        
      </Link>
    </div>
  )
}

export default Navbar
