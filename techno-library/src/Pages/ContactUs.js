import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const ContactUs = () => {
    useEffect(() => {
        document.title = "Techno - ContactUs"
      }, [])
  return (   
      
    <div>
        <div id="navlink3">
            <p>
                <a href="#">Home</a> / 
                <a href="#">Your Account</a> /
                <a href="#">Contact Us</a>
            </p>
        </div>

        <br />
        <br />

        <h5 className='ml-3 font-weight-bold'>Contact Us</h5>

        <br />
        <br />
        <br />

        <h5 classname='ml-3 font-weight-bold text-center'>Send a Request</h5>
        <br />

        <form action="#" id="form3">

            <div className='form-group'>
                <label for="subject">Subject</label>
                <br />
                <input type="text" name="" id="subject" />
            </div>

            <div className='form-group'>
                <label for="cupeml">Email Address</label>
                <br />
                <input type="text" name="" id="cupeml" />
            </div>

            <div className='form-group'>
                <label for="cupfu">Attachment</label>
                <br />
                <input type="file" id="cupfu" />
            </div>

            <div className='form-group'>
                <label for="msg">Message</label>
                <br />
                <textarea name="" id="msg" cols="30" rows="5"></textarea>
            </div>

            <div className='form-group'>
                <input type="submit" value="Send" name="" id="cupsbmt" />
            </div>
        </form>


    </div>
    
    
  )
}
export default ContactUs