import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import QuestionMark from '@mui/icons-material/QuestionMark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Button, Checkbox, Collapse, Divider,
    FormControl,
    FormControlLabel, FormGroup,
    FormHelperText, FormLabel,
    Grid,
    IconButton,
    Input,
    InputLabel, List, ListItem, ListItemIcon, ListItemText, Paper, Radio, RadioGroup, Stack,
    TextField,
    Tooltip
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {styled, useTheme} from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContext from "@mui/material/Dialog/DialogContext";
import Form from "../src/Form";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
            <Stack
                mb={2}
                spacing={2}
                alignItems={'flex-start'}
            >
                <Typography variant="subtitle1">
                    MUI v5 + Next.js with TypeScript example
                </Typography>


                <Typography variant={"h2"}>
                    Combined Next + Mui Links
                </Typography>

                <Link href="/about" color="secondary">
                    <Typography>
                        Just a link
                    </Typography>
                </Link>


                <Button variant="contained" color={'primary'} fullWidth>Primary</Button>
                <Button variant="outlined" color={'primary'} fullWidth>Primary outlined</Button>
                <Button variant="contained" color={'primary'} disabled fullWidth>Disabled</Button>
                <Button variant="contained" color={'tertiary'} fullWidth>Tertiary (custom
                    color)</Button>


                <Button variant="contained" color={'tertiary'}>Apply</Button>
                <Button variant="contained" color={'gray2'}>Remove</Button>

                <Typography variant={'h2'}>
                    Header 2 (used on left top of each page)
                </Typography>

                <Typography variant={'total'}>
                    Total: $30.00 (total variant)
                </Typography>

                <Typography>
                    Regular Text
                </Typography>

                <Typography color={'secondary'}>
                    Regular Text with secondary color
                </Typography>

                <Typography color={'highlight.main'}>
                    Just the highlight color
                </Typography>

                <Typography variant={'highlight'}>
                    Highlight variant (used to display discount in design)
                </Typography>




                <Typography variant={'subtitle1'}>
                    Subtitle 1 (used on left top of each page)
                </Typography>

                <Typography variant={'subtitle2'}>
                    Subtitle 2 (used in two column design, title for each sections)
                </Typography>

                <Typography variant={'hint'}>
                    Hint (small grey text, used to display brand name etc)
                </Typography>

                <Typography variant={'subtitle1'} sx={{fontWeight: 600}}  color={'gray1.main'} >
                    Powered by
                </Typography>


                <Typography color={'error'} variant={'button'}>
                    Delete address
                </Typography>


                <Typography color={'secondary'} variant={'button'}>
                    Add discount
                </Typography>

                <Typography color={'secondary'} sx={{fontWeight: 600, fontSize: 12}} variant={'button'}>
                    Terms and Conditions
                </Typography>


                <Typography color={'info.main'} variant={'button'}>
                    Privacy Policy
                </Typography>

                <Typography color={'primary'} variant={'button'}>
                    Edit
                </Typography>

                <Typography sx={{textDecoration: 'none'}} color={'primary'} variant={'button'}>
                    Edit
                </Typography>

                <Button variant="outlined" onClick={handleClickOpen}>
                    Responsive dialog example
                </Button>

                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        New Address
                    </DialogTitle>
                    <DialogContent>
                        <Form/>
                    </DialogContent>
                    <DialogActions>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Button fullWidth variant="outlined" autoFocus onClick={handleClose}>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={7}>
                                <Button fullWidth variant="contained" onClick={handleClose} autoFocus>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>

                <Typography>Hover on the icon to see tooltip

                    <Tooltip title="It’s really simple to understand how card linking works.">
                        <IconButton>
                            <QuestionMark/>
                        </IconButton>
                    </Tooltip>
                </Typography>

                <Form/>

                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>



            </Stack>

            {/*don't use space prop here, bug*/}
            <Stack  divider={<Divider sx={{margin:'16px 0'}} />}>
                <Grid container spacing={2} sx={{paddingRight: '24px'}}>
                    <Grid item xs={4}>
                        <Typography variant={'subtitle2'}> Contact </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant={'subtitle2'}> Shakira@skipify.com </Typography>
                    </Grid>
                </Grid>


                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Typography variant={'subtitle2'}> Delivery </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography >
                                    Standard, Free
                                </Typography>
                                <Typography >
                                    Arrives Jul 31 - Aug 3
                                </Typography>
                            </Grid>

                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={7}>
                                <FormControl>
                                    <RadioGroup
                                        defaultValue="standard"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="standard" control={<Radio />} label="Standard, Free " />
                                        <FormControlLabel value="express" control={<Radio />} label="Express, $9.99" />
                                        <FormControlLabel value="local" control={<Radio />} label="Local Pickup, Free" />
                                    </RadioGroup>
                                </FormControl>

                            </Grid>

                        </Grid>

                    </AccordionDetails>
                </Accordion>

            </Stack>


            <Box mb={10} ></Box>


        </Container>

    );
};

export default Home;
