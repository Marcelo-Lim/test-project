import React,{useState} from 'react'
import './Profile.css'
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from '../../styles/color.styles'
import { Grid, Container, DialogActions, Button, Paper, Dialog } from '@material-ui/core';

const Profile=({teamProfile})=>{
    const classes = useStyles();
   
    const [open, setOpen] = React.useState(false);
    
    const [current,setCurrent]= useState([]);
   
    const handleClose = () => {
      setOpen(false);
    };
   
    const clickMe=(persons)=>{
       setCurrent(persons)
       setOpen(true);
      
       
    }

    
   
    return(
        
       <div className="ProfileSection">
           <div className="Wrap">
               <Grid container spacing={2}>
           {teamProfile.map((persons,index)=>{
               const {id,name}=persons;
           
               return(
                  <Grid item key={index} xs={12} md={6} lg={3}>
                   
                            <div className={classes.paper}>
                                 <Paper elevation={2}  >
                        <div className={classes.upper}>
                            <div className="imageContainer">
                              <img src={persons.image} alt="person" height="100px" width="100px"/>
                            </div>
                            </div>
                            <div className={classes.bot}>
                           
                                <h1>{persons.name}</h1>
                                <h3>{persons.position}</h3>
                              
                           
                            
                           
                            </div><div className={classes.bons}>
                            <Button variant="contained" className={classes.button} onClick={()=>clickMe(persons)}>See Details</Button>
                            </div>
                            </Paper>
                            </div>
                        
                           
                        
                      
                 </Grid> 
               )
              
            })}
             </Grid>
           </div>
           <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
           
                <div className={classes.paper}>
                <Container maxWidth="md" >
                    <div className={classes.bots}>
                    <div className="imageContainers">
                        <img src={current.image} alt="test"/>
                    </div>
                <h1>{current.name}</h1>
                <h2>{current.position}</h2>
                <h6>{current.school}</h6>
                </div>
                
                </Container>
                </div>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.buttons}>Close</Button>
                </DialogActions>
            </Dialog>
          
       </div>
       
    )
    
}
 


const useStyles = makeStyles((theme) => ({
    root:{   
        borderRadius: "1rem",
        margin: 'clamp(2rem,4vw,1rem)',
        maxWidth: 365,
        textAlign:"center"
      },
    upper:{
        height: "100px",
        
        background: COLORS.GREEN_GRADIENT2
    },
    all:{
        margin: 'clamp(2rem,4vw,1rem)',
        maxWidth: 500,
        height: 450, 
    },  
    bons:{
        textAlign:"center",
    padding: theme.spacing(2)
    },
    paper:{
        marginTop: theme.spacing(3),
        padding: theme.spacing(2) 
     },
    button:{
        fontSize:'clamp(1rem,2vw,1rem)',
        fontFamily:"Aharoni",
        maxWidth:"md",
        borderRadius: '3em',
        alignItems:"center",
        backgroundColor: COLORS.GREEN3
    },
    buttons:{
        fontSize:'clamp(1rem,2vw,1rem)',
        fontFamily:"Aharoni",
        borderRadius: '2em',
        alignItems:"center",
        backgroundColor: COLORS.GREEN3
    },

    bot:{
        textAlign:"center",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3)
    },
    bots:{
        textAlign:"center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    }
}));
export default Profile;