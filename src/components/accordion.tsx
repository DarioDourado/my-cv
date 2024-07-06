"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box, { BoxProps } from '@mui/material/Box';
import AccordionDetailsComponent from './AccordionDetailsComponent';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{
                        color: 'white',
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
                            width: '100%',
                            color: 'white',
                            textAlign: 'center',
                        }} >About Me</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Hi there! My name is Dario Dourado, from Faro - Algarve. My fascination with technology began early in life, but just after through experiences in entrepreneurship and accounting I followed my true passion and became a Full Stack Web Developer proficient in <span className='font-bold'>ReactJs</span>, <span className='font-bold'>NodeJs</span>, <span className='font-bold'>Python</span>, and other technologies. Currently, I'm delving into Data Science and AI integration, driven by my enduring curiosity and eagerness to expand my knowledge.
                        With a youthful spirit and dedicated approach, I bring a blend of enthusiasm and professionalism to an innovative project.
                        Let's connect and discuss how we can achieve great things together!
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{
                        color: 'white',
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
                        }} >Experience</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <AccordionDetailsComponent />
                </AccordionDetails>
            </Accordion>


            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{
                        color: 'white',
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
                        }} >Non tech related experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}
