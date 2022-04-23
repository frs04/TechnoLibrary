import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const UploadBook = () => {
    useEffect(() => {
        document.title = "Techno - UploadBook"
    }, [])
    return (
        <div>
            <div id="navlink" className="bg">
                <p>
                    <a href="#">Home</a> /
                    <a href="#">Upload Book</a>
                </p>
            </div>

            <br />
            <br />

            <h5 className="ml-3 font-weight-bold">Upload Book</h5>

            <br />
            <br />
            <br />

            <form action="#" className="ml-5" id="form1">
                <div className="form-group">
                    <label for="name" style="margin-right: 65px;">Name</label>
                    <input type="text" name="" id="name" />
                </div>

                <div className="form-group">
                    <label for="author" style="margin-right: 60px;">Author</label>
                    <input type="text" name="" id="author" />
                </div>

                <div className="form-group">
                    <label for="ctg" class="text-center" style="margin-right: 45px;">Category</label>
                    <input type="text" name="" id="ctg" />
                </div>

                <div className="form-group">
                    <label for="dscrp" style="margin-right: 30px;">Description</label>
                    <textarea name="" id="dscrp" cols="30" rows="4"></textarea>
                </div>

                <div className="form-group">
                    <input type="file" name="" id="uploadbtn" hidden />
                    <label for="uploadbtn" id="uploadbtnlabel">Choose File</label>
                    <input type="submit" value="Upload" name="" id="submitbtn" className="submitbtnclass" />
                </div>
            </form>

        </div>
    )
}

export default UploadBook