import * as React from "react";

import Grid from "@mui/material/Grid"; // Import Grid from Material-UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CardMedia } from "@mui/material";
import Hero4 from "../img/hero4.png";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Step2() {
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
          Step 2/3
        </span>
      </div>
      <Card sx={{ marginTop: 3, maxWidth: 1000, marginLeft: 35, height: 450 }}>
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex ", alignItems: "center " }}
          >
            {" "}
            {/* Create a Grid container */}
            <Grid
              item
              xs={6}
              md={8}
              style={{  marginTop: 10 }}
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
                What is your current education ?
              </Typography>
              <Grid container>
                <Grid xs={4}>
                  <Button size="small">10th Standard</Button>
                </Grid>
                <Grid xs={4}>
                  <Button size="small">12th Standard</Button>
                </Grid>
                <Grid xs={4}>
                  <Button size="small">Bachilor’s Degree</Button>
                </Grid>
                <Grid xs={4}>
                  <Button size="small">Master’s Degree</Button>
                </Grid>
                <Grid xs={4}>
                  <Button size="small">MBBS/MD</Button>
                </Grid>
              </Grid>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "black",
                  fontSize: 20,
                  marginTop: 5,
                }}
                gutterBottom
              >
                Expected or Gained Percentage
              </Typography>
              <Grid>
                <TextField id="input-box" label="Grades " variant="outlined" />
              </Grid>
              <Grid
                item
                xs={6}
                md={8}
                style={{ backgroundColor: "yellow", marginTop: -40 }}
              >
                {" "}
              </Grid>
            </Grid>
            <Grid item sx={6} md={4}>
              <CardMedia
                component="img"
                alt="Hero image"
                src={Hero4}
                sx={{ maxHeight: "90%", margin: "auto", display: "block" }}
              />
            </Grid>
            <CardActions>
              <Link to="/step3">
                <Button
                  sx={{
                    alignItems: "center",
                    marginLeft: 50,
                    backgroundColor: "#E67E22",
                    color: "white",
                    width: 200,
                    marginTop: 5,
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
