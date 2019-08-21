import React from 'react';
import moment from 'moment';
import './style.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className="sm-text">React Robot &copy; {moment(new Date()).format("YYYY")} DME</p>
    </footer>
  )
}

export default Footer;