import React from 'react';
import './About.css';
function About() {
return <div class=" text-center wow fadeIn"  data-wow-duration="2s" data-wow-dealy="1.5s">
 
<section id='About'>
<div class="container">
    <div className='row'>
<h2 class=" wow fadeInUp  title">About Me</h2>
</div>
 <p className='text-p' >Why choose Me</p> 
 <img className='line-ee' src='\line2.png'/> 
</div>
<section id="abouts" >   
 <div class="container">
<div class="row box">
<div class="col-md-6">
<div class="single_abouts_text text-center wow slideInLeft" data-wow-duration="2s">
</div>
</div>
</div>
</div> 
<div class="container secA ">
<div class="row">
<div class="col-sm-6">
<div class="single_study_slid_area">

<div class="single_study_text">
<div class="study_slider"> 
<div class="item">
<div class="s_study_icon">
      <div > Name</div> 
    </div>

    <h4 className='h4'>Somaya Abdelhamed saeid</h4>
    <div class="separator3"></div>
    <div class="single_abouts_text wow slideInRight" data-wow-duration="2s">

<div className='texttt'>

<span> <strong>Age : </strong> <span>29</span></span>
<br/>
<span><strong>Address : </strong> <span>Elfahahel - kuwait</span></span> <br/>

<span> <strong>Phone : </strong> <span>+965 90038697 -  97270270</span></span><br/>
<span> <strong>E-mail : </strong> <span>somayasaeid4@gmail.com</span></span><br/>

<span><strong>Freelance : </strong> <span>Available</span></span><br/>
</div>
<a href='ezn.pdf' download='somaya ezn.pdf'>
<button className='btn-www  bbt'>Get Resume</button></a>

</div>
</div>
</div>
</div>
</div>
 </div>

<div class="col-sm-6  ">
<div class="single_study_img">
<img src="\study.jpg" alt="" />
</div>

</div>


</div>
</div>
</section>

</section> 
</div>;
}

export default About;


