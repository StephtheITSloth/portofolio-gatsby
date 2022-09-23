import React, {useState} from 'react'
import {StaticImage} from 'gatsby-plugin-image'
const Contact = () => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = () => {

    }
    
  return (
    <section className='contact-section'>
        <StaticImage src='../assets/images/canvas/contact.svg' alt='contact' layout='constrained' placeholder='tracedSVG' className='contact-img'/>
        <section className='contact-container'>
            <form onSubmit={handleSubmit} className='form'
            action="https://formspree.io/f/mwkzooqw"
            method="POST"
            >
                <div className='form-input'>
                    <label htmlFor='name'>Name</label>
                    <input name='name' onChange={(e) => setName(e.target.value)} type='text' required/>
                </div>
                <div className='form-input'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' onChange={(e) => setEmail(e.target.value)} type='email' required/>
                </div>
                <div className='form-input'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' onChange={(e) => setMessage(e.target.value)} type='text' required className='textarea'/>       
                </div>

                <button type='submit' className='form-btn'>Send</button>
            </form>
        </section>
    </section>
  )
}

export default Contact