import React from 'react'
import startups from './startups.jpg'
import unicorn from './unicorn.svg'
import twitter from './twitter.png'
import blend from './blend.png'
import invision from './invision.png'




export const StartupsSectionOne = () => {
    return (
        <>

           <div className="container">
            <div className="sectionOneStartups">
                <div className="row">
                    <div className="col-md-4">
         <span className="sectionOneStartupSpan">

         UNICORN STATUS AWAITS

         </span>
<h4 className="sectionOneStartupsHead">

From incubator to IPO, 
the most successful startups run on the Atlassian suite
</h4>

</div>

<div className="col-md-5">
<img src={startups} className="workFlowImg" alt="" />


</div>



</div>
           </div>
           



           <div className="sectionTwoStartups">
      <div className="row">
       <div className="col-md-6">
        <h4 className="sectionTwoHead">
        For your startup, by our startup

        </h4>

       <p className="sectionTwoPara">

       Regardless of what stage of growth you're in, the Atlassian suite empowers you to accomplish high quality work, faster - as a team. How do we know? Because our tools were the foundation upon which we transformed Atlassian from a startup into a $6B publicly traded company, and our team still relies on these same tools each and every day.

   
       </p>
            
       </div>


       <div className="col-md-6">

       <img src={unicorn} alt="" />

</div>


      </div>
 </div>
           


<div className="sectionThreeStartup">
<h4 className="SectionThreeStartupsHead text-xenter">
The tools supporting more than 140,000 startups worldwide

</h4>

<div className="row">

<div className="col-md-6">

<div className="card" >

  <div className="card-body">
    <p className="card-text"> There was a dramatic dip in email support. Previously we were doing 
    95% email support. Now it's only 15%..</p>
    <span className="card-span">Alex Stillings, IT manager

</span>
<div className="cardImg">
    <img className="card-img-top" src={twitter} alt="Card image cap" />
</div>
  </div>
</div>

<div className="card" >
  <div className="card-body">
    <p className="card-text"> Confluence became the single-source of truth for client facing teams
     and helped them deliver on promises to the customer.  
    95% email support. Now it's only 15%..</p>
    <span className="card-span">
    Terrence Caldwell, Product Marketing Manager 



</span>
    <img className="card-img-top" src={blend} alt="Card image cap" />

  </div>
</div>

</div>

<div className="col-md-5">

<div className="card" >
  <div className="card-body">
    <p className="card-text"> With Atlassian, it’s easy to get started and spin up a solution. I also 
    loved the idea of having a self-serve app marketplace.  
    95% email support. Now it's only 15%..</p>
    <span className="card-span">
    Wendy Stockholm, Director of BizTech




</span>
    <img className="card-img-top" src={invision} alt="Card image cap" />

  </div>
</div>






</div>


</div>




</div>









           
           
           
           
           
            </div>











        </>
    )
}
