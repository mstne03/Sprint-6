import Div from '../Div/Div'
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox'
import WebAddons from './WebAddons/WebAddons'
import useServiceSection from '../../hooks/ServiceSectionHooks'
import cardArray from '../../data/ServiceSectionData'

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
              <Div 
                key={object.key} 
                isHeader={false} 
                isClickable={true}
              >
                <div className="
                        min-h-[150px] 
                        flex 
                        flex-col 
                        items-center
                        justify-between
                        gap-5
                      "
                    onClick={() => {
                      setChecked(prev => ({
                        ...prev,
                        [object.key]: !prev[object.key]
                      }));
                    }}
                >
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold">
                      {object.service}
                    </h1>
                    <p>{object.description}</p>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div className="flex gap-0 items-baseline">
                      <p className="font-bold text-2xl">
                        {object.pricing}
                      </p>
                      <span className="text-[15px]">€</span>
                    </div>
                    <ServiceCheckbox 
                      key={object.key}
                      service={object.service}
                      id={object.key}
                      checked={checked[object.key]}
                    />
                  </div>
                </div>
              </Div>
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
