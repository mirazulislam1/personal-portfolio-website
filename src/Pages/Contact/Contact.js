import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../photo/Contact/contact.jpg'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_u4y0drk', 
            'template_5w0vi2j', 
            form.current, 
            '6ei---QDZR5HieXrn',
            )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Contact Me</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col grid grid-cols-1 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img style={{ height: '440px' }} src={contact} className=" rounded-lg shadow-2xl" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your message</span>
                                    </label>
                                    <textarea name='message' className="textarea textarea-bordered" placeholder="Your message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;