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

export default function Step1() {
  return (
    <div>
      <div style={{ marginTop: 40 }}>
        <span
          style={{
            backgroundColor: "white",
            padding: 5,
            fontSize: 20,
            borderRadius: 10,
          }}
        >
          Step 1/3
        </span>
      </div>
      <Card sx={{ marginTop: 3, maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}>
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Create a Grid container */}
            <Grid
              item
              xs={12}
              md={6}
              style={{ textAlign: "center" }}
            >
              {/* Typography and Image in the first column */}
              <Typography
                sx={{
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

              <Typography
                sx={{ color: "black", fontSize: 20 }}
                gutterBottom
              >
                What do you wish to pursue ?
              </Typography>
              <Grid>
                <Button size="small">PG Diploma</Button>
                <Button size="small">Master's</Button>
                <Button size="small">Bachelor’s</Button>
                <Button size="small">MBA</Button>
                <Button size="small">PhD</Button>
                <Button size="small">Not Decided</Button>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="Hero image"
                src={Hero3}
                sx={{ maxHeight: "100%", margin: "auto", display: "block" }}
              />
            </Grid>
          </Grid>
          <CardActions>
            <Link to="/step2">
              <Button
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#E67E22",
                  color: "white",
                  width: 200,
                  marginTop: 10,
                }}
              >
                Next
              </Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
