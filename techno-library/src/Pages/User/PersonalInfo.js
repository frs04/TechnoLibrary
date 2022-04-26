import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const PersonalInfo = () => {
    useEffect(() => {
        document.title = "Techno - PersonalInfo"
      }, [])
  return (  

    <div>

        <div id="navlink2">
            <p>
                <a href="#">Home</a> / 
                <a href="#">Your Account</a> /
                <a href="#"> Your Personal Information</a>
            </p>
        </div>

        <br />
        <br />

        <h5 className='ml-3 font-weight-bold'>Your Personal Information</h5>

        <br />
        <br />
        <br />

        <form action="#" className='ml-5' id="form2">

            <div className='form-group'>
                Social Title
                <input type="radio" name="soctitle" id="" className='ml-5' /> Mr
                <input type="radio" name="soctitle" id="" className='ml-3' /> Mrs.
            </div>
            <div className="form-group">
                <label for="fname" className='rghtmrgn'>First Name</label>
                <input type="text" name="" id="fname" />
            </div>
            <div className="form-group">
                <label for="lname" className='rghtmrgn'>Last Name</label>
                <input type="text" name="" id="lname" />
            </div>
            <div className="form-group">
                <label for="eml" id='emllbl'>Email</label>
                <input type="text" name="" id="eml" />
            </div>
            <div className="form-group">
                <label for="pass" id='passlbl'>Password</label>
                <input type="text" name="" id="pass" />
            </div>
            <div className="form-group">
                <label for="newpass" id='newpasslbl'>New Password</label>
                <input type="text" name="" id="newpass" />
            </div>
            <div className="form-group">
                <label for="date" id='datelbl'>Date</label>
                <input type="date" name="" id="date" />
            </div>
            <div className="form-group">
                <input type="submit" value="Save" name="" id="savebtn" />
            </div>

            <br />
            <br />
            <br />
            
        </form>

    </div>
  )
}

export default PersonalInfo