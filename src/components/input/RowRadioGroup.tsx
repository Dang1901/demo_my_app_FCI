import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import * as React from 'react';

export default function RowRadioGroup() {
  return (
    <FormControl>
      <FormLabel id="radio-buttons-group-label">Phương thức thanh toán</FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="tructiep" control={<Radio />} label="Thanh toán khi nhận hàng" />
        <FormControlLabel value="chuyenkhoan" control={<Radio />} label="Chuyển khoản" />
    
      </RadioGroup>
    </FormControl>
  )
}
