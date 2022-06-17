import React, { useRef } from 'react';
import { SiMinutemailer } from 'react-icons/si'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2r22ass', 'template_l0i91px', form.current, 'pB-OjZw0SnNtzlaKV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section className='container pt-5'>
            <div className="text-center p-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}>Contact Me</h2>
                <h5 style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Get In Touch</h5>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <form onSubmit={sendEmail} ref={form} style={{ backgroundColor: '#0A0826', color: 'white' }} className='p-4'>
                            <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Full Name" style={{ backgroundColor: '#0A0826', color: 'white' }} required />
                            <br />
                            <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Eamil" style={{ backgroundColor: '#0A0826', color: 'white' }} required />
                            <br />
                            <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3" style={{ backgroundColor: '#0A0826', color: 'white' }} required></textarea>
                            <br />
                            <button type="submit" className='btn' style={{ backgroundColor: '#0A0826', color: 'white', border: '1px solid rgba(77, 181, 255, 1)' }}>Send Messages</button>
                        </form>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body" style={{ backgroundColor: '#0A0826', color: 'white' }}>
                            <div class="card mb-3">
                                <div class="card-body" style={{ backgroundColor: '#0A0826', color: 'white' }}>
                                    <h1><SiMinutemailer className='contact-option-icon'></SiMinutemailer></h1>
                                    <h4>Email</h4>
                                    <h5>www.faysal731@gmail.com</h5>
                                    <a href="mailto:www.faysal731@gmail.com" target="_blank" className='text-decoration-none' style={{ color: 'rgba(77, 181, 255, 1)' }}>Send a message</a>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="card-body" style={{ backgroundColor: '#0A0826', color: 'white' }}>
                                    <h1><BsMessenger className='contact-option-icon'></BsMessenger></h1>
                                    <h4>Messenger</h4>
                                    <h5>Mohammad Faysal</h5>
                                    <a href="https://m.me/profile.php?id=100045990253742" target="_blank" className='text-decoration-none' style={{ color: 'rgba(77, 181, 255, 1)' }}>Send a message</a>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="card-body" style={{ backgroundColor: '#0A0826', color: 'white' }}>
                                    <h1><BsWhatsapp className='contact-option-icon'></BsWhatsapp></h1>
                                    <h4>WhatsApp</h4>
                                    <h5>+8801753730986</h5>
                                    <a href="https://api.whatsapp.com/send?phone=+88001753730986" target="_blank" className='text-decoration-none' style={{ color: 'rgba(77, 181, 255, 1)' }}>Send a message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;