import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react'
import { countries } from '../../shared/enums';
import { CountryType } from '../../shared/interface/country';

function CountrySelect() {
    return (
      <Autocomplete
        fullWidth
        options={countries}
        disableCloseOnSelect
        getOptionLabel={(option: CountryType) =>
          `${option.label} (${option.code}) +${option.phone}`
        }
        renderInput={(params) => <TextField {...params} label="Choose a country" />}
      />
    );
  }

export default function CountrySelectInput() {
  return (
    <Stack spacing={5} >
        <CountrySelect />
    </Stack>
  )
}
