import React from 'react'
import atlasianTeam from './atlasianTeam.jpg'
import webinar from './webinar.jpg'



export const Events = () => {
    return (
        <>

       <div className="events">
       <div className="container">
       <div className="row">
           <div className="col-md-4">
       <h4 className="eventsHead">

           Our Events
       </h4>

     <p className="eventsPara">

     Join us and explore innovative ways to work. Get access to product announcements, 
     enterprise solutions, and insights into modern teamwork

     </p>
  <a href="#">See all events</a>

       </div>



       <div className="col-md-4">

       <div className="card" >
  <img className="card-img-top" src={atlasianTeam} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Team Tour: Enterprise Edition
</h5>
    <p className="card-text">Explore global enterprise trends and learn best practices 
    at scale during this free, digital event series..</p>
    <a href="#" className="btn btn-primary">Learn more</a>
  </div>
</div>





       </div>



       <div className="col-md-4">

<div className="card" >
<img className="card-img-top" src={webinar} alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Summit Webinar Series

</h5>
<p className="card-text">Experience the best ideas, talks, and inspiration 

from Summit 2020 during our newest digital event series.</p>
<a href="#" className="btn btn-primary">Learn more</a>
</div>
</div>





</div>









       </div>

</div>
</div>



        </>
    )
}
