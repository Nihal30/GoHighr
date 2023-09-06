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
import Checkbox from '@mui/material/Checkbox';
import Hero2 from "../img/hero2.png"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Otp() {
  return (
    <div className="container">
      <Card className="card">
        <CardContent>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <CardMedia
            component="img"
            alt="Hero image"
            height="140"
            src={Hero2}
          />
          <TextField
            id="input-box"
            label="Input Text"
            variant="outlined"
            fullWidth
          />
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            well-meaning and kindly.
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/step1">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#E67E22", color: "white" }}
              fullWidth
            >
              Submit
            </Button>
          </Link>
        </CardActions>
        <hr className="divider" />
        <Typography variant="body2" className="additional-info">
          <Checkbox {...label} />
          Additional information goes here.
        </Typography>
      </Card>
    </div>
  );
}
