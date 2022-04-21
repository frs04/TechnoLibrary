import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {AiFillStar, AiOutlineStar, AiFillHeart, AiOutlineEye} from 'react-icons/ai';
import {Tabs, Tab} from 'react-bootstrap';

const Home = () => {
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
      600: {
        items: 3,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1200: {
          items: 6,
      }
    },
  };
  return (
    <div className='container-fluid p-0'>
       <div className='row mt-2'>
           <Carousel id="HomeCarousel" controls={false} indicators={false} >
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/slider.jpg" alt="Home Slider" />
                <Carousel.Caption>
                  <div className='row'>
                    <label className='HomeAuthor'>Book Author</label>
                  </div>
                  <div className='row mt-3'>
                    <label className='HomeBook'>Book Name</label>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-12'>
                      <button type='button' className='HomeSliderBtn'>Read Now</button>
                    </div>
                  </div>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       </div>
       <div className='container'>
         <div className='row mt-3 mb-4'>
           <div className='col-3'>
             <label className='TopLabel'>Top Rating Books</label>
           </div>
           <div className='col-7'>
             <hr/>
           </div>
           <div className='col-2'>
             <Link to="#" className="ViewAllBtn">View All Books</Link>
           </div>
         </div>
         <div className='row mb-2'>
           <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
             <div class="item">
               <div className='HomeOwlStyle'>
                  <div className='row'>
                    <img src='./images/book2.jpg'/>
                  </div>
                  <div className='row mt-1'>
                    <label className='Category'>Category Name</label>
                  </div>
                  <div className='row'>
                    <label className='Name'>Book Name</label>
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
                    <label className='Free'>Free</label>
                  </div>
                  <div className='DisplayHover'>
                    <button type='button'><AiFillHeart/></button>
                    <br/>
                    <button type='button'><AiOutlineEye/></button>
                  </div>
               </div>
             </div>
           </OwlCarousel>
         </div>
         <div className='row mt-5 mb-5'>
           <div className='col-3'>
             <label className='TopLabel'>Top 10 This Week Books</label>
           </div>
           <div className='col-7'>
             <hr/>
           </div>
           <div className='col-2'>
             <Link to="#" className="ViewAllBtn">View All Books</Link>
           </div>
         </div>
         <div className='row HomeTop10 mb-5'>
           <div className='col-9'>
             <img src='./images/top10.jpg'/>
             <div className='HomeTop10Info text-center'>
              <div className='row'>
                <label className='HomeAuthor text-dark'>Book Author</label>
              </div>
              <div className='row mt-3'>
                <label className='HomeBook text-dark'>Book Name</label>
              </div>
              <div className='row mt-3'>
                <div className='col-12'>
                  <button type='button' className='HomeSliderBtn'>Read Now</button>
                </div>
              </div>
             </div>
           </div>
           <div className='col-2'>
             <div className='row mt-5'>
              <div className='HomeOwlStyle'>
                <div className='row'>
                  <img src='./images/book2.jpg' className='ImgTop10'/>
                </div>
                <div className='row mt-1'>
                  <label className='Category'>Category Name</label>
                </div>
                <div className='row'>
                  <label className='Name'>Book Name</label>
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
                  <label className='Free'>Free</label>
                </div>
                <div className='DisplayHover'>
                    <button type='button'><AiFillHeart/></button>
                    <br/>
                    <button type='button'><AiOutlineEye/></button>
                  </div>
              </div>
            </div>
             <div className='row mt-5'>
              <div className='HomeOwlStyle'>
                <div className='row'>
                  <img src='./images/book2.jpg' className='ImgTop10'/>
                </div>
                <div className='row mt-1'>
                  <label className='Category'>Category Name</label>
                </div>
                <div className='row'>
                  <label className='Name'>Book Name</label>
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
         </div>
         <div className='row mt-3 mb-4 text-center'>
            <label className='TopLabel'>Featured Books</label>
         </div>
         <div className='row'>
         <Tabs defaultActiveKey="Most Viewed" id="HomeTabs" className="mb-3 CenterTabs">
            <Tab eventKey="Most Viewed" title="Most Viewed" className='SingleTab'>
              <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
              <div class="item">
                <div className='HomeOwlStyle'>
                    <div className='row'>
                      <img src='./images/book2.jpg'/>
                    </div>
                    <div className='row mt-1'>
                      <label className='Category'>Category Name</label>
                    </div>
                    <div className='row'>
                      <label className='Name'>Book Name</label>
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
                      <label className='Free'>Free</label>
                    </div>
                    <div className='DisplayHover'>
                      <button type='button'><AiFillHeart/></button>
                      <br/>
                      <button type='button'><AiOutlineEye/></button>
                    </div>
                </div>
              </div>
            </OwlCarousel>
            </Tab>
            <Tab eventKey="Most Downloaded" title="Most Downloaded">
              <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
              <div class="item">
                <div className='HomeOwlStyle'>
                    <div className='row'>
                      <img src='./images/book2.jpg'/>
                    </div>
                    <div className='row mt-1'>
                      <label className='Category'>Category Name</label>
                    </div>
                    <div className='row'>
                      <label className='Name'>Book Name</label>
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
                      <label className='Free'>Free</label>
                    </div>
                    <div className='DisplayHover'>
                      <button type='button'><AiFillHeart/></button>
                      <br/>
                      <button type='button'><AiOutlineEye/></button>
                    </div>
                </div>
              </div>
            </OwlCarousel>
            </Tab>
            <Tab eventKey="Featured" title="Featured" >
              <OwlCarousel {...owlOptions} className="owl-theme" id='HomeOwl'>
              <div class="item">
                <div className='HomeOwlStyle'>
                    <div className='row'>
                      <img src='./images/book2.jpg'/>
                    </div>
                    <div className='row mt-1'>
                      <label className='Category'>Category Name</label>
                    </div>
                    <div className='row'>
                      <label className='Name'>Book Name</label>
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
                      <label className='Free'>Free</label>
                    </div>
                    <div className='DisplayHover'>
                      <button type='button'><AiFillHeart/></button>
                      <br/>
                      <button type='button'><AiOutlineEye/></button>
                    </div>
                </div>
              </div>
            </OwlCarousel>
            </Tab>
          </Tabs>
         </div>
       </div>
    </div>
  )
}

export default Home