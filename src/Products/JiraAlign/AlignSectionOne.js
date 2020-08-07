import React from 'react'
import speak from './speak.svg'
import eye from './eye.svg'
import per from './per.svg'
import signal from './signal.svg'
import chartLike from './chartLike.png'
import slideOne from './slideOne.png'

export const AlignSectionOne = () => {
    return (
        <>
           
           <div className="container">
          <div className="sectionOneAlign">
           <div className="row">
               <div className="col-md-4">
           <h2 className="sectionOneAlignHead">

           Unlock the agility of your enterprise
           </h2>
<p className="sectionOneAlignPara">

Jira Align connects your business strategy to technical execution
</p>
<button className="btn btn-primary">

Get in touch
</button>

               </div>

<div className="col-md-8">
<img src={speak} alt='' />


</div>
</div> </div>



<div className="sectionTwoAlign">
<h3 className="sectionTwoAlignHead">
Transformation starts with connected teams

</h3>

<div className="row">
<div className="col-md-4">
<div className="card" >
  <img className="card-img-top" src={eye} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Get real-time visibility

</h5>
    <p className="card-text">Aggregate team-level data to make all work visible across your enterprise in real-time.
.</p>
  </div>
</div>


<div className="card" >
  <img className="card-img-top" src={per} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Align every team to strategy

</h5>
    <p className="card-text">Get everyone on the same page to determine scope, roadmaps and dependencies across teams and portfolios.

</p>
  </div>
</div>




<div className="card" >
  <img className="card-img-top" src={signal} alt="Card image cap" />
  <div className="card-body">
  <h5 className="card-title">Optimize for customer value

</h5>
    <p className="card-text">Connect strategic investments with customer value created to drive outcomes faster and more reliably.
    </p>
  </div>
</div>



</div>



<div className="col-md-8">

<img src={chartLike} className="jiraReleaseImg" alt="" />

</div>


</div>


</div>




<div className="sectionThreeAlign">
<h3 className="sectionThreeHeading">
Enterprise teams thrive with Jira Align

</h3>
<div className="row">
  <div className="col-md-9">

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={slideOne} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>







  </div>


  <div className="col-md-3">
 <h3 className="slideHEad">
 Portfolio managers

 </h3>
<p className="slidePara">
Communicate the value of funding strategic
 initiatives to investors, analysts, and employees
</p>


<h3 className="slideHEad">
 Portfolio managers

 </h3>
<p className="slidePara">
Communicate the value of funding strategic
 initiatives to investors, analysts, and employees
</p>


<h3 className="slideHEad">
 Portfolio managers

 </h3>
<p className="slidePara">
Communicate the value of funding strategic
 initiatives to investors, analysts, and employees
</p>


  </div>
</div>


</div>



<div className="sectionFourAlign">

 <h4 className="sectionFourHead">
 Get in touch to get started


 </h4>



 <form>
   <div className="row">
   <div className="col-md-4 ">
   <label>first name</label>
<input type="text" />
</div>
<div className="col-md-4 col-xs-offset-2">

<label>last name</label>

<input type="text" />
</div>
</div>
<div className="row">
   <div className="col-md-4 ">
   <label>first name</label>
<input type="text" />
</div>
<div className="col-md-4 col-xs-offset-2">

<label>email</label>

<input type="email" />
</div>
</div>


<div className="row">
   <div className="col-md-4 ">
   <label>Company</label>
<input type="text" />
</div>
<div className="col-md-4 col-xs-offset-2">

<label>Work phone</label>

<input type="number" />
</div>
</div>

<div className="row">
   <div className="col-md-4 ">
   <label>State</label>
<input type="text" />
</div>
<div className="col-md-4 col-xs-offset-2">

<label>request type</label>

<select className="browser-default custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>


</div>
</div>

<div className="row">
 
   <label>job title</label>
<input type="text" />
</div>

<p className="formEnd">
By signing up on this form, I acknowledge receipt of Atlassian's Privacy Policy.

</p>
<button className="btn btn-primary">Submit</button>
 </form>

</div>







           </div>











        </>
    )
}
