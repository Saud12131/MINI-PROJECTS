import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css'

export default function InfoBox({info}) {
    return ( 
        <div className="infobox">

          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media1.popsugar-assets.com/files/thumbor/zvrJf2kz_nDKJYyFlWXUELiyiD8/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2015/10/21/798/n/1922507/5c8042718da5def7_weather/i/New-cloud-emoji-all-your-weather-related-needs.png"
      />

      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        {info.CITY} 
        <Typography variant="body2" color="text.secondary">
       Humidity = {info.HUMIDITY}
       <br />
       Tempreature = {info.TEMP}
       <br />
       Min_Tempreature = {info.MIN_TEMP}
       <br />
       Max_Tempreature = {info.MAX_TEMP}
       <br />
       It feels like {info.FEELS_LIKE} and the weather is {info.WEATHER}
        </Typography>
        
      </CardContent>
      
    </Card>
</div>  
    );
}