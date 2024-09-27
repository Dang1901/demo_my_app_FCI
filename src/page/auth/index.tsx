import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Grid } from "@mui/material";

export default function Authentication() {
  return (
    <>
      <Grid container spacing={2} columns={16}>
        <Grid item xl={8}>
          <SignIn />
        </Grid>
        <Grid item xs={4}>
          <SignUp />
        </Grid>
      </Grid>
    </>
  );
}
