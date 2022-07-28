import * as React from 'react';
import Link from '@mui/material/Link';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    TextField,
    Stack,
    Grid,
    Select,
    MenuItem, InputLabel, SelectChangeEvent
} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


export default function Form() {
    const [state, setState] = React.useState('CA');

    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };

    return (
      <form>

          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField fullWidth label="First name"  />
              </Grid>
              <Grid item xs={12}>
                  <TextField fullWidth label="Last name"  />
              </Grid>
              <Grid item xs={12}>
                  <TextField fullWidth label="Address"  />
              </Grid>
              <Grid item xs={12}>
                  <Typography variant={'button'} color={'secondary'} >Add Line</Typography>
              </Grid>
              <Grid item xs={12}>
                  <TextField fullWidth label="ZIP"       inputProps={{
                      maxLength: 5,
                  }}    />
              </Grid>
              <Grid item xs={8}>
                  <TextField fullWidth label="City"  />
              </Grid>
              <Grid item xs={4}>
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">State</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={state}
                          label="State"
                          onChange={handleChange}
                      >
                          <MenuItem value={'CA'}>CA</MenuItem>
                          <MenuItem value={'NY'}>NY</MenuItem>
                      </Select>
                  </FormControl>
              </Grid>
          </Grid>


      </form>
  );
}
