import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

function Tiles(props) {
  const { post } = props;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
/*     <Grid item xs={12} md={4}>
      <CardActionArea component="a" href="#">
        <Card>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid> */

        <Grid
            container
            spacing={9}
            justifyContent="center"
            mt={3}
            mb={5}
        >
            <Grid item>
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
                    />
                </Card>
                <Typography variant="h5" color="primary.main" gutterBottom align="center" mt={2}>
                    text
                </Typography>
            </Grid>
            <Grid item>
                <Card>
                    <CardMedia 
                        component="img"
                        alt="green iguana"
                        height="200"
                        image="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
                        
                    />
                </Card>
                <Typography variant="h5" color="primary.main" gutterBottom align="center" mt={2}>
                    text
                </Typography>
            </Grid>
            <Grid item>
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
                    />
                </Card>
                <Typography variant="h5" color="primary.main" gutterBottom align="center" mt={2}>
                    text
                </Typography>
            </Grid>
        </Grid>

  );
}


export default Tiles;