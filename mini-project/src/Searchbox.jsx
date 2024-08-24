import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css'
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({ updateinfo }) {
    let [city, setcity] = useState("");
    let [error, seterror] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "cc89aa48be73407a7509cf81c9b5eb68";
        let getwetherinfo = async () => {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            )
            let jsonresponse = await response.json();
            console.log(jsonresponse);

            let result = {
                FEELS_LIKE: jsonresponse.main.feels_like,
                HUMIDITY: jsonresponse.main.humidity,
                TEMP: jsonresponse.main.temp,
                MIN_TEMP: jsonresponse.main.temp_min,
                MAX_TEMP: jsonresponse.main.temp_max,
                WEATHER: jsonresponse.weather[0].description,
                CITY: jsonresponse.name,
            }
            console.log(result);
            return result;
        }

    let handelchnage = (evt) => {
        setcity(evt.target.value);
    }

    let handelsubmitt = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setcity("");
            let newinfo = await getwetherinfo();
            updateinfo(newinfo);
        }catch(err){
            seterror(true);
        }
       
    }

    return (
        <div className='searchbox'>

            <form onSubmit={handelsubmitt}>
                <TextField id="search-box" label="enter city" variant="outlined" value={city} onChange={handelchnage} className='textarea' />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}