import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from '../Images/slider/sliderImg_1.jpg';
import sliderImg_2 from '../Images/slider/sliderImg_2.jpg';
import sliderImg_3 from '../Images/slider/sliderImg_3.jpg';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}
      interval={3000}>
                <div>
                   <Image priority src={sliderImg_1} alt="sliderImg_1"/>

                </div>
                <div>
                <Image src={sliderImg_2} alt="sliderImg_2"/>
                   
                </div>
                <div>
                <Image src={sliderImg_3} alt="sliderImg_3"/>
  
                </div>
               
             

            </Carousel>
            <div className='w-full h-40 bg-gradient-to-t from-gray-100
                 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};

export default Banner;
