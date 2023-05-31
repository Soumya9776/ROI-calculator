import React, { useState } from 'react'
import "../components/calculator.css"
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import cake from '../components/cake.png';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Calculator() {

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    const [accordionText, setAccordionText] = useState('Show details');


    const setAccordionOpen = () => {
        if (accordionText === 'Show details') {
            setAccordionText('Hide details');
        } else {
            setAccordionText('Show details');
        }

    }
    return (
        <div>
            <div className='wraper'  >

                <div className='head-section'>
                    <div className="close-icon"><CloseIcon /></div>
                    <div className='calculator-text'>Calculator</div>

                </div>
                <div className='cake-section'>
                    <img className='cake-img' src={cake} alt='cake' />
                    <span className='cake-text '>cake</span>
                    <span className='switch-calculator'><Switch size="small"  {...label} defaultChecked color="default" /></span>
                    <span className='usd-text'>USD</span>
                </div>
                <div className='second-section'>
                    <span className='cake-value'>2.10000 cake  </span>
                </div>
                <div className='section3'>
                    <span className='usebalance'>USE BALANCE</span>
                    <span className='thousand'> $1000</span>
                    <span className='hundred'>$100</span>
                    <span className='blank'></span>
                    <span className='twenty'>~$20.82</span>
                </div>
                <div className='timeframe'>Timeframe</div>
                <div className='section4'>
                    <span className='day1'>1 Day</span>
                    <span className='day'>7 Days</span>
                    <span className='day'>30 Days</span>
                    <span className='day'>1 Year</span>
                    <span className='day'>5 Years</span>
                </div>
                <div className='section5'>
                    <span className='Apy'>Enable Accelerated Apy</span>
                    <span className='switch'><Switch className='switchicon'{...label} color="default" /></span>
                </div>
                <div className='section6'><span className='tier'>Select Tier</span></div>
                <div className='Tiers'>
                    <span className='tier-no'><span className='T-no1'>Tier1</span></span>
                    <span className='tier-no'>Tier2</span>
                    <span className='tier-no'>Tier3</span>
                    <span className='tier4'>Tier4</span>
                    <span className='tier-no'>Tier5</span>
                </div>
                <div className='section7'><span className='ROI'>ROI at Current Rates</span></div>

                <div className='section8'>
                    <span className='edit'><EditOutlinedIcon className='e-icon' /></span>
                    <span className='cake-value2'>100.0 USD  </span>
                </div>
                <div><span className='section9'>~3CAKE + 10 DON</span></div>
                <div className='section10'>
                    <button className='apply'>Apply</button>
                    <button className='cancel'>Cancel</button>
                </div>
                <div className='section11'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            onClick={() => setAccordionOpen()}
                        >
                            <Typography>{accordionText}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component={'div'}>
                                <div className='show-details'>
                                    <div className='show-details-left'>APY</div>
                                    <div className='show-details-right'>63.34%</div>
                                </div>
                                <div className='show-details-text'>
                                    <ul>
                                        <li>Calculated based on current rates</li>
                                        <li>All fugures are estimates provided for your convenience only,
                                            and by no means represent guaranted returns.</li>
                                    </ul>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}