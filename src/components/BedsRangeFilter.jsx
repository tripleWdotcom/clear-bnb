import { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useHistory } from "react-router-dom";



export default function BedSlider(props) {
  let history = useHistory();
  const useStyles = makeStyles({
    bedRange: {
      width: '70%',
      margin: 'auto'
    }
  });

  const classes = useStyles();

  const renderResultcomp = async () => {
    history.push("/home-results");
  }

  const [value, setValue] = useState([1, 10]);

  const handleChange =(event, newValue) => {
    let minB = newValue[0] || 1
    let maxB = newValue[1] || 10

    console.log("minB:", minB, "maxB:", maxB)
   

    localStorage.setItem('bedsNumberMin', minB)
    localStorage.setItem('bedsNumberMax', maxB)

    console.log("??", +localStorage.getItem('bedsNumberMin'))
    console.log("??", +localStorage.getItem('bedsNumberMax')) // why 2? no idea
   
    setValue(newValue);
    renderResultcomp()
  };

  useEffect(() => {
    setValue([1, 10])
  }, [props.clear])
 

  return (
    <div className={classes.bedRange}>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={10}
        min={1}
      
   
      />
      <Typography id="range-slider" gutterBottom>
        Number of beds
      </Typography>
 
    </div>
  );
}
function valuetext(value) {
  return `${value}`;
}



