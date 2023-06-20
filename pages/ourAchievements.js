import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ourAchievements(){

  function SimpleNextArrow(props){
    const {className, style, onClick} = props
    return(
      <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
    )
  }


  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

    return(
        <div>
          <div className=' text-xl sm:m-16 pt-12 '>
          <div>
            <h1 className='sm:text-6xl text-2xl text-center font-bold sm:m-16 '>Our Achievements</h1>
            <div className="m-16">
        <Slider {...settings}>
        <div>
           <Image className="m-auto p-4" src="/founder1.jpg" alt="image" width="500" height="200"/>
        </div>
        <div>
        <Image className="m-auto p-4" src="/ClarWeah.png" alt="image" width="500" height="200"/>
     </div>
  <div>
  <Image className="m-auto " src="/founder1.jpg" alt="image" width="500" height="200"/>
</div>
     </Slider>
        </div>
            <div className="m-2 sm:p-4">
              <p className="sm:m-16 m-4 text-2xl sm:text-xl sm:p-2'">
              Clar Hope Foundation: Construction of Decontee Home for the 
              Elderly, Constructed in Buchana, Grand Bassa County through 
              Clar Hope Foundation, the 29 bed-room Home seeks to restore 
              the desired respect and dignity seniors deserve through 
              quality care.
              </p>
            </div>
            <div className="block ">
              <p className="sm:m-16 m-4 sm:text-2xl text-2xl sm:p-2'">
              City of Hope: a multipurpose complex under construction by Clar
              Hope foundation to provide quality education to 200 girls ages 
              3-5 and life skills to street girls and disadvantaged youth thereby
              restoring their hope for a brighter future.
              </p>
              <Slider {...settings}>
              <div className="">
                 <Image className="m-auto p-4 sm:w-56 sm:h-56" src="/city_of_hope4.jpg" alt="image" width="500" height="200"/>
              </div>
              <div className="w-full h-full m-2">
              <Image className="m-auto p-4" src="/city_of_hope.jpeg" alt="image" width="500" height="200"/>
           </div>
        <div className="w-full h-full m-2">
        <Image className="m-auto " src="/city_of_hope3.jpeg" alt="image" width="500" height="200"/>
      </div>
      <div className="w-full h-full m-2">
        <Image className="m-auto " src="/city_of_hope2.png" alt="image" width="500" height="200"/>
      </div>
           </Slider>
          </div>

            <div className="m-2 mb-20">
              <video autoPlay loop className="w-200  h-200 ">
              <source src="/achievements1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
             </video>
           </div>
           <div className="m-2 mb-20">
              <video autoPlay loop className="w-200   h-200 ">
              <source src="/Char_hope.mp4" type="video/mp4" />
              Your browser does not support the video tag.
             </video>
           </div>
          </div>
          <div className="block sm:flex">
          <p className="mt-16 sm:p-16 text-2xl m-2">Training of over 40 Medical practitioners: in partnership
             with Merck Foundation, at least 40 medical practitioners including 
             doctors have been trained in various specialties in oncology, gynecology,
              embryology among others</p>
            <Image src="/china2.jpg" width="400" height="200" alt="image" className="mb-8"/>
          </div>
        </div>
  
        </div>
    )
}