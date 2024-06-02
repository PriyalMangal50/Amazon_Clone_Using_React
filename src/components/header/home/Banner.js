import React from 'react'
import Slider from "react-slick";
import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive
} from "../../../assests/banner/photos";
const Banner=()=> {
    const [dotActive,setDotActive]=React.useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        beforeChange: (current, next) => setDotActive(next),
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top:"70%",
                left:"45%",
                transform:"translate(-50%,-50%)",
                width: "210px",

              }}
            >
              <ul style={{ 
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                border: "1px blue solid",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "8px 0",
                margin: "0 5px",
                color:"white",
                cursor:"pointer",
                height:"30px",
                background:"#131921"


            }}
            >
              {i + 1}
            </div>
          
          )
        
      };
      
  return (
    <div className='w-full'>
    <div className='w-full h-full relative'>
        <Slider {...settings}>
        <div>
          <img className='w-full h-[400px]' src={bannerImgOne} alt="banner1" />
        </div>
        <div>
          <img className='w-full h-[400px]' src={bannerImgTwo} alt="banner2" />
        </div>
        <div>
          <img className='w-full h-[400px]' src={bannerImgThree} alt="banner3" />
        </div>
        <div>
          <img className='w-full h-[400px]' src={bannerImgFour} alt="banner4" />
        </div>
        <div>
          <img className='w-full h-[400px]' src={bannerImgFive} alt="banner5" />
        </div>
        
        </Slider>
      </div>
      </div>
  )
}


export default Banner