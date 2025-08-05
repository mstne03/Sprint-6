import Div from '../Div/Div'
import DivVariants from '../../data/DivVariants'
import type { HeaderSectionProps } from '../../utils/Types'
 
const HeaderSection = ({changePage}:HeaderSectionProps) => {

  return (
    <div 
        className=" 
            mt-[200px]
            flex 
            flex-col
            justify-center 
            items-center 
            gap-10
            z-20
        "
    >
      <Div>
        <h1 className="
              font-bold 
              text-4xl 
              text-wrap 
              text-center
              max-w-[600px]
              px-20 
              py-3
        ">
          TOP WEB-DEVELOPMENT SERVICES
        </h1>
      </Div>
    </div>
  );
};

export default HeaderSection;
