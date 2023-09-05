import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import "./Style.css"
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Otp() {
  return (
    <Card sx={{ maxWidth:300,height:450,marginLeft:80, marginTop:10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <CardMedia
        component="img"
        alt="Hero image"
        height="140"
        src=''
      />
       <TextField
          id="input-box"
          label="Input Text"
          variant="outlined"
          fullWidth
        />
        
        
       
        <Typography variant="body2" sx={{marginTop:2}}>
          well meaning and kindly.
         
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/stepper" >
        <Button  sx={{backgroundColor:"#E67E22" ,width:"200%",color:"white", marginLeft:4,}} >Submit</Button>
        </Link>
      </CardActions>
      <hr style={{ borderBottom: '0.2px solid gray' }} />
      <Typography variant="body2">
        Additional information goes here.
      </Typography>

    </Card>
  );
}