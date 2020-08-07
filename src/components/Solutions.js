import React from 'react'
import agile from './agile.svg';


export const Solutions = () => {
    return (
        <>
        <div className="sectionTwo">
            <div className="container">
        <h2 className="sectionTwoHead">Our Solutions</h2>

     <div className="sectionTwoLinks">
        <a className="navigation" href="#">PLan and track</a>
        <a className="navigation" href="#">Support and fix</a>
        <a className="navigation" href="#">Code,build and shipk</a>
        <a className="navigation" href="#">Collobarate</a>
</div>


        <div class="row">
  <div className="col-sm-6 ">
    <div className="headingSol">
        Agile tools for agile teams
    </div>
    
    <p className="titleSol">

    Stay on track as you plan, develop, and deliver products. 
    </p>


    <div className="sameColSize">

<i class="fa fa-heartbeat icons" aria-hidden="true">
</i>
<span className="head">Jira software</span>
<p className="para">Project and issue tracking</p> 
</div>

<div className="sameColSize">

<i class="fa fa-heartbeat icons" aria-hidden="true">
</i>
<span className="head">Jira Align</span>
<p className="para">Enterprise agile planning</p> 
</div>

<div className="sameColSize">

<i class="fa fa-heartbeat icons" aria-hidden="true">
</i>
<span className="head">Confluence</span>
<p className="para">Document collobarton</p> 
</div>



    </div>




  <div className="col-sm-6">
    


    <img src={agile} alt="agile" />
      </div>
</div>    
  
</div>
<hr />


</div>


       
            
        </>
    )
}
