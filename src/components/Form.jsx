import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function Form({ handleSubmit }) {
    const options = ['CSE', 'BBA', 'EEE'];

    const [formData, setFormData] = React.useState({
        fullName: '',
        address: '',
        gender: '',
        age: '',
        lang: {
            eng: true,
            hin: false,
        },
        dep: ''
    })

    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const handleFormData = (event) => {
        // console.log("Event = ",event)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleLangChange = (event) => {
        console.log("Event = ",event)
        setFormData({
            ...formData,
            lang:{
                ...lang,
                [event.target.name]:event.target.checked
            }
        });
    };


    const { eng, hin } = formData.lang;
    return (
        <>
            {console.log(formData)}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="innerForm">
                    <TextField
                        id="outlined-required"
                        label="Full Name"
                        value={formData.fullName}
                        onChange={handleFormData}
                        name="fullName"
                    />

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        maxRows={4}
                        name="address"
                        value={formData.address}
                        onChange={handleFormData}
                    />

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="gender"
                            value={formData.gender}
                            onChange={handleFormData}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={formData.age}
                            label="Age"
                            name="age"
                            onChange={handleFormData}
                        >
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value={'10 - 20'}>10-20</MenuItem>
                            <MenuItem value={'21 - 30'}>21-30</MenuItem>
                            <MenuItem value={'31 - 40'}>31-40</MenuItem>
                            <MenuItem value={'41 - 50'}>41-50</MenuItem>
                            <MenuItem value={'51 - 60'}>51-60</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Known Languages</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={eng} onChange={handleLangChange} name="eng" />
                                }
                                label="English"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={hin} onChange={handleLangChange} name="hin" />
                                }
                                label="Hindi"
                            />

                        </FormGroup>
                    </FormControl>

                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            setFormData({
                                ...formData,
                                dep: newValue
                            })
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                            console.log("Auto Complete = ", newInputValue)
                        }}
                        id="controllable-states-demo"
                        name="dep"
                        options={options}
                        // sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Department" />}
                    />
                    <Button variant="contained" onClick={() => handleSubmit("hi")}>Submit</Button>
                </div>
            </Box>
        </>
    )
}

export default Form