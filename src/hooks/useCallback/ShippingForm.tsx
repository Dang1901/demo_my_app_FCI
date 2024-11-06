import { memo, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ShippingForm = (function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log(`[ARTIFICIALLY SLOW] Rendering <ShippingForm /> at ${new Date().toLocaleTimeString()}`);

  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    };
    onSubmit(orderDetails);
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        <b>Note: <code>ShippingForm</code> is artificially slowed down!</b>
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1">Number of items:</Typography>
        <Button variant="contained" onClick={() => setCount(count - 1)} disabled={count <= 1}>–</Button>
        <Typography variant="body1">{count}</Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>+</Button>
      </Box>
      <TextField label="Street" name="street" variant="outlined" fullWidth required />
      <TextField label="City" name="city" variant="outlined" fullWidth required />
      <TextField label="Postal code" name="zipCode" variant="outlined" fullWidth required />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
});

export default ShippingForm;
