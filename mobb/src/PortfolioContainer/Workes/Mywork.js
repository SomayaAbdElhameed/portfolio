import React from 'react';
import ProuductList from './ProuductList'
function Mywork() {
return <div>
<section id='Mywork'>
<div class="container">
<div className='row'>
<h2 class=" wow fadeInUp  title">My Works</h2>
</div>
<p className='text-p' >All My works</p> 
<img className='line-e' src='\line2.png'/> 
</div>

<ProuductList/>
</section>
</div>;
}

export default Mywork;
