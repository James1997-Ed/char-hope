import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurFounder(){

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
          <div className="mt-32 sm:text-4xl text-2xl text-center font-bold">
            <h1>About Our Founder</h1>
           <div> <Image className="m-auto sm:p-4" src="/ClarWeah.png" width="400" height="200" alt="ClarWeah"/>
           </div>
           </div>

           <div>
           <p className="sm:m-16 m-8 sm:text-xl sm:p-2'">
           A Nurse by profession, successful businesswoman, and humanitarian, Mrs. Clar M. Weah’s passion to help the underprivileged dates long before becoming First Lady in 2018. Mrs. Weah, whose motto is “To bless as many children as God has blessed me”, was helping foster children in the United States, Jamaica, and Africa. Her ascendency to the status as First Lady only provides a wider platform to achieve her purpose of improving lives.

           In 2018, Mrs. Weah founded “Clar Hope Foundation” “CHF” a non-political and non-profit organization, in an effort to create an equitable society in Liberia where women and children (in particular), are healthy, educated, and fully empowered to have a prosperous life.

          A year later, on June 20, 2019, the First Lady launched her flagship program the “She’s You Movement.” Hinging on four pillars - Health, Education, Economic Empowerment, and Gender Equality – She’s You Movement seeks the overall advancement of women and girls for a better and prosperous Liberia.
            </p>
           </div>
          
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

        <p className="sm:m-16 m-8 sm:text-xl sm:p-2'">
        After only a few years of tireless hard work in her new role, 
        First Lady Clar Marie Weah’s dream to revive the hope of Liberia’s underprivileged and marginalized groups through quality education, 
        vocational training, and rehabilitation, is finally in sight. The dream - to construct a multi-purpose facility known as ‘City of Hope’ where orphans, 
        street girls, and disadvantaged youths would be housed, educated, and transformed into constructive citizens - was announced barely months after assuming the 
        first lady role of the Republic of Liberia. The project which kicked off on June 19, 2020, in Marshall, Margibi County under the auspices of Mrs. Weah’s charity,
         Clar Hope Foundation - is now nearing completion. The City of Hope project includes dormitories, academic and vocation school buildings, recreational centers, 
         administrative buildings, clinics, theatres, and bungalows among others. The overall construction work is currently at 85 percent. Inspecting the project 
         recently, Mrs. Weah expressed delight over the massive progress being made and gratitude to the contractors for their commitment.
          </p>

        </div>
    )
}