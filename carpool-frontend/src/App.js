import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Banner from './components/Banner';
import Tiles from './components/Tiles';
import Footer from './components/Footer';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";


function App() {
    const [open, setOpen] = React.useState(false);
    const drawerWidth = 240;

    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    }));

    const theme = createTheme({
        palette: {
          primary: {
            light: '#58722e',
            main: '#2C4602',
            dark: '#0e1f00',
            contrastText: '#fff',
          },
          secondary: {
            light: '#f7efd0',
            main: '#f1cd55',
            dark: '#bb9c22',
            contrastText: '#000',
          },
        },
    });

    const image = {
      title: 'App Name Here',
      description:
        "Fast. Convenient. Reliable.",
      image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
      imageText: 'main image description',
      linkText: '',
    };

  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
           flexGrow: 1,
           bgcolor: '#faf5e2'
          }}>
          <AppBar position="static" open={open}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="cart"
                sx={{ mr: 2 }}
              >
                <ShoppingCartOutlinedIcon/>
              </IconButton>
              <Link to="/user" style={{ textDecoration: 'none', color: 'white'}}>
                <Button color="inherit">
                  Login
                </Button>
              </Link>
              <Button color="inherit">Sign Up</Button>
            </Toolbar>
          </AppBar>

          <Banner post={image} />

          <Tiles></Tiles>

          <Divider variant="middle"/>

          <Typography variant="h3" color="primary.main" gutterBottom align="center" mt={10} mb={10}>
            Sample sentence here.
          </Typography>

          <Box textAlign='center' mb={10}>
            <Button variant='contained' size="large">
              Learn more
            </Button>
          </Box>
          <Footer
            title="Footer"
            description="Sample text here."
          />



            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {['Home', 'Account', 'Settings', 'Help'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
      </Box>
    </ThemeProvider>
  );
}


export default App;
