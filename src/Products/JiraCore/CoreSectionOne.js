import React from 'react'
import FinishingTask from './FinishingTask.png'
import proj from './proj.png'
import monitor from './monitor.png'
import meas from './meas.png'
import workFlow from './workFlow.gif'

export const CoreSectionOne = () => {
    return (
    <>

<div className="container">
            <div className="coreSectionOne">
                <div className="row">
             <div className="col-md-4">
                 <h3 className="coreSectionOneHead">

                 Business project management software

                 </h3>
                 <button className="btn btn-primary">

               get it free
                 </button>
                 </div>     
                   

                   <div className="col-md-8">
   <img src={FinishingTask} className="jiraReleaseImg" alt="" />

</div>
                   </div>
            
            
            </div>


<div className="coraSectionTwo">
<h4 className="coraSectionTwoHead text-center">
See all project information at a <br/> glance with Jira Core

</h4>

<p className="coraSectionTwoPara text-center" >
Manage your projects and keep your team organized.


</p>


<div className="row">
 <div className="col-md-3">
<img src={proj} className="coreImg" alt="" />
<h4 className="projHead">Manage projects</h4>

 </div>

 <div className="col-md-3">
 <img src={monitor} className="coreImg" alt="" />
<h4 className="projHead">Monitor details
</h4>
     
 </div>


 <div className="col-md-3">

 <img src={meas} className="coreImg" alt="" />
<h4 className="projHead">Measure performance</h4>
</div>


</div>



</div>




<div className="coraSectionThree">
<div className="row">
<div className="col-md-6">

<img src={workFlow} className="workFlowImg" alt="" />
</div>

<div className="col-md-6">
<h5 className="coraSectionThreeHead">


Manage projects

</h5>
    
<p className="coraSectionThreePara">

Managing projects and tasks in Jira Core starts with a workflow. Workflows define your process and enable your team to track tasks. Jira Core Cloud instances also have boards that allow you to visualize your workflows and drag and drop tasks fro
to-do to done. Currently available in cloud offering only.   
</p>



</div>



</div>



</div>


<div className="coraSectionFour">
    <div className="row">
        <div className="col-md-5">
<iframe width="420" height="315"
src="https://youtube.com/embed/WSS7iWdmlWw">
</iframe>
</div>


<div className="col-md-5">

<p className="coraSectionFourPara">

"Jira Core brings so many benefits to any team that
 does anything following a process."

GEORGE LEWE
LUFTHANSA SYSTEMS

</p>




</div>





</div>
</div>
            </div>










        </>
    )
}
