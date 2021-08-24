import React from 'react'
import nature from '../../../assets/video/backVid.mp4';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles, Button} from '@material-ui/core'
import {COLORS} from '../../../styles/color.styles'

const Hero = ()=>{  
    const classes =useStyles()
    return(
        <div className={classes.HeroContainer} >
            <div className={classes.HeroBg}>
                <video src={nature} autoPlay loop muted className={classes.VideoBg}/>
            </div>
            <div className={classes.HeroContent}>
               <div className={classes.HeroItems}>
                <h1 className={classes.Heroh1}> Let's Protect our Nature</h1>
                <p className={classes.Herop}>Enjoy our nature while protecting it.
                </p>
                    <Button variant="contained" className={classes.buttons}>Get Started<ArrowForwardIosIcon/></Button>
            </div>
            </div> 
        </div>
    )
}

const useStyles = makeStyles((theme)=>({
    HeroContainer:{
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '0 1rem',
        position: 'relative',
     
        color: '#fff'

    },
    HeroBg:{
        position: 'absolute',
        top: 0,
        bottom:0,
        right: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    HeroContent:{
        zIndex: 4,
        height: 'calc(100vh - 80px)',
        maxHeight: '100%',
        padding: '0rem calc((100vw - 1300px)/2)'
    },
    HeroItems:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
        height: '100vh',
        maxHeight: '100%',
        padding: 0,
        color: '#fff',
        lineHeight: 1.1,
        fontWeight: 'bold'
    },
    Heroh1:{
        fontSize: 'clamp(1.5rem,6vw,4rem)',
        marginBottom: '1.5rem',
        letterSpacing: '3px',
        padding: '0 1rem'
    },
    Herop:{
        fontSize: 'clamp(1rem,2vw,2rem)',
        marginBottom: '2rem',
        fontWeight:400
    },
    VideoBg:{
       width: '100%',
       height: '100%',
       objectFit: 'cover',
       OObjectFit:'cover'
    },
    buttons:{
        fontSize:'clamp(1rem,3vw,2rem)',
        fontFamily:"Aharoni",
        maxWidth:"md",
        borderRadius: '3em',
        backgroundColor: COLORS.GREEN3
      },
    
}))
export default Hero