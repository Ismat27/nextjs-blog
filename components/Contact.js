import axios from 'axios'
import { useState, useRef } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [sending, setSending] = useState(false)
    const sendingToastId = useRef(null)

    const submitForm = (event) => {
        event.preventDefault()
        if (!name || !email || !message) {
            return
        }
        setSending(true)
        sendingToastId.current =  toast.info('Sending message', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        axios.post('/api/sendmail', {name, email, message})
        .then(response => {
            setName('')
            setEmail('')
            setMessage('')
            toast.dismiss(sendingToastId.current)
            toast.success('Message delivered successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        setSending(false)
    }

  return (
    <Wrapper>
        <div>
            <Container className='section-container'>
                <div className='content'>
                    <article>
                        <h2>Contact</h2>
                        <p>
                            I would be glad to use my skillsets in your project. 
                            Let me know what you get for me in the form below and expect my reply ASAP.
                        </p>
                    </article>
                    <form onSubmit={submitForm}>
                        <div className='form-data'>
                            <label htmlFor='name'>Name</label>
                            <input name='name' id='name' value={name} onChange={e => setName(e.target.value)} required/>
                        </div>
                        <div className='form-data'>
                            <label htmlFor='email'>Email</label>
                            <input type={'email'} name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className='form-data'>
                            <label id='message'>Message</label>
                            <textarea name='message' id='message' value={message} onChange={e => setMessage(e.target.value)} required />
                        </div>
                        <div>
                            <button disabled={sending}>SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 4rem;
.section-container {
  display: block;
}
.form-data:not(:last-child) {
    margin-bottom: 1rem;
}
input, textarea  {
    display: block;
    width: 100%;
    margin-top: .5rem;
    border: none;
    border-bottom: 2px solid;
    outline: none;
}
button {
    border: none;
    border-bottom: 2px solid;
    background-color: inherit;
}
@media screen and (min-width: 768px) {
    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
    }
}
`

export default Contact