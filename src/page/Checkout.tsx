import {
  Box,
  Button,
  Grid,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { addressCities, steps } from "../shared/enums";
import RowRadioGroup from "../components/input/RowRadioGroup";

const Checkout = () => {
  
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ marginBottom: 3, textAlign: "center" }}>
          Checkout Kicap
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{
            p: 4,
            border: "1px solid",
            borderRadius: 2,
            borderColor: "grey.300",
            backgroundColor: "background.paper",
            boxShadow: 3,
            maxWidth: 900,
            mx: "auto", // Center the form
          }}
        >
          <Box sx={{ width: '100%', p: 3  }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                type="text"
                name="name"
                label="Họ và Tên"
                autoComplete="name"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                name="phone"
                type="number"
                label="Số điện thoại"
                autoComplete="phone"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                type="email"
                name="email"
                label="Địa chỉ Email"
                autoComplete="email"
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                id="select-city"
                variant="outlined"
                label="Tỉnh/Thành phố"
                required
              >
                {addressCities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                id="select-city"
                variant="outlined"
                label="Quận/Huyện"
                required
              >
                {addressCities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                id="select-district"
                label="Phường/Xã/Thị Trấn"
                variant="outlined"
                required
              >
                {addressCities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="address"
                name="address"
                label="Địa chỉ cụ thể"
                required
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                placeholder="Ghi chú..."
                aria-label="minimum height"
                minRows={3}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
              ></TextareaAutosize>
            </Grid>
            <Grid item xs={12}>
              <RowRadioGroup />
            </Grid>

            <Grid item xs={12}></Grid>

            <Grid item xs={12}></Grid>

            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
