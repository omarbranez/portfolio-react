import {useState} from 'react'
import { Box, Grid, FormControl, TextField, FormHelperText, Typography } from '@material-ui/core'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <Grid container xs={12} md={7} direction="column" justify="center">
            <Box pl="10vw" pt="20vh">
            <Typography variant="h4">I am currently available for developer work whether</Typography>
            <Typography variant="h4">full-stack or single-stack, or full-time or contact.</Typography>
                <form>
                    <Grid container direction="column">
                        <Grid container direction="row">
                        <FormControl margin="normal"> 
                            <TextField variant="outlined" name="name" label="Name" value={values.name} onChange={handleChange}/>
                        </FormControl>
                        <FormControl margin="normal">
                            <TextField variant="outlined" name="email" label="Email" value={values.email} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <FormControl margin="normal">
                            <TextField variant="outlined" name="subject" label="Subject" value={values.subject} onChange={handleChange}/>
                        </FormControl>
                        <FormControl margin="normal">
                            <TextField variant="outlined" name="message" multiline rows={4} label="Message" value={values.message} onChange={handleChange}/>
                        </FormControl>
                    </Grid>
                </form>
            </Box>
        </Grid>
    )
}

export default Contact
