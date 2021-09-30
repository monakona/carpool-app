import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductImageList(props) {
    const { post } = props;

    const [itemList, setItemList] = React.useState([]);
    const [itemData, setItemData] = React.useState([
        {
          img: '../images/apples.jpeg',
          title: 'Breakfast',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          qty: 0
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          qty: 0
        },
      ]);

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
            setItemList(list);
            props.addItems(itemList);
        }

        setItemData(newItemData);
    };

    const findItem = (itemName) => {
        return itemData.findIndex(item => item.title == itemName);
    }

  return (
    <Grid
        container
        spacing={2}
        justifyContent="center"
        mt={3}
        mb={5}
    >
        {itemData.map((item) => (
                <Grid item>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="130"
                            image={item.img}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="body2" component="div" align='center'>
                                {item.title}
                            </Typography>
                        </CardContent>

                        <CardActions >
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
    
  );
}



