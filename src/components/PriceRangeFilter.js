import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useHistory } from "react-router-dom";




export default function PriceSlider() {
  let history = useHistory();
  const useStyles = makeStyles({
    priceRange: {
      width: 300,
    }
  });
  const classes = useStyles();

  const renderResultcompPrice = async () => {
    history.push("/home-results");
  }
  //const { housesByCityAndDate} = useContext(HouseContext)

 

  const [value, setValue] = useState([10, 500]);

  const handleChange = (event, newValue) => {
    let minB = newValue[0] || 50
    let maxB = newValue[1] || 1000

    //onmouseup(console.log("mouse is up"))

   // console.log("minB:", minB, "maxB:", maxB)

    localStorage.setItem('priceMin', minB)
    localStorage.setItem('priceMax', maxB)

    setValue(newValue);
    renderResultcompPrice()
  };

  return (
    <div className={classes.priceRange} style={{width: '100%'}}>
    
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={500}
        min={10}

      />
      <Typography id="range-slider" >
        Price per Night
      </Typography>
      <br /> <br />
    </div>
  );
}
function valuetext(value) {
  return `${value}`;
}


