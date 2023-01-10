import React, { useRef } from 'react'

function Doctors() {
    const item = [
        {
            name : 'Atha Smith',
            position : 'Chief Medical Officer',
            dec : 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
            img : '../assets/img/doctors/doctors-1.jpg'

        },
        {
            
            name : 'Atha Smith',
            position : 'Chief Medical Officer',
            dec : 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
            img : '../assets/img/doctors/doctors-1.jpg'
        },
        {
            
            name : 'Atha Smith',
            position : 'Chief Medical Officer',
            dec : 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
            img : '../assets/img/doctors/doctors-1.jpg'
        },
        {
            
            name : 'Atha Smith',
            position : 'Chief Medical Officer',
            dec : 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
            img : '../assets/img/doctors/doctors-1.jpg'
        }

    ]    

    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row">
                        {
                            item.map((i) => {   
                                return(
                                    <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                    <div className="pic"><img src={i.img}/></div>
                                    <div className="member-info">
                                    <h4>{i.name}</h4>
                                    <span>{i.position}</span>
                                    <p>{i.dec}</p>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Doctors
