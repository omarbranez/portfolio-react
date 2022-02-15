import {useState, useRef} from 'react'
import { Box, Grid, FormControl, TextField, FormHelperText, Typography, Button } from '@material-ui/core'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const contactFormRef = useRef()
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_xmvrwzh', 'template_vleu854', contactFormRef.current,'user_5RbEblyXHTHsx5gUglwlb')
        .then(e.target.reset())
        .catch(err => console.log(err.text))
    }
    return (
        <Grid container xs={12} md={7} direction="column" justifyContent="center">
            <Box pl="10vw" pt="20vh">
            <Typography variant="h4">I am currently available for developer work whether</Typography>
            <Typography variant="h4">full-stack or single-stack, or full-time or contact.</Typography>
                <form style={{ width: "45vw", marginTop: "3vh" }} ref={contactFormRef} onSubmit={handleSubmit}>
                    <Grid container direction="column">
                        <Grid container direction="row" >
                        <FormControl margin="normal"> 
                            <TextField variant="outlined" required name="name" label="Name" value={values.name} onChange={handleChange}/>
                        </FormControl>
                        <FormControl margin="normal">
                            <TextField variant="outlined" required name="email" label="Email" type="email" value={values.email} onChange={handleChange}/>
                        </FormControl>
                        </Grid>
                        <FormControl margin="normal">
                            <TextField variant="outlined" required name="subject" label="Subject" value={values.subject} onChange={handleChange}/>
                        </FormControl>
                        <FormControl margin="normal">
                            <TextField variant="outlined" required name="message" multiline rows={4} label="Message" value={values.message} onChange={handleChange}/>
                        </FormControl>
                        <Box mt={4} display="flex" justifyContent="center" pt={1}>
                                <Button
                                    style={{ padding: "2vh 8vh" }}
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </Box>
                    </Grid>
                </form>
            </Box>
        </Grid>
    )
}

export default Contact
