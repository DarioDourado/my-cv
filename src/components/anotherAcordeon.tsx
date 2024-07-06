// pages/index.js
"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AnotherAcordeon() {

    return (
        <main>

            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{
                            color: '#052B6B',
                        }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            backgroundColor: '#191919',
                            borderRadius: '3rem',
                            margin: '0.5rem',
                            boxShadow: '0px 0px 10px 0px #052B6B',
                            ":hover": {
                                backgroundColor: '#052B6B',
                            }
                        }}
                    >
                        <Typography variant='h4'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'white',
                                textAlign: 'center',
                                width: '100%',
                            }} >About Me</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'blue' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </main>
    );
}
