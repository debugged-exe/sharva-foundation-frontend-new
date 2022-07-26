import React,{useEffect} from 'react'
import './CSS/contactus.css'
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ContactUs ">
   <div className="contact_background_image"><h1 className='contactus-heading carousel-caption'>CONTACT US </h1></div>
<div className="container">


  
    <div className="map_img m-4     d-flex justify-content-center">
      <div className="contact-map "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.9533996341432!2d74.8168858953428!3d32.732786445842265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x974c8a5d51de0523!2zMzLCsDQzJzU3LjIiTiA3NMKwNDknMDIuNSJF!5e0!3m2!1sen!2sin!4v1658735038838!5m2!1sen!2sin" width="100%" title='sharve-contactus' className='rounded shadow-lg' frameborder="0"></iframe></div>
    </div>
      
    <div
      className=" contact_box1 my-4 d-flex col
     justify-content-between"
    >
      <div className="address ">
        <h3>Address</h3>
        <p className="text-dark">
        Hno.163 Ambika Vihar near PHC Gole Gujral, <br />    Talab Tillo, Jammu, Jammu and Kashmir 180002 
        </p>
      </div>
      <div className="contact_info">
        <h3>Contact Info</h3>
        <p className="text-dark">
          Email : team.sharvafoundation@gmail.com <br />
          <a href="tel:+91 95961 56678 ">+91 95961 56678</a>
        </p>
      </div>
      <div className="open_hour">
        <h3>Open Hour</h3>
        <p className="text-dark">
          Monday – Friday : 09:00 – 20:00 <br />
          Sunday & Saturday: 10:30 – 22:00
        </p>
      </div>
    </div>
      <h3 className="m-3 text-center">
        <strong className="text-dark">Get In Touch</strong>
      </h3>
      <div className="contact-form d-flex justify-content-center">
                 

                  {/* <!-- Contact Form  --> */}
                  <form action="">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-input">
                                  <label htmlFor="fullname" className="title">Your Name</label>
                                  <input type="text" name="fullname" id="fullname" placeholder="Jordan Harris" required/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-input">
                                  <label htmlFor="email" className="title">Your Email</label>
                                  <input type="email" placeholder='xyz@gmail.com' name="email" id="email" required/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-input">
                                  <label htmlFor="subject" className="title">Phone Number</label>
                                  <input type="text" required name="phone" placeholder=" 0000 000 000" id="phone"/>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="form-input">
                                  <label htmlFor="message" className="title">Your Message</label>
                                  <textarea name="message" id="" cols="20" rows="10"></textarea>
                              </div>
                          </div>
                          <div className="col-md-3 offset-md-9">
                              <div className="bg-brown rounded text-white form-input">
                                  <input type="submit" defaultValue="Send  Message" className="btn gradient_btn btn-fill"/>
                              </div>
                          </div>
                      </div>
                  </form>
</div>
              </div>

  </div>
  )
}

export default ContactUs