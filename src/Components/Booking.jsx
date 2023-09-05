import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Booking = () => {
  return (
    <>
      <Card sx={{ marginTop: 3, maxWidth: 1000, marginLeft: 35, height: 450 }} >
        <CardContent>
          <Typography sx={{ fontSize: 18,fontStyle:"normal",fontWeight:"bold" }}  gutterBottom>
          Pick a Counciling Slot
          </Typography>
          <Typography sx={{ fontSize: 12,fontStyle:"italic",}}  gutterBottom>
          <span style={{color:"#E67E22"}} >#AreYouReadyToGohighr</span> for abroad studies with the help of kerala’s best Counsellor
          </Typography>
          <Grid container   sx={{ justifyContent: 'center' }} >
          <Grid item>
            <Button>5 Sep</Button>
          </Grid>
          <Grid item>
            <Button>5 Sep</Button>
          </Grid>

          </Grid>
          <hr style={{ borderBottom: '0.2px solid gray' }} />
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" style={{backgroundColor:"#E67E22", color:"white",width:300 }} >Confirm Slot</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Booking;
