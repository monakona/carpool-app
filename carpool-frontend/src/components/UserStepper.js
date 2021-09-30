import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import ListItemText from '@mui/material/ListItemText';
import ProductImageList from './ProductImageList';
import './UserStepper.css';
import { getTableSortLabelUtilityClass } from '@mui/material';


const steps = ['Select Shopper', 'Select Items', 'Confirm Order'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [selected, setSelected] = React.useState([]);
  const [estimatedTime, setEstimatedTime] = React.useState('');
  const [pickupDistance, setPickupDistance] = React.useState('');
  const [itemList, setItemList] = React.useState([]);
  const [itemData, setItemData] = React.useState([
      {
        img: '/images/apple.jpg',
        title: 'Apples',
        qty: 0
      },
      {
        img: '/images/broccoli.jpg',
        title: 'Broccoli',
        qty: 0
      },
      {
        img: '/images/cauliflower.jpg',
        title: 'Cauliflower',
        qty: 0
      },
      {
        img: '/images/greenbeans.jpg',
        title: 'Green Beans',
        qty: 0
      },
      {
        img: '/images/lemons.jpg',
        title: 'Lemon',
        qty: 0
      },
      {
        img: '/images/potatoes.jpg',
        title: 'Yellow Potato',
        qty: 0
      },
      {
        img: '/images/redpepper.jpg',
        title: 'Red Bell Pepper',
        qty: 0
      },
      {
        img: '/images/tomatoes.jpg',
        title: 'Tomato',
        qty: 0
      },
      {
        img: '/images/carrot.jpg',
        title: 'Carrot',
        qty: 0
      } ]);

      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const handleChange = (event) => {
        let value = event.target.value;
        let arr = value.split('-');
        let itemName = arr[0];
        let newqty = arr[1];
        let itemIdx = findItem(itemName);
        
        let newItemData = JSON.parse(JSON.stringify(itemData));
        newItemData[itemIdx].qty = newqty;

        if(newqty > 0) {
            let list = JSON.parse(JSON.stringify(itemList));
            list.push({name: itemName, qty: newqty});
            console.log(list)
            setItemList(list);
        }

        setItemData(newItemData);
    };

    const findItem = (itemName) => {
        return itemData.findIndex(item => item.title == itemName);
    }

  const isStepOptional = (step) => {
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if(activeStep === steps.length - 1) {
        setSelected([]);
        setEstimatedTime('');
        setPickupDistance('');
        setItemList([]);
        resetItemData();
    }
  };

  const resetItemData = () => {
      setItemData([
        {
          img: '/images/apple.jpg',
          title: 'Apples',
          qty: 0
        },
        {
          img: '/images/broccoli.jpg',
          title: 'Broccoli',
          qty: 0
        },
        {
          img: '/images/cauliflower.jpg',
          title: 'Cauliflower',
          qty: 0
        },
        {
          img: '/images/greenbeans.jpg',
          title: 'Green Beans',
          qty: 0
        },
        {
          img: '/images/lemons.jpg',
          title: 'Lemon',
          qty: 0
        },
        {
          img: '/images/potatoes.jpg',
          title: 'Yellow Potato',
          qty: 0
        },
        {
          img: '/images/redpepper.jpg',
          title: 'Red Bell Pepper',
          qty: 0
        },
        {
          img: '/images/tomatoes.jpg',
          title: 'Tomato',
          qty: 0
        },
        {
          img: '/images/carrot.jpg',
          title: 'Carrot',
          qty: 0
        } ]);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function createData(shopper, estimated_time, pickup_distance) {
    return { shopper, estimated_time, pickup_distance };
  }

  const handleClick = (event, row) => {
    const name = row.shopper;
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
    setEstimatedTime(row.estimated_time);
    setPickupDistance(row.pickup_distance);
  };
  
  const rows = [
    createData('Shopper 1', '1 hour', '0.5 mi'),
    createData('Shopper 2', '2 hours', '0.7 mi'),
    createData('Shopper 3', '2.5 hours', '1 mi'),
    createData('Shopper 4', '3 hours', '0.2 mi'),
    createData('Shopper 5', '4 hours', '1 mi'),
  ];

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const getTotal = () => {
    let totalqty = 0;
    itemList.forEach((item) => {
        totalqty = totalqty + Number(item.qty);
    })
    console.info(totalqty)
    return 5*totalqty;
   };

  return (
    <Box minHeight="30vh" sx={{ width: '60%', bgcolor: 'secondary.light', padding: '5%', margin: 'auto'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
            <Typography variant="h4" sx={{ mt: 8, mb: 4 }} align='center'>
                Order is confirmed!
            </Typography>
            <Typography variant="h6" align='center'>
                Confirmation email sent to user@gmail.com.  
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>New Order</Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 0 ? (
        <React.Fragment>
            <Typography sx={{ mt: 3, mb: 7 }} align="center" ></Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" mt={2}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox"></TableCell>
                            <TableCell>Shopper</TableCell>
                            <TableCell align="right">Pickup Distance</TableCell>
                            <TableCell align="right">Total Estimated Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => { const isItemSelected = isSelected(row.shopper);
                    return (
                        <TableRow
                        key={row.shopper}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        hover
                        onClick={(event) => handleClick(event, row)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        selected={isItemSelected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                color="primary"
                                checked={isItemSelected}/>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.shopper}
                            </TableCell>
                            <TableCell align="right">{row.pickup_distance}</TableCell>
                            <TableCell align="right">{row.estimated_time}</TableCell>
                        </TableRow>
                    )})}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 3, mb: 5 }} align="center" ></Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              {/*<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
            </Button>*/}
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      ) : activeStep === 1 ? (
        <React.Fragment>
            <Typography sx={{ mt: 4, mb: 5 }} align='center'>Shopper: {selected}</Typography>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    mt={3}
                    mb={5}
                >
                    {itemData.map((item) => (
                            <Grid item>
                                <Card raised className="Item-main-card">
                                     <CardMedia
                                        component="img"
                                        alt="item"
                                        image={item.img}
                                        className="Item-img"
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="body2" component="div" align='center'>
                                            {item.title}
                                        </Typography>
                                    </CardContent>

                                    <CardActions m='auto'>
                                        <FormControl variant="standard" sx={{ m: 'auto', minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Qty</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={`${item.title}-${item.qty}`}
                                                onChange={handleChange}
                                                label="qty"
                                            >
                                                <MenuItem key={`${item.title}-0`} value={`${item.title}-0`}>0</MenuItem>
                                                <MenuItem key={`${item.title}-1`} value={`${item.title}-1`}>1</MenuItem>
                                                <MenuItem key={`${item.title}-2`} value={`${item.title}-2`}>2</MenuItem>
                                                <MenuItem key={`${item.title}-3`} value={`${item.title}-3`}>3</MenuItem>
                                                <MenuItem key={`${item.title}-4`} value={`${item.title}-4`}>4</MenuItem>
                                                <MenuItem key={`${item.title}-5`} value={`${item.title}-5`}>5</MenuItem>
                                                <MenuItem key={`${item.title}-6`} value={`${item.title}-6`}>6</MenuItem>
                                                <MenuItem key={`${item.title}-7`} value={`${item.title}-7`}>7</MenuItem>
                                            </Select>
                                        </FormControl>
                                        
                                    </CardActions>
                                </Card>
                            </Grid>
                    ))}
                </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                >Back</Button>

                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>

            <Typography sx={{ mt: 4, mb: 5 }} align='center'>Confirm Order</Typography>

            {itemList ? 
                <React.Fragment>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    {itemList.map((item) => {
                                        return (
                                                <TableRow
                                                    key={item.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell align="right">{item.qty}</TableCell>
                                                    <TableCell align="right">{`$${5*item.qty}`}</TableCell>
                                                </TableRow>
                                        )})}
                                    
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography sx={{ mt: 2, mr: 1 }} align='right'>Total: {`$${getTotal()}`}</Typography>
                    <Typography sx={{ mt: 2, mr: 1 }} align='right'>Shopper: {selected}</Typography>
                    <Typography sx={{ mt: 2, mr: 1 }} align='right'>Estimated time: {estimatedTime ? estimatedTime : ''}</Typography>
                    <Typography sx={{ mt: 2, mr: 1, mb: 4 }} align='right'>Pickup Distance: {pickupDistance ? pickupDistance : ''}</Typography>
                    <Divider variant="middle" />
                    <Typography variant="h6" sx={{ mt: 2, ml: 2  }} align='left'>Payment Options</Typography>
                    <Typography variant="body2" sx={{mt: 2, ml: 4}}>Personal <Link href="#">x1234</Link></Typography>
                    <Typography variant="body2" sx={{mt: 2, ml: 4, mb: 4}}><Link href="#">Add new</Link></Typography>

                </React.Fragment>   
             : null}
                 
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                >Back</Button>

                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                </Button>
            </Box>
        </React.Fragment>
      )}
    </Box>
  );
}