import Div from '../Div/Div'
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox'
import { useState, useEffect } from 'react'

type ServiceSectionProps = {

}

const ServiceSection = ({}:ServiceSectionProps) => {
  const cardMap= [
    {
      key: 0, 
      service: "SEO",
      description: "Optimize your website's SEO for better positioning",
      pricing: 300,
      addOns: {
        pages: {
          name: "Pages",
          price: 30,
        },
        languages: {
          name: "Languages",
          price: 30,
        },
      },
    },
    {
      key: 1, 
      service: "ADS",
      description: "Use ads to get people to know you",
      pricing: 400,
      addOns: {
        pages: {
          name: "Pages",
          price: 30,
        },
        languages: {
          name: "Languages",
          price: 30,
        },
      },
    },
    {
      key: 2, 
      service: "WEB",
      description: "Complete responsive web programming",
      pricing: 500,
      addOns: {
        pages: {
          name: "Pages",
          price: 30,
        },
        languages: {
          name: "Languages",
          price: 30,
        },
      },
    }
  ];

  const [checked, setChecked] = useState<{[key: number]: boolean }>({0:false, 1:false, 2:false});
  const [addOns, setAddOns] = useState<{[key: number]: number}>({0: 0, 1: 0, 2: 0});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const newPrice = cardMap.reduce((acc, item) => {
      return checked[item.key] ? acc + item.pricing : acc;
    }, 0);

    setPrice(newPrice);
  }, [checked])

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
        {cardMap.map(object => (
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
                (checked[object.key] && object.service === "WEB") &&
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col items-center mt-5">
                    <div className="text-green-200/70 font-bold text-2xl">
                      <p>Pages</p>
                    </div>
                    <div className="flex justify-evenly items-baseline">
                      <Div
                        key={object.key}
                        isClickable={true}
                        isInline={true}
                      >
                        <p>
                          +
                        </p>
                      </Div>
                      <p className="text-green-200/70 font-bold text-2xl px-5">
                        {1}
                      </p>
                      <Div
                        key={object.key}
                        isClickable={true}
                        isInline={true}
                      >
                        <p>
                          -
                        </p>
                      </Div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-green-200/70 font-bold text-2xl mt-5">
                      <p>Languages</p>
                    </div>
                    <div className="flex justify-evenly items-baseline">
                      <Div
                        key={object.key}
                        isClickable={true}
                        isInline={true}
                      >
                        <p>
                          +
                        </p>
                      </Div>
                      <p className="text-green-200/70 font-bold text-2xl px-5">
                        {1}
                      </p>
                      <Div
                        key={object.key}
                        isClickable={true}
                        isInline={true}
                      >
                        <p>
                          -
                        </p>
                      </Div>
                    </div>
                  </div>
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
