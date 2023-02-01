import { useState } from 'react';
import {
    Stack,
    Box,
    TextField

} from '@mui/material';
// component
import CustomButton from './CustomButton/CustomButton';
// services login
import login from '../services/login';


const Card = () => {

    const [user, setUser] = useState('');


  return (
    
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{
        minHeight: '80vh',
        backgroundColor: "#e8e8e8",
    }}
    >
        <h2>
            Faça Login
        </h2>
        <Box
            m={3}
            component="form"
            noValidate
            autoComplete="off" 
            sx={{
                backgroundColor: "#fff",
                '& .MuiTextField-root': { m: 5, width: 'auto' },
            }}
        >
            <TextField
            required
            id="outlined-required"
            label="User"
            type="text"
            defaultValue={user}
            onChange={(e) => setUser(e.target.value)}
            />
            
            <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />

            <CustomButton onClick={() => login(user)} />
        </Box>
    
    </Stack>

  )
}

export default Card