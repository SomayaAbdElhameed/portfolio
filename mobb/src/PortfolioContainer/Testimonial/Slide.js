import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
     
      <div className=" backtwo">
  <img className='size-imgg' src='\Untitled-22.png'/>
  <div className="container">
        <Slider {...settings}>
         
          <div>
          <img src="\pic1.png"  className="sizee-img"  />
          </div>
          <div>
          <img src="\pic2.png"  className="sizee-img"  />
          </div>
          <div>
          <img src="\pic3.png"  className="sizee-img"  />
          </div>
          <div>
          <img src="\pic4.png"  className="sizee-img"  />
          </div>
          <div>
          <img src="\pic5.png"  className="sizee-img"  />
          </div>
         
        </Slider>
      </div>
      </div>
    );
  }
}