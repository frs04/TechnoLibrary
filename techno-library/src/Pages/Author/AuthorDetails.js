import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineEye} from 'react-icons/ai';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const AuthorDetails = () => {
    const owlOptions = {
        margin: 5,
        responsiveClass: true,
        dots: false,
        nav: true,
        loop: true,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:false,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          500: {
            items: 2,
          },
          600: {
            items: 2,
          },
          700: {
            items: 2,
          },
          800: {
            items: 3,
          },
          900: {
            items: 3,
          },
          1000: {
            items: 4,
          },
          1200: {
              items: 5,
          }
        },
      };
    useEffect(() => {
        document.title = "Techno - Author Details"
      }, [])
  return (
    <div>
        <div className='TopBox'>
            <ul className='Path'>
                <li><Link to="/">Home </Link></li>/
                <li className='Name'> Author Name</li>
            </ul>
        </div>
        <div className='container AuthorDetails'>
            <div className='row mb-3'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 Profile'>
                    <img src='./images/auth.jpg' />
                </div>
                <div className='col-12 col-sm-6 col-md-8 col-lg-9 col-xl-10 Info'>
                    <div className='row mb-1'>
                        <label className='Name'>Author's Name</label>
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
                    <div className='row'>
                        <label className='Books'>She has <span>123</span> books</label>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='Bibliography'>
                    <h4><strong>Bibliography</strong></h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
            </div>
            <div className='row mt-3 mb-4 text-center'>
                <label className='TopLabel'>You May Also Like</label>
            </div>
            <div className='row mb-4'>
                <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
                <div class="item">
                    <div className='card HomeOwlStyle'>
                    <div className='card-img-top'>
                        <Link to="/BookDetails">
                        <img src='./images/book2.jpg'  alt='book'/>
                        </Link>
                    </div>
                    <div className='card-body'>
                    <Link to="/BookDetails">
                        <div className='row mt-1'>
                        <label className='Category'>Category Name</label>
                        </div>
                        <div className='row'>
                        <label className='Name'>Book Name</label>
                        </div>
                        </Link>
                        <div className='row'>
                            <ul className='Stars'>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiOutlineStar/></li>
                            </ul>
                        </div>
                        <div className='row'>
                            <label className='Free'>Free</label>
                        </div>
                        <div className='DisplayHover'>
                            <button type='button'><AiFillHeart/></button>
                            <br/>
                            <button type='button'><AiOutlineEye/></button>
                        </div>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default AuthorDetails