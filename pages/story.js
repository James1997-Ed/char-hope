import react from "react";
import Image from "next/image";

export default function Story(){
    return(
       <div className="mt-32 items-center">
            <div className="mt-32 sm:text-4xl text-2xl text-center font-bold"><h1>Our Story</h1>  </div>
              <div>
            <p className="m-16 sm:text-xl sm:p-2'">
            Clar Hope Foundation, was founded in 2018 by the First Lady of Liberia, Madam Clar Marie Weah a non-political
            and non-profit organization, in an effort to create an equitable society in Liberia where women and children 
            (in particular), are healthy, educated and fully empowered to have a prosperous life. Is reported making significant 
            striudes with its multipurpose complex, city of hope, intented to accommodate disadvantaged girls and orphans at 85% 
            completion, First Lady Clar Marie Weah is Passionate about improving the lives of less fortunate Liberians, 
            particularly empowering girls with education and skills.
            A year later, on June 20, 2019, the First Lady launched her flagship program the “She’s You Movement.” 
              </p>
            <p className="m-16 sm:text-xl sm:p-2'">
            Clar Hope Foundation is an apolitical, non-for-profit, and non-governmental organization founded by Mrs.Weah in 
            June 2018 with the aim of creating an equitable society in Liberia where women, girls, and children are healthy, 
            educated, and fully empowered to lead independent lives. Mrs. Weah said the progressive pace of the construction 
            work made her extremely excited that the dream of building a home to transform the lives of orphans, street girls, 
            and disadvantaged youths were being realized. “I’m so happy that the buildings are going up,” said the First Lady 
            in an interview with reporters after touring the project. “It makes me proud of the idea of building a home for the 
            young girls; a school for the young girls, to educate them and make them better for Liberia.” She disclosed that the 
            thought of constructing the City of Hope came as a result of her passion and eagerness to help improve the living 
            standards of disadvantaged Liberians to complement what was being done at various orphanages. Mrs. Weah said the project 
            which will benefit the children of market women among others in support of President George Manneh Weah’s Pro-Poor Agenda 
            for Prosperity and Development.
            </p>
        </div>
        <div>
        <image src="/news12.png" width="1200" height="200" alt="char weah"/>
        </div>
        <div>
            <h1 className="mt-32 sm:text-4xl text-2xl text-center font-bold">Meet Our Partners</h1>
            <Image src="/merck.png" width="120" height="200" alt="merck"/>
            <p>Merck Foundation More than a Mother Movement</p>
        </div>
        </div>

      

    
    )
}