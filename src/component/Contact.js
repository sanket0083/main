import React, { useState } from "react";

const Contact = () => {
  const [name , setname] = useState('');
  const [email , setemail] = useState('');
  const [message , setmessage] = useState('');
 const [subject , setsubject] = useState('');

const onChangename = (event)=>{
    setname(event.target.value);

}
const onEmailChange = (event)=>{
  setemail(event.target.value);
}
const onMessageChange = (event)=>{
  setmessage(event.target.value);
}
const onSubjectChange = (event)=>{
  setsubject(event.target.value);
}

const btn = ()=>{
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(subject);
}


  
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
              aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
              orci vehicula facilisis.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p> F-505, Inovative Plazza New Delhi, India</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>cityhospital@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+91 9988776655</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form   className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                    value={name}
                    onChange={onChangename}
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                    value={email}
                    onChange={onEmailChange}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                  
                  value={subject}
                  onChange={onSubjectChange}

                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                  
                  value={message}
                  onChange={onMessageChange}
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button onClick={btn} type="button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
