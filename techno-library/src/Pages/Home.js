import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='container-fluid p-0'>
       <div className='row mt-2'>
           <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="./images/slider.jpg" alt="Home Slider" />
                </Carousel.Item>
            </Carousel>
       </div>
    </div>
  )
}

export default Home