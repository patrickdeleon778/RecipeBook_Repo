import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ContactUs from '../Components/ContactUs';

const ContactScreen = ({formData, loading, onSubmit, onChange}) => {
  return (
    <Form onSubmit={onSubmit} className='contact-form'>
    <Form.Group controlId='formName'>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter your name'
        name='name'
        value={formData.name}
        onChange={onChange}
        style={{ width: '200%', fontSize: '20px', padding: '15px', marginBottom: '10px' }}
        required
      />
    </Form.Group>

    <Form.Group controlId='formEmail'>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type='email'
        placeholder='Enter your email'
        name='email'
        value={formData.email}
        onChange={onChange}
        style={{ width: '200%', fontSize: '20px', padding: '10px', marginBottom: '10px' }}
        required
      />
    </Form.Group>

    <Form.Group controlId='formMessage'>
      <Form.Label>Message</Form.Label>
      <Form.Control
        as='textarea'
        rows={6}
        placeholder='Enter your message'
        name='message'
        value={formData.message}
        onChange={onChange}
        style={{ width: '200%', fontSize: '20px', padding: '10px', marginBottom: '100px' }}
        required
      />
    </Form.Group>

    <Button variant='primary' type='submit'>
      {loading ? 'Sending......' : 'Send'} Submit
    </Button>
  </Form>
  )
}

export default ContactScreen
