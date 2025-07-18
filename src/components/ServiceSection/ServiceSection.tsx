import Div from '../Div/Div'
import ServiceCheckbox from './ServiceCheckbox/ServiceCheckbox'
import { useState } from 'react'

type ServiceSectionProps = {

}

const ServiceSection = ({}:ServiceSectionProps) => {
  const cardMap= [
    {
      key: 0, 
      service: "SEO",
      description: "Optimize your website's SEO for better positioning",
      pricing: 300,
    },
    {
      key: 1, 
      service: "ADS",
      description: "Use ads to get people to know you",
      pricing: 400
    },
    {
      key: 2, 
      service: "WEB",
      description: "Complete responsive web programming",
      pricing: 500
    }
  ];

  const [checked, setChecked] = useState<{[key: number]: boolean }>({0:false, 1:false, 2:false});

  return (
    <div className="
          flex 
          flex-col
          md:flex-row
          justify-center 
          items-center 
          gap-1
          lg:gap-10
          lg:mt-30
          mt-10 
          sticky 
          z-5
    ">
      {cardMap.map(object => (
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
        )
      )}
    </div>
  )
};

export default ServiceSection;
