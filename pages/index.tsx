import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import {Button, Fab} from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
            gap: '20px'
        }}
      >
        <Typography variant="subtitle1" component="h4" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>


          <Typography variant={"h5"}  >
              Combined Next + Mui Links
          </Typography>

          <Link href="/about" color="secondary">
              Go to the about page
          </Link>

          <Typography variant={"h5"}  >
            Full Width Buttons
          </Typography>
          <Button variant="contained" disableElevation color={'primary'} fullWidth>Primary</Button>
          <Button variant="outlined" disableElevation color={'primary'} fullWidth>Primary outlined</Button>
          <Button variant="contained" disableElevation color={'primary'} disabled fullWidth>Disabled</Button>
          <Button variant="contained" disableElevation color={'tertiary'} fullWidth>Tertiary (custom color)</Button>

          <Typography variant={"h5"}  >
              Small Buttons
          </Typography>

          <Button variant="contained" disableElevation color={'tertiary'} >Apply</Button>

          <Typography variant={"h5"}  >
              Typography
          </Typography>

          <Typography >
              Regular Text
          </Typography>

      </Box>
    </Container>
  );
};

export default Home;
