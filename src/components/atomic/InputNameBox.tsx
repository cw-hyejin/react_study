import React from 'react'
import {
    Box,
    TextField,
    Typography
  } from '@material-ui/core';
  
const InputNameBox: React.FC = () => {
    return (
        <TextField
            error={Boolean()}
            fullWidth
            helperText={''}
            label="First name"
            margin="normal"
            name="firstName"
            // onBlur={}
            // onChange={handleChange}
            // value={values.firstName}
            variant="outlined"
      />
    )
}

export default InputNameBox;