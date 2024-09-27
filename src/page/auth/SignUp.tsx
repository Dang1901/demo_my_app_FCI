import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const SignUp = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 4,
        border: "1px solid",
        borderRadius: 2,
        borderColor: "grey.300",
        backgroundColor: "background.paper",
        boxShadow: 3,
        maxWidth: 400,
        mx: "auto", 
        mt: 5,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
        Sign Up
      </Typography>

      <Box component="form" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="username"
              type="text"
              name="username"
              label="Username"
              autoComplete="username"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              type="email"
              name="email"
              label="Email"
              autoComplete="email"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              type="date"
              name="email"
              autoComplete="email"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="phone"
              type="number"
              name="phone"
              label="Phone"
              autoComplete="phone"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="password"
              type="password"
              name="password"
              label="Password"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmPass"  
              type="password"
              name="confirmPass"
              label="Confirm Passwword"
              fullWidth
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" size="large">
              Sign Up
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
            <Typography>
              You already have an account{" "}
              <Link href="/sign-in" variant="body2">
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
