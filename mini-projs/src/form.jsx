import { Button, TextField, Checkbox, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './form.css';

export default function Form() {
    const successTst = () => toast.success('Message sent!');
    const errorTst = () => toast.error('Please fill in all the fields!');

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const [queryType, setQueryType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname || !lastname || !email || !message || !checkBox || !queryType) {
            errorTst();
        } else {
            successTst();
            console.log('Successfully submitted');
        }
    };

    return (
        <div className="form-container">
            <ToastContainer />
            <div className="form-inner">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>

                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormLabel component="legend" className="query-label">Query Type</FormLabel>
                    <RadioGroup
                        row
                        value={queryType}
                        onChange={(e) => setQueryType(e.target.value)}
                        className="query-type"
                    >
                        <FormControlLabel value="general" control={<Radio />} label="General Enquiry" />
                        <FormControlLabel value="support" control={<Radio />} label="Support Request" />
                    </RadioGroup>

                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={checkBox} onChange={(e) => setCheckBox(e.target.checked)} />}
                        label="I consent to being contacted by the team"
                    />

                    <Button type="submit" variant="contained" fullWidth className="submit-button">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

