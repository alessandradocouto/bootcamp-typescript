import {
    AppBar,
    Stack,
    Toolbar,
    Typography,
    IconButton

} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {

  return (

    <Toolbar sx={{
      backgroundColor: "#7e47a0",
    }}>
      <IconButton 
      edge="start"
      aria-label="menu" 
      sx={{ mr: 2, color:"#fff" }}>
        <MenuIcon />
      </IconButton>
      <Typography 
      variant="h6" 
      noWrap 
      component="h1" 
      sx={{ 
        flexGrow: 1,
        color:"#fff"
      }}>
        Dio Bank
      </Typography>
    </Toolbar>
    
  )
}

export default Header