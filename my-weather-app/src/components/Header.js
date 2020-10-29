import React from 'react';
import '../App.css';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function Header(){
    return(
        <div className="Outer">
            <div className="Head">
                <IconButton>
                    <TwitterIcon/>
                </IconButton>  
                <IconButton>
                    <InstagramIcon/>
                </IconButton>    
                <h1>Weather App</h1>
                <IconButton>
                    <WbSunnyIcon color="primary" fontSize="large"  />
                </IconButton>               
            </div>
        </div>    
    )
}
export default Header