import React from 'react'
import jira from './sectionOneJira.png';
import paraTwo   from './paraTow.png';
import releases from './releases.png'
import knowledge from './knowledge.svg'
import integ from './integ.svg'
import development from './development.svg'
import roadmap from './roadmap.png'
import access from './access.svg'
import software from './software.svg'
import privacy from './privacy.png'
import encrypt from './encrypt.png'
import compliance from './compliance.png'




export const JiraSectionOne = () => {
    return (
        <>
         <div className="jiraSectionOne">
         <div className="container">
             
             <div className="row">
     <div className="col-md-6">

     <h3 className='jiraSectionOneTitle'>

     The #1 software development tool used by agile teams


     </h3>

<button className="btn btn-primary">

    Get it free
</button>

     </div>

     <div className="col-md-6">

    <img src={jira} className="jiraImg" alt="" />



     </div>

</div>




<div className="sectionTwoJira">
<h5 className="jiraTitle">


The best software teams ship early and often.

</h5>
<p className="jiraPara">

Jira Software is built for every member of your software team to plan,
track, and release great software.
</p>


<div className="row">

<div className="col-md-7">

<img src={paraTwo} className="jiraImg" alt="" />

</div>


<div className="col-md-5">

  <h5 className="plan">Plan</h5>
   <p className="planPara">Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>

   <br />

    <h5 className="track">
        Track
    </h5>
<p className="trackPara">

Prioritize and discuss your team’s work in full context with complete visibility.
</p>


</div>



</div>

</div>



<div className="sectionThreePara">

<div className="row">




<div className="col-md-4">
<h5 className="release">Release</h5>
<p className="releasePara">

Ship with confidence and sanity knowing the information you have is always up-to-date.
</p>
<br />


<h5 className="report">Report</h5>
<p className="reportPara">

Improve team performance based on real-time, visual data that your team can put to use.
</p>

</div>

<div className="col-md-8">

    <img src={releases} className="jiraReleaseImg" alt="" />
</div>




</div>
</div>







<div className="sectionFourJira">
<h5 className="sectionFourJiraTitle">
Integrate with the tools you already use

</h5>

<p className='sectionFourJiraPara'>Upgrade your workflow with Confluence, Bitbucket, and hundreds of other developer tools.

</p>

<div className="row">
    <div className="col-md-4">

<div className="card" >
  <img className="card-img-top" src={knowledge} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className="col-md-4">

<div className="card" >
  <img className="card-img-top" src={development} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>


<div className="col-md-4">
<div className="card">
  <img className="card-img-top" src={integ} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div>

</div>

</div>



<div className="sectionFiveJira">

   <div className="row">
    <div className="col-md-5">

   <h4 className="sectionFiveHead">
   Connect your team's work to your product roadmap 
   </h4>
  <p className="sectionFivePara">

  Ship faster and more reliably by building smarter plans for your team and for your organization.
  </p>

  <button className="btn">
      learn more about rodemaps
  </button>
    </div>


     <div className="col-md-7">

         <img src={roadmap} className="jiraReleaseImg" alt="" />
     </div>



   </div>


</div>



<div className="sectionSixJira">
 <h4 className="sectionSixJiraHead">
 Streamline your work with automation

 </h4>
<p className="sectionSixJiraPara">
Save time, stay focused and work smarter with Jira automation. 


</p>

<button className="btn">Learn more about automation</button>

</div>




<div className="sectionSevenJira">

<h4 className="sectionSevenJiraHead">

Designed for security and scale
</h4>

<p className="sectionSevenJiraPara">
Gain peace of mind with enterprise-grade solutions tailor-made to secure and scale Jira Software across your entire organization.
</p>


<div className="row">
    <div className="col-md-5">
<div className="card" >
  <img className="card-img-top" src={access} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Atlassian Access
</h5>
    <p className="card-text">Sleep soundly with enhanced administration and security backed by SAML SSO, enforced 2-step verification, automated user provisioning, and more.</p>
  </div>
</div>
</div>

<div className="col-md-5">

<div className="card" >
  <img className="card-img-top" src={software} alt="Card image cap" />
  <div className="card-body">
      <h5 className="card-title">Jira Software Premium

</h5>
    <p className="card-text">Ensure your team and organization are ready to scale with 99.9% uptime SLAs, unlimited storage, 24x7 Premium Support, and more.</p>
  </div>
</div>
</div>

</div>

</div>




<div className="sectionEightJira">
<div className="row">
    <div className="col-md-4">
<div className="card" >
  <img className="card-img-top" src={privacy} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Privacy
</h5>
    <p className="card-text">Jira Software invested in GDPR and Privacy Shield to ensure all data is handled with care</p>
  </div>
</div>
</div>


<div className="col-md-4">
<div className="card" >
  <img className="card-img-top" src={encrypt} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Data Encryption

</h5>
    <p className="card-text">SJira Software leverages encryption in transit and at rest to safeguard your organization's data.</p>
  </div>
</div>
</div>



<div className="col-md-4">
<div className="card" >
  <img className="card-img-top" src={compliance} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Compliance
</h5>
    <p className="card-text">Verify Jira Software's security with SOC2, SOC3, ISO 27001, ISO 27018, PCI DSS, and more.</p>
  </div>
</div>
</div>







</div>


</div>


             </div>
             
             
             
             
             </div> 












        </>
    )
}
