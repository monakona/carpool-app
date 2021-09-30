import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
import MapContainer from './components/MapContainer';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';
import UserStepper from './components/UserStepper';

function UserDashboard() {
    const [value, setValue] = React.useState(null);
    const [showStepper, setShowStepper] = React.useState(false);
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

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const toggleShowStepper = () => {
        showStepper === true ? setShowStepper(false) : setShowStepper(true);
    }

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
{/* 
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="cart"
                            sx={{ mr: 2 }}
                        >
                            <ShoppingCartOutlinedIcon/>
                        </IconButton> */}
                    </Toolbar>
                </AppBar>

                <Typography variant="h6" align="center" sx={{mt: 5, mb: 2}}>Choose a store to get started!</Typography>
                <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      minHeight="70vh"
                      mt={5}
                      mb={5}
                >
                    
                    <MapContainer onStoreSelect={toggleShowStepper}></MapContainer>

                </Box>    
                
                {
                    showStepper === true && <UserStepper></UserStepper>
                }
                

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
                <Footer
                    title="Footer"
                    description="Sample text here."
                />
            </Box>
        </ThemeProvider>
    );
}

  export default UserDashboard;