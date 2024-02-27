import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css'
import logo from './logo.png'

const Logo = ()=>{
    return(
        <div className='ma4 mt0' style={{width:'105px'}}>
            <Tilt className='Tilt br2 shadow-2'>
                <div style={{ height: '120px',width: '100px' }}>
                    <img style={{padding:'10px', paddingLeft:'10px'}} src={logo} height={100} alt='logo'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo