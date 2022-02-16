import {useState, useRef} from 'react'
import { Box, Grid, FormControl, TextField, FormHelperText, Typography, Button } from '@material-ui/core'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {

    const contactFormRef = useRef()
    const captchaRef = useRef(null)
    const [formErrorMessage, setFormErrorMessage] = useState({})
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        captchaToken: '',
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setValues({...values, captchaToken: await captchaRef.current.executeAsync})
        captchaRef.current.reset()
        if (!values.name || !values.email || !values.subject || !values.message ){
            setFormErrorMessage({ fields: "Please complete all fields"})
            return
        }
        if (captchaRef && !values.captchaToken) {
            setFormErrorMessage({ fields: "Please complete reCAPTCHA challenge"})
        }
        emailjs.sendForm('service_xmvrwzh', 'template_vleu854', contactFormRef.current,'user_5RbEblyXHTHsx5gUglwlb')
        .then(e.target.reset())
        .catch(err => console.log(err.text))
    }
    return (
        <div>
        <div className="contact-bg" style={{
            backgroundImage: 'url(/IMG_2971.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition:" 20% 20%",
            backgroundAttachment: "fixed",
            width: "100vw",
            height: "100vh"}}>
        <Grid container md={12} maxWidth="md" direction="column" justifyContent="center">
            <Box pt="15vh" width="60%" justifyContent="center" align="center">
                <Grid item container direction="column" justifyContent="center" alignItems="center" style={{maxWidth: "60%", flexBasis: "50%", }}>
                <Typography align="center"  style={{ fontSize: "2.5vh", webkitTextFillColor: "white", textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000" }}>I am currently available for developer work whether full-stack or single-stack, whether full-time or contract.</Typography>
                <Typography align="center"  style={{ fontSize: "2.5vh", webkitTextFillColor: "white", textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000" }}>Please contact me with any questions or relavant opportunities</Typography>
                </Grid>
            </Box>
                <form ref={contactFormRef} onSubmit={handleSubmit}>
                    <Grid container  alignItems="center"style={{display: "flex", flexDirection: "column", margin: "2vh", width: "60%", marginLeft: "0%"}}>
                        <Grid item direction="row"  alignItems="center">
                            <FormControl margin="normal" > 
                                <TextField InputProps={{ style: {fontSize: "2vh", backgroundColor: "white",  textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000" }}} InputLabelProps={{ style: {fontSize: "2vh", webkitTextFillColor: "white",  textShadow: "-1px -1px 1px #000, 1px -1px 1px #000, 1px -1px 1px #000, 1px  1px 1px #000,1px 1px 1px #000,1px 1px 1px #000,-1px  1px 1px #000,-1px 1px 1px #000" }}}variant="outlined" required name="name" label="Name" value={values.name} onChange={handleChange} style={{width:"20vw"}}/>
                            </FormControl>
                            <FormControl margin="normal">
                                <TextField InputProps={{ style: {fontSize: "2vh", backgroundColor: "white",  textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000" }}} InputLabelProps={{ style: {fontSize: "2vh", webkitTextFillColor: "white",  textShadow: "-1px -1px 1px #000, 1px -1px 1px #000, 1px -1px 1px #000, 1px  1px 1px #000,1px 1px 1px #000,1px 1px 1px #000,-1px  1px 1px #000,-1px 1px 1px #000" }}} variant="outlined" required name="email" label="Email" type="email" value={values.email} onChange={handleChange} style={{width:"20vw"}}/>
                            </FormControl>
                        </Grid>
                        <Grid container direction="column"  alignItems="center">
                            <FormControl margin="normal">
                                <TextField InputProps={{ style: {fontSize: "2vh", backgroundColor: "white",  textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000" }}} InputLabelProps={{ style: {fontSize: "2vh", webkitTextFillColor: "white",  textShadow: "-1px -1px 1px #000, 1px -1px 1px #000, 1px -1px 1px #000, 1px  1px 1px #000,1px 1px 1px #000,1px 1px 1px #000,-1px  1px 1px #000,-1px 1px 1px #000" }}} variant="outlined" required name="subject" label="Subject" value={values.subject} onChange={handleChange} style={{width:"40vw"}}/>
                            </FormControl>
                            <FormControl margin="normal" >
                                <TextField InputProps={{ style: {fontSize: "2vh", backgroundColor: "white",  textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000" }}} InputLabelProps={{ style: {fontSize: "2vh", webkitTextFillColor: "white",  textShadow: "-1px -1px 1px #000, 1px -1px 1px #000, 1px -1px 1px #000, 1px  1px 1px #000,1px 1px 1px #000,1px 1px 1px #000,-1px  1px 1px #000,-1px 1px 1px #000" }}} variant="outlined" required name="message" multiline rows={4} label="Message" value={values.message} onChange={handleChange} style={{width:"40vw"}}/>
                            </FormControl>
                            <FormHelperText>
                                {formErrorMessage.fields}
                            </FormHelperText>
                        </Grid>
                        <Grid item   alignItems="center">

                        <ReCAPTCHA
                            sitekey={`${process.env.REACT_APP_C_KEY}`}
                            // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // public key for testing
                            ref={captchaRef}
                            />
                            </Grid>
                        <Grid item alignItems="center">
                            <Button
                                style={{ padding: "2vh 8vh" }}
                                type="submit"
                                variant="contained"
                                size="large"
                                color="primary"
                                >
                            Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
        </Grid>
                                </div>
                                </div>
    )
}

export default Contact
