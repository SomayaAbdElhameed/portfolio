import React from 'react'
import './portfolio.css';
import Typical from 'react-typical'
export default function Portfolio() {
return (
<div className='back-ground'>
<div className='container-fluid'>
<div className='row'>
<img className='size-img' src='\Untitled-22.png'/>
</div>
</div>
<div className='container'>
<div className='row'>
<div className=' col-lg-6  col-md-5  col-sm-12  col-xs-12' >

<div className='section-title'>
<span className='primary-text'>
{""}
<h1>Hello👋. </h1> <div> I'M  <span style={{color:"#fd6131ed"}}>Somaya</span></div>
</span>
<div className='profile-details-role'>
<span className='primary-text'>
{""}
<h2>
{""}
<Typical
loop ={Infinity}
steps={[
"Front End Web Dev💻",3000,
"React js/Redux/Dev",1000,

]}
/>
</h2>
</span>
</div>
</div>
<div class="social-icons">
<ul class="list-inline">
<li><a href="https://www.facebook.com/somaya.abdelhamed.3"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
<li><a href="https://www.linkedin.com/in/somaya-saeid-835069231/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
<li><a href="https://github.com/SomayaAbdElhameed"><i class="fa fa-github" aria-hidden="true"></i></a></li>
</ul>
</div>
<a href='https://iwtsp.com/96590038697'>
<button className='btn-ww'> Whatsapp  <i class="fa fa-comments-o" aria-hidden="true"></i></button> </a>

<a href='cv.pdf' download='somaya cv.pdf'>
<button className='btn-www'> Download CV  <i class="fa fa-download" aria-hidden="true"></i></button></a>


</div>

<div className=' col-lg-6  col-md-2  col-sm-12'>
<img className="img-me"  src='\mmee.png'/>
<img className="img-mee"  src='\imgh.png'/>

</div>
</div>
</div>
</div>   

)
}
