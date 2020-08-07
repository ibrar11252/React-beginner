import React from 'react'
import people from './people.jpg'
import arrow from './arrow.png'
import objectives from './objectives.jpg'
import response from './response.jpg'

export const Practices = () => {
    return (
        <>

       <div className="container">     
    <div className="practice">

     <h1>Our Practices</h1>
    <p className="practicePara">Great teamwork requires more than just great tools.
        
     Check out our proven methods, guides, and exercises that help make work 
     better, and people happier.</p>

     <a href="#">See all plays</a>




     <div className="card-group">
  <div className="card">
  <img className="card-img-top" src={arrow} alt="Card image cap" />

    <div className="card-body">
      <h5 className="card-title">Retrospective</h5>
      <p className="card-text">Provide a safe space to discuss what worked
      and worked didnt.</p>
     

     <a href="#">See what worked</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={people} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">DACI decision making framework</h5>
      <p className="card-text">define each person role in making high imapct decisions.</p>
      <a href="#">Make group decisions</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={response} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Role and responsibilities</h5>
      <p className="card-text">clarify who does what,plus identify gaps and groups.</p>
     <a href="#">Get everyone on track</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={objectives} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Objectives and key results</h5>
      <p className="card-text">Explore a problem space and orgnize ur ideas</p>
   <a href="#">Set clear goals</a>
    </div>
  </div>
</div>

   </div>
    </div>




        </>
    )
}
