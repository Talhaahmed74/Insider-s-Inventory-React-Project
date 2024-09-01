import React from 'react'
import './Cards.css'
import Btn from '../Btn/Btn'
import Property from '../../imgs/Property.png'
import location from '../../imgs/location.png'
export default function Cards() {
  return (
    <div className='cards-Div'>
      <div className="img-Div">
        <img src={Property} alt=''></img>
        <div className='status-Div'>
            <h2 >Vacant</h2>
        </div>
      </div>
         <div className="property-info-div">
                <div className='card-section' >
                    <div className="card-text">Initial Investment</div>
                    <div className="card-figures">$45,120</div>
                </div>
                <hr />
                <div className='card-section' >
                    <div className="card-text">Potential ROI</div>
                    <div className="card-figures">37%</div>
                </div>
         </div>
         <div className="Home-Info">
            <h2>Luxury Apartment</h2>
            <p className='green-Text'>$450,000</p>
         <div className="home-Rooms-Info">
              <span>3 bedroom</span>
             <span className="separator">|</span>
             <span>1 bathroom</span>
             <span className="separator">|</span>
             <span>971 sq. ft.</span>
         </div>
            <div className="location-Div"> 
           <p className='green-Text'><img src={location} alt='' />Australia</p>
         </div>
         <Btn text='Login to make an offer'/>
        </div>

            
    </div>
  )
}
