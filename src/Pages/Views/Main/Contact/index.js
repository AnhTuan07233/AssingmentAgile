import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    return (
     
           <div className="form-41-mian section-gap">
  <div className="wrapper">
    <h3 className="cont-head">Get in touch with us</h3>
    <div className="d-grid align-form-map">
      <div className="form-inner-cont">
        <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
          <div className="form-input">
            <label htmlFor="w3lName">Name</label>
            <input type="text" name="w3lName" id="w3lName" placeholder />
          </div>
          <div className="form-input">
            <label htmlFor="w3lMessage">Message(Required)*</label>
            <textarea placeholder name="w3lMessage" id="w3lMessage" required defaultValue={""} />
          </div>
          <div className="form-input">
            <label htmlFor="w3lSender">Email(Required)*</label>
            <input type="email" name="w3lSender" id="w3lSender" placeholder required />
          </div>
          <button type="submit" className="btn btn-contact">Submit</button>
        </form>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
      </div>
    </div>
  </div>
</div>

    )
}

Contact.propTypes = {

}

export default Contact
