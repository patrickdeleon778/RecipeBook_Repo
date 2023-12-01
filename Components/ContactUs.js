import React, { useState, useRef } from 'react';
import { Row, Col} from 'react-bootstrap';
import ContactScreen from '../screens/ContactScreen';
// import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';




const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [loading, setLoading] = useState(false);
      const formREF = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Your emailjs.send logic here...
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <Row className='contact'>
            <Col md={12} lg={10}>
              <h3 className='font my-5' id='ContactUs'>
                Contact Us
              </h3>
              {/* Use the ContactForm component here */}
              <ContactScreen
                formData={formData}
                loading={loading}
                onSubmit={handleSubmit}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </div>
  );
};

export default ContactMe;


















