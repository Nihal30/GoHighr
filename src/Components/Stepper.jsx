import * as React from "react";

import Grid from "@mui/material/Grid"; // Import Grid from Material-UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Hero3 from "../img/hero3.png";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HorizontalStepper() {
  return (
    <div>
    <div style={{marginTop:40}} >
        <span style={{backgroundColor:"white",padding:5,fontSize:20,borderRadius:10}} >Step 1/3</span>
    </div>
      <Card sx={{ marginTop: 3, maxWidth: 1000, marginLeft: 35, height: 450 }}>
        <CardContent>
          <Grid
            container
            spacing="1px"
            item
            sx={{ display: "flex ", alignItems: "center " }}
          >
            {" "}
            {/* Create a Grid container */}
            <Grid
              item
              xs={6}
              md={8}
              style={{ backgroundColor: "yellow", marginTop: 10 }}
            >
              {" "}
              {/* Typography and Image in the first column */}
              <Typography
                sx={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "black",
                  fontSize: 20,
                }}
                gutterBottom
              >
                What’s Your Preferred Intake ?
              </Typography>
              <Button size="small">jan 23</Button>
              <Button size="small">may 23</Button>
            </Grid>
            <Grid
              item
              xs={6}
              md={8}
              style={{ backgroundColor: "yellow", marginTop: -40 }}
            >
              {" "}
              {/* Typography and Image in the second column */}
              <Typography
                sx={{ fontSize: 14, color: "black", fontSize: 20 }}
                gutterBottom
              >
                What do you wish to pursue ?
              </Typography>
              <Grid>
                <Button size="small">PG Diploma</Button>
                <Button size="small">Master's</Button>
                <Button size="small">Bachilor’s</Button>
                <Button size="small">MBA</Button>
                <Button size="small">phD</Button>
                <Button size="small">Not Decided</Button>
              </Grid>
            </Grid>
            <Grid item sx={6} md={4}>
              <CardMedia
                component="img"
                alt="Hero image"
                src={Hero3}
                sx={{ maxHeight: "100%", margin: "auto", display: "block" }}
              />
            </Grid>
            <CardActions>
              <Link to="/step2">
                <Button
                  sx={{
                    alignItems: "center",
                    marginLeft: 50,
                    backgroundColor: "#E67E22",
                    color: "white",
                  }}
                >
                  Next
                </Button>
              </Link>
            </CardActions>
          </Grid>
        </CardContent>
      </Card>
      </div>
  );
}
