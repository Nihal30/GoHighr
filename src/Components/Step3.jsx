import * as React from "react";
import Grid from "@mui/material/Grid"; // Import Grid from Material-UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Hero5 from "../img/hero5.png";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Step3() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
          Step 3/3
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
            <Grid item xs={6} md={8} style={{ marginTop: 10 }}>
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
                Status of your IELTS?TOEFL exam
              </Typography>
              <Grid>
                <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
                 
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    
                    <MenuItem value={10}>Not Decided</MenuItem>
                    <MenuItem value={20}>Waiting for result</MenuItem>
                    <MenuItem value={30}>Passed</MenuItem>
                     <MenuItem value={40}>Failed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} md={8} style={{ marginTop: -40 }}>
                {" "}
              </Grid>
            </Grid>
            <Grid item sx={6} md={4}>
              <CardMedia
                component="img"
                alt="Hero image"
                src={Hero5}
                sx={{ maxHeight: "90%", margin: "auto", display: "block" }}
              />
            </Grid>
            <CardActions>
              <Link to="/booking">
                <Button
                  sx={{
                    alignItems: "center",
                    marginLeft: 50,
                    backgroundColor: "#E67E22",
                    color: "white",
                    width: 200,
                    marginTop: 0,
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
