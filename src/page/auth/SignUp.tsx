import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useActionData } from "react-router-dom";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const confirmPass = formData.get("confirmPass") as string | null;
  // const errors = {}

  const errors: Record<string, string> = {};
  
  if (!username) {
    errors.username = "Vui lòng không để trống";
  }
  if (!email || !email.includes("@")) {
    errors.email = "Email chưa đúng định dạng";
  }
  if (!password || password.length < 6) {
    errors.password = "Mật khẩu phải ít nhất 6 ký tự";
  }
  if (password !== confirmPass) {
    errors.confirmPass = "Mật khẩu không khớp";
  }

  // Return errors if there are any
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // Simulate successful registration
  return { success: "Đăng ký thành công!" };
}

interface ActionData {
  errors?: {
    username?: string;
    email?: string;
    password?: string;
    confirmPass?: string;
  };
  success?: string;
}

const SignUp = () => {
  const actionData = useActionData<ActionData>() || {};
  console.log(actionData); // For debugging purposes
  

  return (
    <Box
      component="form"
      method="post"
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
            // error={!!actionData.errors?.username}
            // helperText={actionData.errors?.username}
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
            // error={!!actionData.errors?.email}
            // helperText={actionData.errors?.email}
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
            // error={!!actionData.errors?.password}
            // helperText={actionData.errors?.password}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="confirmPass"
            type="password"
            name="confirmPass"
            label="Confirm Password"
            fullWidth
            required
            variant="outlined"
            // error={!!actionData.errors?.confirmPass}
            // helperText={actionData.errors?.confirmPass}
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

        {actionData.success && (
          <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
            <Typography color="green">{actionData.success}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default SignUp;
