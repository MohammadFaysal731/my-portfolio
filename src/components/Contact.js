import React from 'react';

const Contact = () => {
    return (
        <section className='container pt-5'>
            <div className="text-center p-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}>Contact Me</h2>
                <h5 style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Get In Touch</h5>
            </div>
            <div className="row g-3">
                <div className="col-lg-6 border p-4">
                    <form >
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="submit" className='btn' style={{ backgroundColor: '#0A0826', color: 'white', border: '1px solid rgba(77, 181, 255, 1)' }}>Submit</button>
                    </form>
                </div>
                <div className="col-lg-6 border p-4">
                    <div class="card text-bg-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-bg-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-bg-primary mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;