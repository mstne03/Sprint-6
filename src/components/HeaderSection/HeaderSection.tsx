import GlassButton from '../GlassButton/GlassButton'

type HeaderSectionProps = {

}

const HeaderSection = ({}:HeaderSectionProps) => (
  <div className="
          text-2xl 
          font-bold 
          sticky 
          top-0 
          w-screen 
          flex 
          justify-center 
          items-center 
          h-24 
          z-10
  ">
    <div className="
            mt-4
            max-w-[700px]
            p-4
            cursor-pointer 
            shadow-2xl 
            inset-shadow-gray-950 
            border-2 
            text-green-200/70 
            border-white/20 
            rounded-md 
            space-x-32
            transition
            duration-700 
            ease-in-out 
            bg-white/30  
            backdrop-blur-sm 
            hover:backdrop-blur-lg
            hover:scale-105
    ">
      <GlassButton text="SEO"/>
      
      <GlassButton text="ADS"/>
      
      <GlassButton text="WEB"/>
    </div>
  </div>
);

export default HeaderSection;
