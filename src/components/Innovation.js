import React from 'react'
import airBnb from './airBnb.png'
import kaiser from './kaiser.png'
import nasa from './nasa.png'
import ebay from './ebay.png'
import cisco from './cisco.png'
import redfin from './redfin.png'
 
import car from './car.jpg'
import quote from './quote.svg'



export const Innovation = () => {
    return (
        <>
            
          <div className="container">

         <div className="innovation">

     <h3>Powering innovation at 170,000 <br />
     companies worldwide</h3>
 
    <div className="innovationIcons">
        <div className="row">
            <div className="col-md-12 column">
  <img src={airBnb} alt="img" />
  <img src={cisco} alt="img" />
  <img src={ebay} alt="img" />
  <img src={car} alt="img" />
  <img src={redfin} alt="img" />
  <img src={nasa} alt="img" />
  <img src={kaiser} alt="img" />
</div>
</div>


    </div>



    <div className="card">
  <img className="card-img-top" src={quote} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">You can decide how you are working as a team first and then let Jira work around you.
</h5>
    <span className="card-story">Customer Story</span>
    <p className="card-text">Cancer Research Institute
</p>
    <a href="#" className="btn btn-primary">read the story</a>
  </div>
</div>



         </div>


          </div>








        </>
    )
}
