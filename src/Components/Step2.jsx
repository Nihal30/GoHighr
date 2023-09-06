import * as React from "react";
import Grid from "@mui/material/Grid";
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
      <div style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
        <span
          style={{
            backgroundColor: "white",
            padding: "5px 10px",
            fontSize: "20px",
            borderRadius: "10px",
          }}
        >
          Step 2/3
        </span>
      </div>
      <Card
        sx={{
          maxWidth: "100%",
          margin: "0 10px",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginTop: "10px",
                  color: "black",
                }}
                gutterBottom
              >
                What is your current education?
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Button variant="contained" size="small">
                    10th Standard
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button variant="contained" size="small">
                    12th Standard
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button variant="contained" size="small">
                    Bachelor’s Degree
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button variant="contained" size="small">
                    Master’s Degree
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button variant="contained" size="small">
                    MBBS/MD
                  </Button>
                </Grid>
              </Grid>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "black",
                  marginTop: "20px",
                }}
                gutterBottom
              >
                Expected or Gained Percentage
              </Typography>
              <TextField
                id="input-box"
                label="Grades"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt="Hero image"
                src={Hero4}
                sx={{
                  maxHeight: "90%",
                  margin: "auto",
                  display: "block",
                }}
              />
            </Grid>
            <CardActions sx={{ justifyContent: "center" }}>
              <Link to="/step3">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#E67E22",
                    color: "white",
                    width: "200px",
                    marginTop: "20px",
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
