import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Hero1 from "../img/hero1.png";
import "./Style.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function InputCard() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 300, margin: "10px auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: "#E67E22" }} gutterBottom>
          Lorem Ipsum is simply dummy text of the printing
        </Typography>
        <CardMedia component="img" alt="Hero image" height="140" src={Hero1} />
        <Grid container spacing={1}>
          {/* select */}
          <Grid item xs={3}>
            <FormControl fullWidth size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={country}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>+91</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={9}>
            <TextField
              id="input-box"
              label="Input Text"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          well meaning and kindly.
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to="/Otp">
          <Button
            sx={{
              backgroundColor: "#E67E22",
              width: "100%", // Set button width to 100% to make it responsive
              color: "white",
            }}
          >
            Get OTP
          </Button>
        </Link>
      </CardActions>
      <hr style={{ borderBottom: "0.2px solid gray" }} />
      <Typography variant="body2">
        <Checkbox {...label} />
        Additional information goes here.
      </Typography>
    </Card>
  );
}
