import React from 'react';
import './ContactMe.css' ;
import emailjs from 'emailjs-com';
function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pfw2luh','template_02cygqs',e.target,'user_aG38DQ8SqRfmpGsUlR59V')
      .then((result) => {
          console.log(result.text);
      },(error) => {
          console.log(error.text);
      });
      
  e.target.reset();
  }


  return <div>
<section id='ContactMe'>

<div class="container">
    <div className='row'>
<h2 class=" wow fadeInUp  title">Contact Me</h2>
</div>

 <p className='text-p' >Send Message</p> 
 <img className='line-e' src='\line2.png'/> 
</div>


  <div className='container'>
  <section className='backkg'>
    <div className='row'>
  <div className='col-md-6'>
    <h1 className='titlep'>Get In touch  📧</h1>
    <div class="social-icons  hi">
        <ul class="list-inline">
        <li><a href="https://www.facebook.com/somaya.abdelhamed.3"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/somaya-saeid-835069231/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
          <li><a href="https://github.com/SomayaAbdElhameed"><i class="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    <p className='text-pp'>Send Your Email Here !</p>
<  img src='\mailz.jpeg'  />
  </div>
  <div className='col-md-6  formtwo'>
<form className="contact-form" onSubmit={sendEmail}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" />
</div>

  <div class="mb-3">
  <label for="exampleFormControlInput1"  class="form-label">Email</label>
  <input type="email"  name="user_email" class="form-control" id="exampleFormControlInput1" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label">Message</label>
  <textarea class="form-control"  name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
  
<button className='btn-ww  m-4'   value="Send"> Send</button>

</div>

</form>

  </div>

  </div>
    <div></div>
  
</section>

</div>
</section>
  </div>;
}

export default ContactMe;
