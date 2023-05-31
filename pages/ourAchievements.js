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
          <div className='block sm:flex m-16 pt-12 '>
          <div>
            <h1 className='sm:text-4xl text-4xl font-bold m-16 '>Our Achievements</h1>
            <div className="m-16">
        <Slider {...settings}>
        <div>
           <Image className="m-auto p-4" src="/founder1.jpg" alt="image" width="500" height="200"/>
        </div>
        <div>
        <Image className="m-auto p-4" src="/ClarWeah.png" alt="image" width="500" height="200"/>
     </div>
  <div>
  <Image className="m-auto p-4" src="/founder1.jpg" alt="image" width="500" height="200"/>
</div>
     </Slider>
        </div>
            <div>
              <p className="sm:m-16 m-8 sm:text-xl sm:p-2'">
              Clar Hope Foundation: Construction of Decontee Home for the 
              Elderly, Constructed in Buchana, Grand Bassa County through 
              Clar Hope Foundation, the 29 bed-room Home seeks to restore 
              the desired respect and dignity seniors deserve through 
              quality care.
              </p>
            </div>

            <div>
              <video autoPlay loop className="w-200  h-200 ">
              <source src="/achievements1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
             </video>
           </div>
          </div>

        
        
        </div>
       
        </div>
    )
}