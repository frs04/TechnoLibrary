import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

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
                    <label for="fname" style="margin-right: 50px;">First Name</label>
                    <input type="text" name="" id="fname" />
                </div>
                <div className="form-group">
                    <label for="lname" style="margin-right: 50px;">Last Name</label>
                    <input type="text" name="" id="lname" />
                </div>
                <div className="form-group">
                    <label for="eml" style="margin-right: 86px;">Email</label>
                    <input type="text" name="" id="eml" />
                </div>
                <div className="form-group">
                    <label for="pass" style="margin-right: 56px;">Password</label>
                    <input type="text" name="" id="pass" />
                </div>
                <div className="form-group">
                    <label for="newpass" style="margin-right: 20px;">New Password</label>
                    <input type="text" name="" id="newpass" />
                </div>
                <div className="form-group">
                    <label for="date" style="margin-right: 90px;">Date</label>
                    <input type="date" name="" id="date" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" name="" id="savebtn" />
                </div>

            </form>

        </div>
    )
}

export default PersonalInfo