import Div from '../Div/Div'
import GlassButton from '../GlassButton/GlassButton'

type HeaderSectionProps = {

}

const HeaderSection = ({}:HeaderSectionProps) => {
  const buttonsMap = [
    {key: 1, text: "SEO"},
    {key: 2, text: "ADS"},
    {key: 3, text: "WEB"},
  ]

  return (
    <header className="
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
      <Div>
        {buttonsMap.map(object => 
          <GlassButton 
            key={object.key} 
            text={object.text}
          />
        )}
      </Div>
    </header>
  );
};

export default HeaderSection;
