// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = (props) => {
    // console.log(props.item)
    return (
        <div className="contact-item">
            <div className="contact-photo">
                <img src={props.data.photo}/>
            </div>
            <div className="contact-detail">
                <ul>
                    <li>{props.data.name}</li>
                    <li>{props.data.phone}</li>
                    <li>{props.data.email}</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;