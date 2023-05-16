// External modules
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaCaretRight, FaCompactDisc } from "react-icons/fa"

// Internal modules
import Style from '@styles/ContactForm.module.scss'
import Image from 'next/image';
import fromimage from '@public/images/form.png'
export default function ContactForm() {

  // Ref
  const formRef = useRef(null)

  // Local state
  const [message, setMessage] = useState('')
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (message.length > 0) {
      setTimeout(() => {
        setMessage('')
      }, 10000)
    }
  }, [message])

  // Methids
  const handlerSubmit = (e) => {
    e.preventDefault();

    setLoad(true)

    const form = new FormData(formRef.current)

    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }
    
    const res = validate(data)

    if (res.success) {
      
      emailjs.send('service_lez93bu','template_enk301m', res.data, 'zaTFH0rBAWvpOMguG')
        .then((response) => {
          setMessage('your message was sent successfully')
        }, (err) => {
          setMessage('Upps! tuvimos un problema con el envio')
        }).finally(() => setLoad(false))

    } else {

      setLoad(false)

    }

  } 

  const validate = data => {
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const name    = data.name.length >= 2
    const email   = regex.test(data.email)
    const message = data.message.length >= 10

    !message && setMessage('The message must contain more than 10 characters')
    !email   && setMessage('Wrong email format')
    !name    && setMessage('The name must contain more than 2 characters')

    if (name && email && message) {
      return {success:true , data}
    }

    return {success:false , data}
  }

  return (
    <div className={Style.contentForm}>
      <Image
        loading='lazy'
        src={fromimage}
        alt='Imagen de formulario'
      />

      <form onSubmit={handlerSubmit} ref={formRef}>

        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            required
            placeholder='Andres'
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='example@gmail.com'
            required
          />
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            placeholder='Write your message here'
            required
          />
        </div>

        <div className={Style.contentBtn} >
          <span 
            className={
              `${message.length > 0 ? Style.active : ''} ${message.includes('successfully') ? Style.green : Style.red}`
            }
            >
            <p>{message}</p>
          </span>
          <button type="submit" >
            Send 
            {
              load
                ? <FaCompactDisc className={Style.loading}/>
                : <FaCaretRight/>
            }
          </button>
        </div>
      </form>
    </div>
  )
}
