import Div from '../Div/Div'
import WebAddons from './WebAddons/WebAddons'
import useServiceSection from '../../hooks/useServiceSection'
import cardArray from '../../data/ServiceSectionData'
import { DivVariants } from '../../data/DivVariants'
import ServiceCard from './ServiceCard/ServiceCard'

const ServiceSection = () => {

  const {
      checked,
      setChecked,
      pagesAddon,
      setPagesAddon,
      languageAddon,
      setLanguageAddon,
      price
  } = useServiceSection();

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="
            flex 
            flex-wrap
            md:flex-row
            justify-center 
            items-center 
            gap-2
            lg:gap-10
            lg:mt-30
            mt-10  
            pb-20
            z-20
      ">
        {cardArray.map(object => (
            <div className="flex flex-col min-h-[550px]">
              <ServiceCard
                key={object.key}
                id={object.key}
                onClickFun={setChecked}
                isNotHeader={DivVariants.isNotHeader}
                isClickable={DivVariants.isClickable}
                isNotInline={DivVariants.isNotInline}
                service={object.service}
                description={object.description}
                pricing={object.pricing}
                isChecked={checked[object.key]}
              />
              {
                (checked[object.key] && object.addOns) &&
                <div className="flex flex-col justify-center items-center">
                  <WebAddons 
                    key={object.key}
                    quantity={pagesAddon}
                    setQuantity={setPagesAddon}
                    addon={object.addOns!.pages.name}
                  />
                  <WebAddons
                    key={object.key}
                    quantity={languageAddon}
                    setQuantity={setLanguageAddon}
                    addon={object.addOns!.languages.name}
                  />
                </div>
              }
            </div>
          )
        )}
        
      </div>
      <div className="absolute top-[600px] md:top-[500px] z-15 md:fixed">
        <Div>
          <div className="flex gap-5 items-baseline justify-center">
            <h3 className="font-bold text-2xl">TOTAL PRICE:</h3>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold">{price}</p>
              <span>€</span>
            </div>
          </div>
        </Div>
      </div>
    </div>
  )
};

export default ServiceSection;
