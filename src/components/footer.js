import React from 'react'
import { Container, Grid, Box, Link} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const footer = () => {
    return (
        <footer>
            <Box
            px={{ xs: 3, sm: 5 }}
            py={{ xd: 5, sm: 5 }}
            borderTop= {0}    
            bgcolor="lightgray" 
            color="black"
            >
                <Container maxwidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Help</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Contact
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Support
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Privacy
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Account</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Login
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Register
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Messages</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Backup
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        History
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Roll
                                    </Link>
                                </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>About</Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        About JohnDoe
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Careers
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Terms of Use
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit">
                                        Privacy Policies
                                    </Link>
                                </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                    <FacebookIcon fontSize="large" />
                    <InstagramIcon fontSize="large" />
                    <TwitterIcon fontSize="large" />
                    </Box>
                    <Box textAlign="center" pt={{xs: 5, sm: 5 }} pb={{xs:5, sm: 0}}>
                        JohnDoe &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default footer
