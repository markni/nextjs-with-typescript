import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';

import {Button, Grid, TextField} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Home: NextPage = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
            gap: '8px'
        }}
      >
        <Typography variant="subtitle1" >
          MUI v5 + Next.js with TypeScript example
        </Typography>


          <Typography variant={"h2"}  >
              Combined Next + Mui Links
          </Typography>

          <Link href="/about" color="secondary">
              <Typography  >
                  Just a link
              </Typography>
          </Link>

          <Typography variant={"h2"}  >
            Full Width Buttons
          </Typography>
          <Button variant="contained" disableElevation color={'primary'} fullWidth>Primary</Button>
          <Button variant="outlined" disableElevation color={'primary'} fullWidth>Primary outlined</Button>
          <Button variant="contained" disableElevation color={'primary'} disabled fullWidth>Disabled</Button>
          <Button variant="contained" disableElevation color={'tertiary'} fullWidth>Tertiary (custom color)</Button>

          <Typography variant={"h2"}  >
              Small Buttons
          </Typography>

          <Button variant="contained" disableElevation color={'tertiary'} >Apply</Button>


          <Typography >
              Regular Text
          </Typography>

          <Typography color={'secondary'} >
              Regular Text with secondary color
          </Typography>

          <Typography variant={'highlight'}  >
              Highlight variant (used to display discount in design)
          </Typography>

          <Typography color={'highlight.main'}>
              Just the highlight color
          </Typography>

          <Typography variant={'total'} >
              Total: $30.00
          </Typography>

          <Typography variant={'h2'} >
              Header 2 (used on left top of each page)
          </Typography>

          <Typography variant={'subtitle1'} >
              Subtitle 1 (used on left top of each page)
          </Typography>

          <Typography variant={'subtitle2'} >
              Subtitle 2 (used in two column design, title for each sections)
          </Typography>

          <Typography variant={'hint'} >
              Hint (small grey text, used to display brand name etc)
          </Typography>


          <Typography color={'error'} variant={'button'} >
              Delete address
          </Typography>

          <Link href="/about" color="secondary">

          <Typography color={'secondary'} variant={'button'} >
              Add discount
          </Typography>
          </Link>



          <Button variant="outlined" onClick={handleClickOpen}>
              Responsive dialog example
          </Button>
          <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
          >
              <DialogTitle id="responsive-dialog-title">
                  <Typography variant={'h2'}>New Address</Typography>
              </DialogTitle>
              <DialogContent>
                  <TextField fullWidth label="First Name" variant="outlined" placeholder={'First name'} />
                  <TextField fullWidth label="First Name" variant="outlined" placeholder={'First name'} />

              </DialogContent>
              <DialogActions>
                  <Grid container spacing={2} xs={6}>
                      <Grid item xs={4}>
                          <Button fullWidth disableElevation variant="outlined" autoFocus onClick={handleClose}>
                              Cancel
                          </Button>
                      </Grid>
                      <Grid item xs={8}>
                          <Button fullWidth disableElevation  variant="contained" onClick={handleClose} autoFocus>
                              Save
                          </Button>
                      </Grid>
                  </Grid>
              </DialogActions>
          </Dialog>

      </Box>
    </Container>
  );
};

export default Home;
