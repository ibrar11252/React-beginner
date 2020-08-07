import React from 'react'
import smallbiz from './small-biz.png'

export const BusinessSectionOne = () => {
    return (
        <>
            <div className="container">
           <div className="businessSectionOne">
        <h3 className="businessSectionOneHead text-xenter">

        The Atlassian suite helps small 
        businesses create big solutions
        </h3>
         <div className="row">
             <div className="col-md-4">
         <h5 className="sectionOneHead">
         Keep up the momentum

         </h5>
       <p className="SectionOnePara">
       Whether you’re on the brink of being a thriving large business or running full steam ahead from your startup days, our
        tools are built to scale along side you for every phase.
       </p>

             </div>

             <div className="col-md-4">

             <h5 className="sectionOneHead">
             Connect tools and teams

         </h5>
       <p className="SectionOnePara">
       Avoid silos early by integrating your teams and SaaS tools to keep communication
        transparent, knowledge central, and actions agile.
       </p>
                 
             </div>

             <div className="col-md-4">

             <h5 className="sectionOneHead">
             Build foundations for longterm success

         </h5>
       <p className="SectionOnePara">
       Success takes more than just tools. It’s about the right people, plays, and practices, which we’v
       e documented from personal experience - just for you..
       </p>
                 
             </div>
         </div>
            </div>

        <div className="sectionTwoBusiness">
          <button className="btn btn-primary ">
              Get atlassian software for free
          </button>
        <div className="row">
        <div className="col-md-5">
        <h4 className="sectionTwoBusinessHead">

        </h4>
<p className="sectionTwoBusinessPara">
Managing a small business with limited resources and budget is a challenge. But with the right tools, plays, and processes in place, you can build the foundations for success that will 
take you from a small company to a growing business
</p>
        </div>
  
        <div className="col-md-5">
<img src={smallbiz} alt="" className="jiraImg" />

        </div>




        </div>





        </div>







            </div>



        </>
    )
}
