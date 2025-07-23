import Div from '../Div/Div'

type HeaderSectionProps = {

}

const HeaderSection = ({}:HeaderSectionProps) => {

  return (
    <header className="
            text-2xl 
            font-bold 
            sticky 
            top-10
            md:top-35
            w-screen 
            flex 
            justify-center 
            items-center 
            h-24 
            z-20
    ">
      <Div>
        <h1 className="
              font-bold 
              text-5xl 
              text-center 
              px-20 
              py-10
        ">
          QUALITY SERVICES
        </h1>
      </Div>
    </header>
  );
};

export default HeaderSection;
