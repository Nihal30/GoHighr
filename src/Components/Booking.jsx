import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Booking = () => {
  const divStyle = {
    border: '0.5px solid gray',
    padding: '10px',
    borderRadius: '10px'
  };

  return (
    <>
      <Card
        sx={{
          marginTop: 3,
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 18,
              fontStyle: 'normal',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
            gutterBottom
          >
            Pick a Counseling Slot
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              fontStyle: 'italic',
              textAlign: 'center'
            }}
            gutterBottom
          >
            <span style={{ color: '#E67E22' }}>
              #AreYouReadyToGohighr
            </span>{' '}
            for abroad studies with the help of Kerala’s best Counsellor
          </Typography>
          <Grid container sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} sm={6} md={3}>
              <Button variant="contained">5 Sep</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button variant="contained">5 Sep</Button>
            </Grid>
          </Grid>
          <hr style={{ borderBottom: '0.2px solid gray' }} />
          <Grid container style={{ backgroundColor: 'yellow' }}>
            <Grid item xs={12} sm={6} md={4}>
              <div style={divStyle}>
                <span
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: 10,
                    color: 'white'
                  }}
                >
                  USA
                </span>
                <br />
                <span>11:30 AM</span>
                <div style={{ backgroundColor: '#9ef7a3' }}>
                  <span>Available</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Link to="/dashboard">
            <Button
              variant="contained"
              style={{
                backgroundColor: '#E67E22',
                color: 'white',
                width: '100%'
              }}
            >
              Confirm Slot
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Booking;
