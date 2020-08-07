import React from 'react'
import { Link } from 'react-router-dom';





export const Navbar = () => {
    return (
        
<div>       
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Atlassian</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">
        <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
         <div className="row">
       
        <div className="col-md-3">


            <h5 className="nav-title">PLAN,TRACK , SUPPORT</h5>
          
            <div className="sameColSize">

   <Link to='/jira'>   <i class="fa fa-heartbeat icons" aria-hidden="true"> </i>
       </Link>     

        <span className="head">Jira software</span>
        <p className="para">Project and issue tracking</p> 
</div>

<div className="sameColSize">

      <Link to='/jiraalign'>  <i class="fa fa-tree icons" aria-hidden="true">
        </i></Link>
        <span className="head">Jira Align</span>
        <p className="para">Enterprise agile planning</p>
</div>
<div className="sameColSize">

     
<Link to='/jiracore'>   <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Jira Core</span>
        <p className="para">Essential business management</p> 
</div>

<div className="sameColSize">

  
<Link to='/jiraservicedesk'>      <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Jira Service Desk</span>
        <p className="para">Colloborative IT service management</p>
        </div>

        <div className="sameColSize">

       
      <Link to='/opsgenie'> <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Opsgenie</span>
        <p className="para">Modern incident management</p> 
        </div>

        <div className="sameColSize">

      
        <Link to='/statuspage'>  <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Status page</span>
        <p className="para">incident communication</p>  
</div>
        </div>


        <div className="col-md-3">
        <h5 className="nav-title">COLLABORATE</h5>
        <div className="sameColSize">

      <Link to='/confluence'>     <i class="fa fa-heartbeat icons" aria-hidden="true">
</i></Link>
        <span className="head">Confluence</span>
        <p className="para">Document collaboration</p> 
</div>

<div className="sameColSize">

<Link to='/trello'>   <i class="fa fa-tree icons" aria-hidden="true">
        </i></Link>
        <span className="head">Trello</span>
        <p className="para">Collaborate visually on any project</p>
</div>
         <div className="sameColSize">
             <br />
        <h5 className="nav-title">CODE,BUILD,SHIP</h5>
</div>
<Link to='/bitbucket'>    <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Bit bucket</span>
        <p className="para">Git code management</p>
        <div className="sameColSize">

        <Link to='/sourcetree'> <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Source tree</span>
        <p className="para">Git desktop client</p> 
        </div>

        <div className="sameColSize">

        <Link to='/bamboo'>    <i class="fa fa-tree icons" aria-hidden="true"></i>
</Link>
        <span className="head">Bamboo</span>
        <p className="para">integration and release management</p>  
</div>
        </div>


        <div className="col-md-3">
        <h5 className="nav-title">Security, Identity</h5>
        <div className="sameColSize">

        <Link to='/access'>   <i class="fa fa-heartbeat icons" aria-hidden="true">
</i> </Link>
        <span className="head">Atlassian Access</span>
        <p className="para">Security and control for cloud</p> 
</div>

<div className="sameColSize">

<Link to='/crowd'>  <i class="fa fa-tree icons" aria-hidden="true">
        </i></Link>
        <span className="head">Crowd</span>
        <p className="para">User management for self management environments</p>
</div>

        </div>
        <div className="col-md-3">
        <div class="vl">

       
        <div className="sameColSize">


        <span className="head">Marketplace</span>
        <p className="para">Apps that enhance products</p> 
</div>

<div className="sameColSize">


<span className="head">Developers</span>
<p className="para">Docs and resources to build apps</p> 
</div>

<div className="sameColSize">


<span className="head">Work life log</span>
<p className="para">Stories on culture,tech,teams,and tips</p> 
</div>

<div className="sameColSize">


<span className="head">Trust and Security</span>
<p className="para">Compilance,privacy,platform and more</p> 
</div>

        </div>





          </div>


         </div>
        </div>
      </li>



</ul>




      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For teams
        </a>
        <div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">

        <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
         <div className="row">
       
        <div className="col-md-3">


            <h5 className="nav-title">By Team size</h5>
          
            <div className="sameColSize">

           
   <Link to='/startups'>    <span className="head">Startups</span>
        <p className="para">Great for startups</p>
        </Link> 
</div>

<div className="sameColSize">

        
<Link to='/business'>      <span className="head">Small business</span>
        <p className="para">get the right tools for ur
         business</p></Link>
</div>
<div className="sameColSize">

        
<Link to='/enterprise'>
        <span className="head">Enterprise</span>
        <p className="para">Learn how we make big teams
         successful</p> </Link>
</div>
</div>



        <div className="col-md-3">
        <h5 className="nav-title">By team function</h5>
        <div className="sameColSize">
        <Link to='/software'>
         
        <span className="head">Software</span>
        <p className="para">plan,build ship products</p> </Link>
</div>

<div className="sameColSize">

<Link to='/marketing'>
        <span className="head">Marketing</span>
        <p className="para">Bring together a winning
         strategy</p></Link>
</div>
         <div className="sameColSize">
         <Link to='/hr'>
         <span className="head">HR</span>
        <p className="para">Streamline people management</p></Link>
</div>
<div className="sameColSize">
<Link to='/legal'>
        <span className="head">Legal</span>
        <p className="para">Operate securely and reliably</p></Link>
        </div>

</div>
       


        <div className="col-md-3">
       
        <div className="sameColSize">
        <Link to='/operations'>
        <span className="head">Operations</span>
        <p className="para">Run your business efficiently</p></Link>
</div>

<div className="sameColSize">

<Link to='/It'>        <span className="head">IT</span>
        <p className="para">Provide It support</p></Link>
</div>

        
        <div className="sameColSize">
        <Link to='/finance'>
        <span className="head">Finance</span>
        <p className="para">deal finance support</p> </Link>
</div>

    

        <div className="sameColSize">
        <Link to='/incident'>
        <span className="head">Incident response</span>
        <p className="para">Provide response support</p></Link>
</div>

        </div>
        <div className="col-md-3">
        <div class="vl">

       
        <div className="sameColSize">


        <span className="head">Marketplace</span>
        <p className="para">Apps that enhance products</p> 
</div>

<div className="sameColSize">


<span className="head">Developers</span>
<p className="para">Docs and resources to build apps</p> 
</div>

<div className="sameColSize">


<span className="head">Work life log</span>
<p className="para">Stories on culture,tech,teams,and tips</p> 
</div>

<div className="sameColSize">


<span className="head">Trust and Security</span>
<p className="para">Compilance,privacy,platform and more</p> 
</div>

        </div>





          </div>
        

</div>
        
</div>
</li>
</ul>



<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Support
        </a>
        <div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">

        <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
         <div className="row">
       
        <div className="col-md-3">


            <h5 className="nav-title">ATLASSIAN SUPPORT
</h5>
          
            <div className="sameColSize">

           
        <span className="head">Technical support</span>
        <p className="para">Raise a support tickets</p> 
</div>

<div className="sameColSize">

        
        <span className="head">
Purchasing & licensing</span>
        <p className="para">Help on pricing or your account</p>
</div>
<div className="sameColSize">

        

        <span className="head">Documentation</span>
        <p className="para">Guides to all of our products</p> 
</div>



<div className="sameColSize">

        

        <span className="head">Migrate to cloud</span>
        <p className="para">Plan a migration from server to cloud</p> 
</div>

<div className="sameColSize">

        

        <span className="head">
Enterprise services</span>
        <p className="para">
Support for large teams</p> 
</div>


</div>



        <div className="col-md-3">
        <h5 className="nav-title">COMMUNITY SUPPORT</h5>
        <div className="sameColSize">

         
        <span className="head">Community help</span>
        <p className="para">Get help from other users</p> 
</div>

<div className="sameColSize">

        
        <span className="head">Partner Program</span>
        <p className="para">Learn about Atlassian Partners</p>
</div>
         <div className="sameColSize">
         <span className="head">Find a Partner</span>
        <p className="para">Custom Professional Services</p>
</div>


</div>
       


        <div className="col-md-3">
        <h5 className="nav-title">LEARN & CONNECT</h5>       
        <div className="sameColSize">

        <span className="head">About us</span>
        <p className="para">Learn about our company</p> 
</div>

<div className="sameColSize">

        <span className="head">Careers</span>
        <p className="para">Search our latest job openings</p>
</div>

        
        <div className="sameColSize">

        <span className="head">
Training & Certification</span>
        <p className="para">Build your skills and get endorsed by Atlassian</p>
</div>

    

        <div className="sameColSize">

        <span className="head">Blogs</span>
        <p className="para">Thought leadership on all topics</p>
</div>

        </div>
        <div className="col-md-3">
        <div class="vl">

       
        <div className="sameColSize">


        <span className="head">Marketplace</span>
        <p className="para">Apps that enhance products</p> 
</div>

<div className="sameColSize">


<span className="head">Developers</span>
<p className="para">Docs and resources to build apps</p> 
</div>

<div className="sameColSize">


<span className="head">Work life log</span>
<p className="para">Stories on culture,tech,teams,and tips</p> 
</div>

<div className="sameColSize">


<span className="head">Trust and Security</span>
<p className="para">Compilance,privacy,platform and more</p> 
</div>

        </div>





          </div>
        

</div>
        
</div>
</li>
</ul>


</div>
</div>
</div>
</nav>
</div>
    
    
 







    
    )
}
