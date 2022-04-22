import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

const Authors = () => {
    useEffect(() => {
        document.title = "Techno - Authors"
      }, [])
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <label className='AuthorsTitle'>Authors of Books</label>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>
                    <label className='AuthorsNumbers'>123,456 Authors</label>
                </div>
            </div>
            <div className='row mt-4 mb-5'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4'>
                            <div className='card SingleAuthorBox'>
                                <div className='card-img-top'>
                                    <img src='./images/authors.jpg'/>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='row'>
                                        <label className='Name'>Author Name</label>
                                    </div>
                                    <div className='row'>
                                        <ul className='Stars'>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiOutlineStar/></li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4'>
                            <div className='card SingleAuthorBox'>
                                <div className='card-img-top'>
                                    <img src='./images/authors.jpg'/>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='row'>
                                        <label className='Name'>Author Name</label>
                                    </div>
                                    <div className='row'>
                                        <ul className='Stars'>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiOutlineStar/></li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4'>
                            <div className='card SingleAuthorBox'>
                                <div className='card-img-top'>
                                    <img src='./images/authors.jpg'/>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='row'>
                                        <label className='Name'>Author Name</label>
                                    </div>
                                    <div className='row'>
                                        <ul className='Stars'>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiOutlineStar/></li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4'>
                            <div className='card SingleAuthorBox'>
                                <div className='card-img-top'>
                                    <img src='./images/authors.jpg'/>
                                </div>
                                <div className='card-body text-center'>
                                    <div className='row'>
                                        <label className='Name'>Author Name</label>
                                    </div>
                                    <div className='row'>
                                        <ul className='Stars'>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiFillStar/></li>
                                            <li><AiOutlineStar/></li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-3 d-none d-lg-block'>
                    <div className='AuthorsAsideBox'>
                        <div className='row'>
                            <div className='col-12'>
                                <Link to="#" className='Title'>Book Categories</Link>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-9'>
                                <Link to="#" className='Category'>Category 1</Link>
                            </div>
                            <div className='col-3'>
                                <HiOutlineBookOpen/>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-9'>
                                <Link to="#" className='Category'>Category 2</Link>
                            </div>
                            <div className='col-3'>
                                <HiOutlineBookOpen/>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-9'>
                                <Link to="#" className='Category'>Category 3</Link>
                            </div>
                            <div className='col-3'>
                                <HiOutlineBookOpen/>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-9'>
                                <Link to="#" className='Category'>Category 4</Link>
                            </div>
                            <div className='col-3'>
                                <HiOutlineBookOpen/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Authors