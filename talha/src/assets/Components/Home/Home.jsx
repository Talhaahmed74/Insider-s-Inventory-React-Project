import React from 'react'
import './Home.css'
import Btn from '../Btn/Btn'
import NavBar from '../NavBar/Nv'
import RightArrow from '../../imgs/rightArrow.png'
import LeftArrow from '../../imgs/leftArrow.png'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer' 
import PropertyType from '../Property-Type/PropertyType'
const Home = () => {
  return (
    <div>
     <NavBar/> 
      <section className="Home-Page-section">
                <div className="sub-Heading-Div">Insiders Off-Market Inventory</div>

                <div className="main-Heading"> Your <span>Next Opportunity</span> Awaits</div>
                <div className="text-Div">Unlock Exclusive Opportunities at Insider's Inventory, specializing in Buy & Hold, Owner-Occupied Retail, and Lucrative Flip Ventures. Discover your path to profitable real estate investments period.</div>
                <div className="btn-Div">
                    <Btn
                        text='Submit an Off-Market Property'
                    />
                    <Btn
                        text='View our Off-Market Inventory' style={{ background: 'transparent', color: '#4DAD49',
                           border: '1px solid #4DAD49' }}/>
                </div>
      </section>
      <section className='OffMarket-Property-sec2'>
        <div className='sub-Heading-sec2'>
        <h2>Off-Market<span>Properties</span></h2>
        </div>
        <div className="Arrow-btn-Div">
          <btn><img src={LeftArrow}></img></btn>
          <btn><img src={RightArrow}></img></btn>
        </div>
        </section>
        <section className='OffMarket-Property-cards'>
        <Cards status ='Vacant'/>
        <Cards status ='Owner-Occupied'/>
        <Cards status ='Tenant-Occupied'/>
      </section>
      <section className='offMarket-PropertyType-Div'>
        <h2>Off-Market<span>Property Types</span></h2>
        <div className='Types-Div'>
          <PropertyType description='Secure your future with our Buy & Hold properties, offering stability and long-term growth potentia'/>
          <PropertyType text='Retail - Owner Occupant' description='Tailored Retail Spaces for Owner-Occupied Success in Prime Locations.'/>
          <PropertyType text='Flip Opportunities' description='Seize Profit Potential: Explore High-Yield Flip Opportunities with '/>
        </div>
      </section>
       <Footer/> 
    </div>
  )
}

export default Home
