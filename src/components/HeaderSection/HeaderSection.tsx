import Div from '../Div/Div'

type HeaderSectionProps = {

}

const HeaderSection = ({}:HeaderSectionProps) => (
  <Div className="text-2xl font-bold sticky top-0 w-screen flex justify-center items-center h-24 z-10">
    <ul className="
            px-10 
            py-5 
            cursor-pointer 
            shadow-2xl 
            inset-shadow-gray-950 
            border-2 
            text-yellow-100/70 
            border-white/20 
            rounded-md 
            space-x-32
            transition
            duration-700 
            ease-in-out 
            bg-white/30  
            backdrop-blur-sm 
            hover:backdrop-blur-lg
            hover:transform
    ">
      <a href="">SEO</a>
      <a href="">ADS</a>
      <a href="">WEB</a>
    </ul>
  </Div>
);

export default HeaderSection;
