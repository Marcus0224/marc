import React from 'react';
import './contact.css';
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsFillPhoneFill} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26cooyi', 'template_g00qapr', form.current, 'w6eil5Q2UeeHa_1fw')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMarkEmailUnread className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>marcstlouis04@gmail.com</h5>
            <a href='mailto:marcstlouis04@gmail.com'>Send A Email</a>
          </article>
          <article className="contact_option">
            <BsFillPhoneFill className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>(954)-376-9933</h5>
            <a href='sms:954-376-9933'>Send A Text</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact