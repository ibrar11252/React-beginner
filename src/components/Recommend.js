import React from 'react'
import arrow2 from './arrow2.jpg';
import teamistry from './teamistry.jpg'
import community from './community.jpg'





export const Recommend = () => {
    return (
        <>
            
 <div className="recommend">
 <div className="container">
  <h3 className="recommendHead">
  Recommended reading

  </h3>
   <p className="recommendPara">Educational resources to help take your team to the next level.

</p>

<div className="row">

<div className="col-md-4">

<img src={arrow2} alt="img" /> 
<span className="imgOneHead">The agile coach</span>
<p className="imgOnePara">atlasian nonsense guide
to agile development</p>

</div>


<div className="col-md-4">

<img src={teamistry} alt="img" /> 
<span className="imgOneHead">The agile coach</span>
<p className="imgOnePara">atlasian nonsense guide
to agile development</p>

</div>


<div className="col-md-4">

<img src={community} alt="img" /> 
<span className="imgOneHead">The agile coach</span>
<p className="imgOnePara">atlasian nonsense guide
to agile development</p>

</div>

</div>

 </div>


</div>

        </>
    )
}
