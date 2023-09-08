import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Hero1 from "../img/hero1.png";
import "./Style.css";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const baseUrl = "http://localhost:3001/api/user/otpgenration"

export default function OtpGeneration() {
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const handleChange = (event) => {
  //   setCountry(event.target.value);
  // };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: phoneNumber }),
      });

      const data = await response.json();
      console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card sx={{ maxWidth: 300, margin: "10px auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: "#E67E22" }} gutterBottom>
          Lorem Ipsum is simply dummy text of the printing
        </Typography>
        <CardMedia component="img" alt="Hero image" height="140" src={Hero1} />
        <Grid container spacing={1}>
          <PhoneInput
            country={"in"}
            value={phoneNumber}
            onChange={setPhoneNumber}
            autoFocus
          />
          {/* <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form> */}
        </Grid>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          well meaning and kindly.
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#E67E22",
            width: "100%",
            color: "white",
          }}
        >
          Get OTP
        </Button>
      </CardActions>
      <hr style={{ borderBottom: "0.2px solid gray" }} />
      <Typography variant="body2">
        <Checkbox {...label} />
        Additional information goes here.
      </Typography>
    </Card>
  );
}
