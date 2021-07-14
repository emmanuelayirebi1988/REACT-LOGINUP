import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login = () => {

    const paperStyle = { padding: 20, height: '80vh', width: "20vw", margin: "20px auto", backgroundColor: 'gray'}
    const avatarStyles = { backgroundColor: 'green', marginTop: "50px"}
    const btnstyle = { marginTop: '20px', borderRadius:"10px"}
    return (
        <Grid className="gird">
            <Paper className="paper" elevation={10} style={paperStyle}>

                    <Grid  className="space" align='center'>
                        <Avatar style={avatarStyles}>< LockOutlinedIcon /></Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <TextField style={{marginTop:"20px"}} className="space" label='Username' placeholder='Enter username' fullWidth required />
                    <TextField style={{marginTop:"20px"}} className="space" label='Password' placeholder='Enter password' type='password' fullWidth required />
                    
                    <FormControlLabel
                         className="space" style={{ float: "left", marginTop:"20px"}}
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button  className="space" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography className="space" style={{marginTop:"20px"}} >
                        <Link href="#" style={{marginTop:"20px"}}>
                            Forgot password ?
                        </Link>
                    </Typography> Do you have an account ?
                    <Typography style={{marginTop:"20px"}} className="space" >
                        <Link href="#" >
                            Sign Up
                        </Link>
                    </Typography>
              
            </Paper>
        </Grid>
    );
}

export default Login 