import React from 'react'
import sky from './sky.svg'
import ReactPlayer from "react-player"
import ANZ from './ANZ.jpg'

export const EnterpriseSectionOne = () => {
    return (
        <>
      <div className="container">
       <div className="sectionOneEnterprise">
        <div className="row">
        <div className="col-md-4">
      <h3 className="sectionOneEnterpriseHead">
      Accelerate enterprise innovation

      </h3>
      <p className="sectionOneEnterprisePara">

      Connect, accelerate, and scale your entire enterprise
      </p>
      <button className="btn btn-primary">
          Contact us
      </button>
        </div>
   

         <div className="col-md-8">
             <img src={sky} alt="" />
                      </div>


        </div>

       </div>
 

<div className="sectionTwoEnterprise">


    <h3 className="sectionTwoEnterpriseHead text-center">You're in good company
</h3>
<p className="sectionTwoEnterprisePara text-center">Join top companies and teams around the world who are using our cloud products.

</p>

<div className="row">
    <div className="col-md-5">
    <ReactPlayer url="https://www.youtube.com/watch?v=3wKFxew4alc" />

    </div>

    <div className="col-md-5">

        <img src={ANZ} alt="" />
        <p className="sectionTwoEnterprisePara">
        This 200-year old bank is still
         innovating and changing the way their 50,000 employees think and work.
        </p>
        <a href="#">Play video</a>
    </div>
</div>
</div>









      </div>










        </>
    )
}
